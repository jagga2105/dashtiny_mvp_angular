import { Component, EventEmitter, HostListener, OnInit, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenerativeAiService } from '../../../services/generativeai.service';
import { ChatMessage } from '../../../models/chat-message.interface';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog } from '@angular/material/dialog';
import { TravelInputDialogComponent } from '../../dialogs/travel-input-dialog/travel-input-dialog.component';
import { ItineraryGeneratorService } from '../../../services/itinerary-generator.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.scss'],
})
export class ChatPopupComponent implements OnInit, OnDestroy {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  
  // Form and UI properties
  tripForm: FormGroup;
  itinerary: any;
  prompt: string = '';
  loading: boolean = false;
  isSidebarCollapsed = false;
  dialogJustClosed = false;

  // Chat states
  userMessage = '';
  errorMessage = '';
  chatHistory: ChatMessage[] = [];
  isProcessing = false;
  currentItineraryData: any = null;

  // Animation properties
  currentTypingText: string = '';
  private typingInterval: any;
  private typingTexts = [
    'Finding best locations',
    'Analyzing travel routes',
    'Discovering local activities',
    'Checking weather conditions',
    'Calculating best prices',
    'Planning your itinerary'
  ];

  // Layout properties
  chatContentWidth: string = '70%';
  historyWidth: string = '30%';
  isResizing: boolean = false;
  startX: number = 0;

  constructor(
    private fb: FormBuilder, 
    private generativeAiService: GenerativeAiService,
    private dialog: MatDialog,
    private itineraryGenerator: ItineraryGeneratorService
  ) {
    debugger; // Check component initialization
    this.tripForm = this.fb.group({
      destinationStep: this.fb.group({
        destination: ['', Validators.required]
      }),
      datesStep: this.fb.group({
        dates: ['', Validators.required]
      }),
      purposeStep: this.fb.group({
        purpose: ['', Validators.required]
      }),
      departureStep: this.fb.group({
        departure: ['', Validators.required]
      }),
      transportationStep: this.fb.group({
        transportationMode: ['', Validators.required]
      }),
      budgetStep: this.fb.group({
        budget: ['', Validators.required]
      }),
      groupSizeStep: this.fb.group({
        groupSize: ['', Validators.required]
      }),
      accommodationStep: this.fb.group({
        accommodation: ['', Validators.required]
      }),
      specialRequirementsStep: this.fb.group({
        specialRequirements: ['']
      })
    });

    this.generativeAiService.getMessageHistory().subscribe((res) => {
      debugger; // Check incoming messages
      if (res) {
        // Remove any processing messages
        this.chatHistory = this.chatHistory.filter(msg => !msg.isProcessing);
        
        // Add new message with itinerary data if available
        if (res.parsedData) {
          debugger; // Check itinerary data processing
          this.itinerary = res.parsedData;
          this.chatHistory.push({
            id: uuidv4(),
            from: 'bot',
            message: res.parsedData,
            timestamp: new Date(),
            type: 'itinerary',
            parsedData: res.parsedData
          });
        } else {
          // Add regular message
          this.chatHistory = [...this.chatHistory, res];
        }
        this.scrollToBottom();
      }
    });
  }

  ngOnInit(): void {
    this.startTypingAnimation();
  }

  private startTypingAnimation(): void {
    let index = 0;
    this.currentTypingText = this.typingTexts[0];
    
    this.typingInterval = setInterval(() => {
      index = (index + 1) % this.typingTexts.length;
      this.currentTypingText = this.typingTexts[index];
    }, 3000);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isResizing) return;

    const delta = event.clientX - this.startX;
    this.startX = event.clientX;

    const chatContentFlex = parseFloat(this.chatContentWidth.replace('%', ''));
    const historyFlex = parseFloat(this.historyWidth.replace('%', ''));

    const totalFlex = chatContentFlex + historyFlex;
    const newChatContentFlex = chatContentFlex + (delta / window.innerWidth) * totalFlex;
    const newHistoryFlex = historyFlex - (delta / window.innerWidth) * totalFlex;

