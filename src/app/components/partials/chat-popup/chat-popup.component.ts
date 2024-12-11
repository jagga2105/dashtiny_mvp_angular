import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { GenerativeaiService } from 'src/app/services/generativeai.service';

@Component({
  selector: 'app-chat-popup',
  templateUrl: './chat-popup.component.html',
  styleUrls: ['./chat-popup.component.scss'],
})
export class ChatPopupComponent implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  tripForm: FormGroup;
  itinerary: any;
  messages: any[] = [
    { sender: 'bot', message: 'Hello! How can I assist you today?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ];
  userMessage: string = '';
  errorMessage: string = '';


  ngOnInit(): void { }
  generativeAiService: GenerativeaiService = inject(GenerativeaiService);
  chatHistory: any[] = [];
  constructor(private fb: FormBuilder) {
    this.tripForm = this.fb.group({
      destination: ['', Validators.required],
      dates: ['', Validators.required],
      purpose: ['', Validators.required]
    });
    this.generativeAiService.getMessageHistory().subscribe((res) => {
      if(res){
      this.chatHistory.push(res);
      console.log(res);
      }
    })
  }

  sendMessage(): void {
    if(this.userMessage) {
      this.generativeAiService.generateText(this.userMessage);
    }
  }


  onSubmit() {
    if (this.tripForm.valid) {
      const formValues = this.tripForm.value;
      this.generateItinerary(formValues);
    }
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
  formatMessage(message: string): string {
    // Replace ** with <h4> and </**> with </h4>
    let formattedMessage = message.replace(/\*\*(.*?)\*\*/g, '<h4>$1</h4>');

    // Replace * with <li><h5> and </* with </h5></li>
    formattedMessage = formattedMessage.replace(/\*(.*?)\n/g, '<li>$1');
    formattedMessage = formattedMessage.replace(/\*(.*?)$/g, '<li>$1</li>');

    // Wrap the entire list with <ul>
    formattedMessage = '<ul class="chat-response-ul">' + formattedMessage + '</ul>';

    return formattedMessage;
  }
}