    if (newChatContentFlex > 10 && newHistoryFlex > 10) {
      this.chatContentWidth = `${newChatContentFlex}%`;
      this.historyWidth = `${newHistoryFlex}%`;
    }
  }

  @HostListener('window:mouseup')
  onMouseUp(): void {
    this.isResizing = false;
  }

  startResize(event: MouseEvent): void {
    this.isResizing = true;
    this.startX = event.clientX;
    event.preventDefault(); // Prevent text selection
  }

  private checkMessageForItinerary(message: string): { isItinerary: boolean; source?: string; destination?: string } {
    const itineraryVariations = [
      'itinerary', 'itinery', 'itiniry', 'iternary', 'itinary', 'itnery', 
      'itenary', 'trip', 'plan', 'travel', 'journey'
    ];

    const lowerMessage = message.toLowerCase();
    
    // Check if message contains itinerary-related words
    const isItinerary = itineraryVariations.some(word => lowerMessage.includes(word));

    if (!isItinerary) return { isItinerary: false };

    // Try to extract source and destination
    const patterns = [
      /(?:from\s+)?([a-zA-Z\s]+)\s+to\s+([a-zA-Z\s]+)/i,
      /(?:plan|create|make)(?:\s+a)?\s+(?:trip|itinerary)\s+(?:from\s+)?([a-zA-Z\s]+)\s+to\s+([a-zA-Z\s]+)/i,
      /(?:travel|journey)\s+(?:from\s+)?([a-zA-Z\s]+)\s+to\s+([a-zA-Z\s]+)/i
    ];

    for (const pattern of patterns) {
      const match = lowerMessage.match(pattern);
      if (match) {
        return {
          isItinerary: true,
          source: match[1].trim(),
          destination: match[2].trim()
        };
      }
    }

    // If no source/destination found but it's an itinerary request
    return { isItinerary: true };
  }

  public async sendMessage() {
    debugger; // Start debugging message send flow
    if (!this.userMessage.trim() || this.isProcessing) return;

    try {
      this.isProcessing = true;
      const userMessageText = this.userMessage;
      
      // Check if message is an itinerary request
      const itineraryCheck = this.checkMessageForItinerary(userMessageText);
      debugger; // Check itinerary detection

      // Add user message to chat
      this.addMessage({
        id: uuidv4(),
        from: 'user',
        message: userMessageText,
        timestamp: new Date(),
        type: 'text'
      });

      this.userMessage = '';

      // Add loading message
      const loadingMessageId = uuidv4();
      this.addMessage({
        id: loadingMessageId,
        from: 'bot',
        message: 'Let me help you with that...',
        timestamp: new Date(),
        type: 'loading',
        isProcessing: true
      });

      debugger; // Check before processing request
      if (itineraryCheck.isItinerary) {
        if (itineraryCheck.source && itineraryCheck.destination) {
          // If we have source and destination, create a structured itinerary request
          await this.processItineraryRequest(itineraryCheck.source, itineraryCheck.destination);
        } else {
          // If we don't have source/destination, open the travel input dialog
          this.openTravelPrompt();
        }
      } else {
        // Handle as regular message
        await this.generativeAiService.generateText(userMessageText);
      }

      debugger; // Check after processing response
      // Remove loading message
      this.chatHistory = this.chatHistory.filter(msg => msg.id !== loadingMessageId);

    } catch (error) {
      debugger; // Check error handling
      this.errorMessage = 'Sorry, there was an error processing your message.';
      console.error('Error in sendMessage:', error);
    } finally {
      this.isProcessing = false;
    }
  }

  private async processItineraryRequest(source: string, destination: string) {
    const prompt = `Create a detailed travel itinerary from ${source} to ${destination}. 
Please include:
- Daily activities and timings
- Recommended places to visit
- Estimated costs
- Weather information
- Travel logistics

Format the response in a structured JSON format with the following sections:
- Trip overview (duration, total distance, budget)
- Daily itinerary with activities
- Travel recommendations
- Local highlights`;

    await this.generativeAiService.generateText(prompt);
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const container = document.querySelector('.chat-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 100);
  }

  private addMessage(message: ChatMessage): void {
    debugger; // Check message addition to chat
    this.chatHistory = [...this.chatHistory, message];
    
    // Update current itinerary data when a new itinerary message is received
    if (message.type === 'itinerary' && message.parsedData) {
      this.currentItineraryData = message.parsedData;
      console.log('Updated itinerary data for suggestions:', this.currentItineraryData);
    }
    
    this.scrollToBottom();
  }

  public formatMessage(message: string): string {
    if (!message) {
      console.error('Message is undefined or empty:', message);
      return '';
    }

    try {
      // Try to parse as JSON if message is a string representation of JSON
      const parsed = typeof message === 'string' ? JSON.parse(message) : message;
      
      // Handle itinerary type messages
      if (parsed.type === 'itinerary') {
        return this.formatItineraryResponse(parsed);
      }
      
      return this.formatJsonMessage(parsed);
    } catch (e) {
      return this.formatTextResponse(message);
    }
  }

  private formatItineraryResponse(data: any): string {
    try {
      // Safely stringify the data
      const safeData = JSON.stringify(data).replace(/"/g, '&quot;');
      
      // Create a wrapper div with the itinerary-preview component
      return `
        <div class="itinerary-preview-wrapper">
          <app-itinerary-preview [data]='${safeData}'></app-itinerary-preview>
        </div>`;
    } catch (error) {
      console.error('Error formatting itinerary:', error);
      return 'Error formatting itinerary details';
    }
  }

  private formatJsonMessage(data: any): string {
    try {
      switch (data.type) {
        case 'suggestion':
          return this.formatSuggestions(data);
        case 'error':
          return `<div class="error-message">${data.message}</div>`;
        default:
          return `<div class="formatted-json">${JSON.stringify(data, null, 2)}</div>`;
      }
    } catch (error) {
      console.error('Error formatting JSON message:', error);
      return 'Error formatting message';
    }
  }

  private formatTextResponse(text: string): string {
    let formattedMessage = text
      .replace(/\*\*(.*?)\*\*/g, '<h4>$1</h4>')
      .replace(/\*(.*?)\n/g, '<li>$1')
      .replace(/\*(.*?)$/g, '<li>$1</li>');

    if (formattedMessage.includes('<li>')) {
      formattedMessage = '<ul class="chat-response-ul">' + formattedMessage + '</ul>';
    }

    return formattedMessage;
  }

  private formatSuggestions(data: any): string {
    return `
      <div class="suggestions">
        <p>${data.message}</p>
        <div class="suggestion-buttons">
          ${data.suggestions.map((s: string) => `
            <button class="suggestion-btn">${s}</button>
          `).join('')}
        </div>
      </div>
    `;
  }

  private formatItineraryRequestPrompt(message: string): string {
    // Extract source and destination using regex
    const locationMatch = message.match(/(?:from\s+)?([a-zA-Z\s]+)\s+to\s+([a-zA-Z\s]+)/i);
    const source = locationMatch ? locationMatch[1].trim() : '';
    const destination = locationMatch ? locationMatch[2].trim() : '';

    // Default dates (5 days from now)
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 5);

    return `Create a detailed travel itinerary from ${source} to ${destination}. Include daily activities, recommended places to visit, and timings. Structure the response as a JSON object with sections for each day. Include:
- Trip name
- Origin and destination
- Start and end dates (${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]})
- Daily sections with activities including time, description, type (Travel/Sightseeing/Meal/Activity), and location

Format the response as a JSON object inside markdown code block starting with \`\`\`json and ending with \`\`\``;
  }

  generateItinerary(formValues: any) {
    // Dummy itinerary data, in a real application you would fetch this data from an API
    this.itinerary = {
      days: [
        {
          title: 'Day 1: Arrival and Exploration',
          description: 'Arrive at the destination and start exploring the nearby areas.',
          steps: [
            {
              title: 'Travel to Destination',
              details: 'Flight from origin to destination, followed by a taxi to the hotel.'
            },
            {
              title: 'Check-in at Hotel',
              details: 'Check-in at the designated hotel and rest.'
            },
            {
              title: 'Visit Local Attractions',
              details: 'Visit the nearby attractions such as museums and parks.'
            }
          ]
        },
        {
          title: 'Day 2: Adventure and Activities',
          description: 'Enjoy various activities and adventure sports available in the area.',
          steps: [
            {
              title: 'Morning: Hiking',
              details: 'Guided hiking tour in the nearby hills.'
            },
            {
              title: 'Afternoon: Water Sports',
              details: 'Engage in water sports like kayaking and snorkeling.'
            },
            {
              title: 'Evening: Relax at the Beach',
              details: 'Spend the evening relaxing at the beach and watching the sunset.'
            }
          ]
        },
        {
          title: 'Day 3: Cultural Immersion',
          description: 'Immerse yourself in the local culture and traditions.',
          steps: [
            {
              title: 'Visit Local Markets',
              details: 'Explore the local markets and shop for souvenirs.'
            },
            {
              title: 'Attend a Cultural Show',
              details: 'Attend a local cultural show to learn about the traditions.'
            },
            {
              title: 'Dinner at a Local Restaurant',
              details: 'Enjoy dinner at a local restaurant serving traditional cuisine.'
            }
          ]
        }
      ]
    };
  }

  bookNow(day: any) {
    alert(`Booking for ${day.title}`);
  }

  onCloseClick() {
    this.close.emit();
  }

  openTravelPrompt(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    
    // Add initial user message
    this.addMessage({
      id: uuidv4(),
      from: 'user',
      message: 'Plan a detailed travel itinerary for me',
      timestamp: new Date(),
      type: 'text'
    });
    
    console.log('Opening travel prompt dialog');
    
    const dialogRef = this.dialog.open(TravelInputDialogComponent, {
      width: '800px',
      height: '90vh',
      panelClass: 'travel-input-dialog',
      disableClose: true
    });

    dialogRef.afterClosed().pipe(
      take(1)
    ).subscribe({
      next: async (result) => {
        if (!result || !result.shouldSend) {
          return;
        }

        const loadingMessageId = uuidv4();

        try {
          // Add loading message and store its ID
          this.addMessage({
            id: loadingMessageId,
            from: 'bot',
            message: 'Generating your itinerary...',
            timestamp: new Date(),
            type: 'loading',
            isProcessing: true
          });

          // Generate itinerary
          await this.generativeAiService.generateText(result.prompt);
          
          // Remove loading message if it exists
          if (loadingMessageId) {
            this.chatHistory = this.chatHistory.filter(msg => msg.id !== loadingMessageId);
          }
          
        } catch (error) {
          console.error('Error generating itinerary:', error);
          // Remove loading message in case of error
          if (loadingMessageId) {
            this.chatHistory = this.chatHistory.filter(msg => msg.id !== loadingMessageId);
          }
          // Add error message
          this.addMessage({
            id: uuidv4(),
            from: 'bot',
            message: 'Sorry, there was an error generating your itinerary. Please try again.',
            timestamp: new Date(),
            type: 'text'
          });
        }
      },
      error: (error) => {
        console.error('Dialog error:', error);
      }
    });
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }
}
