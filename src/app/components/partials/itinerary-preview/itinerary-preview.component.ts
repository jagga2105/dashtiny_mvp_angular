import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

// Define the PlaceDetails interface
interface PlaceDetails {
  id: number;
  name: string;
  cuisine?: string;
  amenities?: string;
  rating: number;
  reviews: number;
}
import { UnsplashService } from '../../../services/unsplash.service';
import { forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ItineraryData } from '../../../models/itinerary.model';

@Component({
  selector: 'app-itinerary-preview',
  templateUrl: './itinerary-preview.component.html',
  styleUrls: ['./itinerary-preview.component.scss']
})
export class ItineraryPreviewComponent implements OnInit {
  @ViewChild('itineraryContent') itineraryContent!: ElementRef;
  @Input() data!: ItineraryData;

  isLoading: boolean = true;

  // Store generated data with stable IDs
  private placeDetailsMap: Map<string, { id: number; name: string; cuisine?: string; amenities?: string; rating: number; reviews: number }[]> = new Map();

  // Pre-defined arrays for random selection
  private readonly restaurantNames = [
    'The Golden Spice',
    'Café Marina',
    'La Piazza',
    'Fusion Kitchen',
    'The Royal Plate'
  ];

  private readonly cuisineTypes = [
    'Italian • Mediterranean',
    'Indian • Contemporary',
    'Asian Fusion',
    'Continental • Seafood',
    'Local • Traditional'
  ];

  private readonly hotelNames = [
    'Grand Plaza Hotel',
    'Riverside Inn',
    'The Majestic',
    'Ocean View Resort',
    'City Lights Hotel'
  ];

  private readonly amenitiesList = [
    'Pool • Spa • Restaurant • Gym',
    'Free WiFi • Breakfast • Parking',
    'Beach Access • Room Service • Bar',
    'Airport Shuttle • Business Center',
    'Rooftop Bar • Luxury Spa • Tennis'
  ];

  constructor(private unsplashService: UnsplashService) {}

  ngOnInit() {
    console.log('Itinerary Preview Data:', this.data);
    this.processIncomingData();

    // Generate and store place details
    this.placeDetailsMap.set('restaurants', this.generatePlaceDetails('restaurant'));
    this.placeDetailsMap.set('hotels', this.generatePlaceDetails('hotel'));
  }

  private processIncomingData() {
    if (!this.data || !this.data.data) {
      console.warn('No itinerary data provided');
      this.data = this.getEmptyItineraryData();
      return;
    }

    try {
      const processedData = {
        type: this.data.type,
        message: this.data.message,
        data: {
          totalTripDuration: this.data.data.totalTripDuration,
          estimatedBudget: {
            total: this.data.data.estimatedBudget?.total || 0,
            breakdown: this.data.data.estimatedBudget?.breakdown?.map(item => ({
              category: item.category,
              amount: item.amount
            })) || []
          },
          totalDistance: this.data.data.totalDistance,
          departure: {
            location: this.data.data.departure?.location || '',
            date: this.data.data.departure?.date || '',
            time: this.data.data.departure?.time || '',
            weather: this.data.data.departure?.weather || { temperature: '', condition: '' }
          },
          arrival: {
            location: this.data.data.arrival?.location || '',
            date: this.data.data.arrival?.date || '',
            time: this.data.data.arrival?.time || '',
            weather: this.data.data.arrival?.weather || { temperature: '', condition: '' }
          },
          dailyItinerary: this.data.data.dailyItinerary?.map(day => ({
            day: day.day,
            date: day.date,
            activities: (day.activities || []).map((activity: any) => {
              if (typeof activity === 'string') {
                return {
                  time: this.getActivityTime(activity),
                  activity: this.getActivityDescription(activity),
                  location: this.getActivityLocation(activity),
                  place_type: this.inferPlaceType(activity),
                  estimatedCost: this.estimateActivityCost(activity),
                  weather: { temperature: '', condition: '' }
                };
              }
              return {
                time: activity.time || this.getActivityTime(activity.description || ''),
                activity: activity.activity || activity.description || '',
                location: activity.location || this.getActivityLocation(activity.description || ''),
                place_type: activity.place_type || this.inferPlaceType(activity.description || activity.activity || ''),
                estimatedCost: activity.estimatedCost || this.estimateActivityCost(activity.description || ''),
                weather: activity.weather || { temperature: '', condition: '' }
              };
            })
          })) || []
        }
      };

      this.data = processedData;
      this.isLoading = false;
    } catch (error) {
      console.error('Error processing data:', error);
      this.data = this.getEmptyItineraryData();
      this.isLoading = false;
    }
  }

  private extractTimeFromDescription(activity: any): string {
    if (typeof activity === 'string') {
      if (activity.toLowerCase().includes('early morning')) return '06:00';
      if (activity.toLowerCase().includes('morning')) return '09:00';
      if (activity.toLowerCase().includes('afternoon')) return '14:00';
      if (activity.toLowerCase().includes('evening')) return '18:00';
      if (activity.toLowerCase().includes('night')) return '20:00';
    }
    return '';
  }

  private extractTimeFromText(text: string): string {
    const timeMatch = text.match(/(\d{1,2}:\d{2})|morning|afternoon|evening/i);
    if (timeMatch) {
      const time = timeMatch[0].toLowerCase();
      switch (time) {
        case 'morning': return '09:00';
        case 'afternoon': return '14:00';
        case 'evening': return '18:00';
        default: return time;
      }
    }
    return '';
  }

  private inferPlaceType(activity: string): string {
    const lowerDesc = activity.toLowerCase();
    
    if (lowerDesc.includes('beach') || lowerDesc.includes('park') || lowerDesc.includes('temple')) {
      return 'TA';
    }
    if (lowerDesc.includes('restaurant') || lowerDesc.includes('dining')) {
      return 'R';
    }
    if (lowerDesc.includes('hotel') || lowerDesc.includes('accommodation')) {
      return 'H';
    }
    
    return 'TA'; // Default to Tourist Attraction
  }

  private estimateActivityCost(description: string): number {
    const lowerDesc = description.toLowerCase();
    
    if (lowerDesc.includes('hotel') || lowerDesc.includes('resort')) {
      return 2000;
    }
    if (lowerDesc.includes('restaurant') || lowerDesc.includes('dining')) {
      return 500;
    }
    if (lowerDesc.includes('taxi') || lowerDesc.includes('transport')) {
      return 300;
    }
    if (lowerDesc.includes('entry') || lowerDesc.includes('ticket')) {
      return 200;
    }
    
    return 100; // Default cost
  }

  private extractLocationFromActivity(activity: any): string {
    if (!activity) return '';
    
    // If location is directly provided
    if (activity.location) return activity.location;
    
    // Extract from description
    const description = activity.description || '';
    
    // Common location patterns
    const patterns = [
      /(?:in|at|to|visit)\s+([^,.]+(?:Beach|Temple|Fort|Park|Market|Airport|Hotel|Restaurant))/i,
      /(?:in|at|to)\s+([^,.]+)/i,
      /([^,.]+(?:Beach|Temple|Fort|Park|Market|Airport|Hotel|Restaurant))/i
    ];

    for (const pattern of patterns) {
      const match = description.match(pattern);
      if (match && match[1]) {
        return match[1].trim();
      }
    }
    
    return '';
  }

  private generatePlaceDetails(type: 'restaurant' | 'hotel'): PlaceDetails[] {
    return [1, 2, 3].map(index => ({
      id: index,
      name: type === 'restaurant' ? this.getRandomFromArray(this.restaurantNames) : this.getRandomFromArray(this.hotelNames),
      cuisine: type === 'restaurant' ? this.getRandomFromArray(this.cuisineTypes) : undefined,
      amenities: type === 'hotel' ? this.getRandomFromArray(this.amenitiesList) : undefined,
      rating: 4 + Math.random(),
      reviews: type === 'restaurant' ? 100 + (index * 50) : 200 + (index * 75)
    }));
  }

  private getRandomFromArray(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Methods to access stored data
  getPlaceDetails(type: string, index: number): PlaceDetails {
    const details = this.placeDetailsMap.get(type === 'R' ? 'restaurants' : 'hotels');
    return details?.find(d => d.id === index) || {
      id: index,
      name: 'Unknown Place',
      rating: 4,
      reviews: 100
    };
  }

  getBudgetBreakdownTotal(): number {
    return this.data?.data?.estimatedBudget?.breakdown?.reduce((acc: number, item: any) => acc + item.amount, 0) || 0;
  }

  getWeatherIcon(condition: string): string {
    switch (condition.toLowerCase()) {
      case 'clear': return 'wb_sunny';
      case 'sunny': return 'wb_sunny';
      case 'cloudy': return 'cloud';
      case 'partly cloudy': return 'partly_cloudy_day';
      case 'rainy': return 'rain';
      default: return 'wb_sunny';
    }
  }

  private calculateTripDuration(startDate: string, endDate: string): string {
    try {
      if (!startDate || !endDate) {
        return 'Duration not specified';
      }

      const start = new Date(this.formatDateString(startDate));
      const end = new Date(this.formatDateString(endDate));

      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        console.error('Invalid date parsing:', { startDate, endDate, start, end });
        return 'Invalid dates';
      }

      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      return `${days} day${days !== 1 ? 's' : ''}`;
    } catch (error) {
      console.error('Error calculating duration:', error);
      return 'Duration not specified';
    }
  }

  private getEmptyItineraryData(): ItineraryData {
    return {
      type: 'itinerary',
      message: '',
      data: {
        totalTripDuration: '',
        estimatedBudget: {
          total: 0,
          breakdown: []
        },
        totalDistance: '',
        departure: {
          location: 'Not specified',
          date: '',
          time: '',
          weather: undefined
        },
        arrival: {
          location: 'Not specified',
          date: '',
          time: '',
          weather: undefined
        },
        dailyItinerary: []
      }
    };
  }

  private async processData(data: ItineraryData) {
    this.isLoading = true;
    try {
      const processedData = JSON.parse(JSON.stringify(data));
      
      // Ensure dates are in correct format
      if (processedData.data.departure?.date) {
        processedData.data.departure.date = this.formatDateString(processedData.data.departure.date);
      }
      if (processedData.data.arrival?.date) {
        processedData.data.arrival.date = this.formatDateString(processedData.data.arrival.date);
      }

      // Process daily itinerary dates
      if (processedData.data.dailyItinerary?.length) {
        processedData.data.dailyItinerary.forEach((day: any) => {
          if (day.date) {
            day.date = this.formatDateString(day.date);
          }
        });
      }

      // Rest of the processing logic
      if (!processedData?.data?.dailyItinerary?.length) {
        console.log('No daily itinerary data available');
        return;
      }

      const imageRequests: Observable<string[]>[] = [];

      // Process tourist attractions and gather image requests
      processedData.data.dailyItinerary.forEach((day) => {
        if (!Array.isArray(day.activities)) {
          day.activities = [];
          return;
        }

        day.activities.forEach(activity => {
          if (activity.place_type === 'TA') {
            const searchQuery = activity.image_name_suggestion?.length 
              ? activity.image_name_suggestion.join(' ')
              : `${activity.location} ${activity.activity}`;
            
            imageRequests.push(
              this.unsplashService.searchPhotos(searchQuery, 3).pipe(
                tap(images => {
                  console.log(`Received images for ${searchQuery}:`, images);
                })
              )
            );
          }
        });
      });

      if (imageRequests.length > 0) {
        const images = await forkJoin(imageRequests).toPromise();
        let imageIndex = 0;

        processedData.data.dailyItinerary.forEach(day => {
          day.activities.forEach(activity => {
            if (activity.place_type === 'TA' && images?.[imageIndex]) {
              activity.images = images[imageIndex];
              imageIndex++;
            }
          });
        });
      }
    } catch (error) {
      console.error('Error processing itinerary:', error);
    } finally {
      this.isLoading = false;
    }
  }

  private formatDateString(dateStr: string): string {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        // Try parsing DD/MM/YYYY format
        const [day, month, year] = dateStr.split('/').map(Number);
        return new Date(year, month - 1, day).toISOString().split('T')[0];
      }
      return date.toISOString().split('T')[0];
    } catch {
      return dateStr;
    }
  }

  async exportToPDF() {
    try {
      const content = this.itineraryContent.nativeElement;
      this.isLoading = true;

      // Create PDF with A4 dimensions
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = 210;  // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const margins = 20;     // margins in mm
      
      // Add title
      pdf.setFontSize(20);
      pdf.text('Travel Itinerary', pageWidth/2, margins, { align: 'center' });
      
      // Add basic info
      pdf.setFontSize(12);
      pdf.text(`Duration: ${this.data.data.totalTripDuration}`, margins, margins + 15);
      pdf.text(`Total Distance: ${this.data.data.totalDistance}`, margins, margins + 22);
      pdf.text(`Budget: ₹${this.data.data.estimatedBudget.total}`, margins, margins + 29);

      // Add departure and arrival info
      pdf.text('Departure:', margins, margins + 40);
      pdf.setFontSize(10);
      pdf.text(`From: ${this.data.data.departure.location}`, margins + 10, margins + 47);
      pdf.text(`Date: ${this.data.data.departure.date} at ${this.data.data.departure.time}`, margins + 10, margins + 54);
      
      pdf.setFontSize(12);
      pdf.text('Arrival:', margins, margins + 65);
      pdf.setFontSize(10);
      pdf.text(`To: ${this.data.data.arrival.location}`, margins + 10, margins + 72);
      pdf.text(`Date: ${this.data.data.arrival.date} at ${this.data.data.arrival.time}`, margins + 10, margins + 79);

      // Add daily itinerary
      let yPos = margins + 95;
      pdf.setFontSize(14);
      pdf.text('Daily Itinerary', margins, yPos);
      yPos += 10;

      // Process each day
      for (const day of this.data.data.dailyItinerary) {
        // Check if we need a new page
        if (yPos > pageHeight - margins) {
          pdf.addPage();
          yPos = margins;
        }

        // Add day header
        pdf.setFontSize(12);
        pdf.text(`Day ${day.day} - ${day.date}`, margins, yPos);
        yPos += 7;

        // Process each activity
        for (const activity of day.activities) {
          // Check if we need a new page
          if (yPos > pageHeight - margins) {
            pdf.addPage();
            yPos = margins;
          }

          // Add activity details
          pdf.setFontSize(10);
          pdf.text(`${activity.time} - ${activity.activity}`, margins + 5, yPos);
          pdf.text(`Location: ${activity.location}`, margins + 5, yPos + 5);
          if (activity.estimatedCost) {
            pdf.text(`Cost: ₹${activity.estimatedCost}`, margins + 5, yPos + 10);
          }
          if (activity.weather) {
            pdf.text(`Weather: ${activity.weather.temperature}, ${activity.weather.condition}`, margins + 5, yPos + 15);
          }

          yPos += 20;
        }

        yPos += 10;
      }

      // Add budget breakdown
      if (yPos > pageHeight - 60) {
        pdf.addPage();
        yPos = margins;
      }

      pdf.setFontSize(14);
      pdf.text('Budget Breakdown', margins, yPos);
      yPos += 10;

      pdf.setFontSize(10);
      this.data.data.estimatedBudget.breakdown.forEach((item: any) => {
        pdf.text(`${item.category}: ₹${item.amount}`, margins + 5, yPos);
        yPos += 7;
      });

      // Add footer with generation date
      pdf.setFontSize(8);
      const today = new Date().toLocaleDateString();
      pdf.text(`Generated on ${today}`, pageWidth/2, pageHeight - 10, { align: 'center' });

      // Save the PDF
      const fileName = `itinerary_${this.data.message.replace(/\s+/g, '_').toLowerCase()}.pdf`;
      pdf.save(fileName);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      this.isLoading = false;
    }
  }

  private isValidDate(dateString: string): boolean {
    if (!dateString) return false;
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date.getTime());
  }

  private generateDailyItinerary(startDate: string, endDate: string, existingItinerary: any[] = []): any[] {
    if (existingItinerary && existingItinerary.length > 0) {
      return existingItinerary;
    }

    const start = new Date(this.formatDateString(startDate));
    const end = new Date(this.formatDateString(endDate));
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    
    const itinerary: Array<{day: number; date: string; activities: any[]}> = [];
    for (let i = 0; i < days; i++) {
      const date = new Date(start);
      date.setDate(date.getDate() + i);
      itinerary.push({
        day: i + 1,
        date: this.formatDateString(date.toISOString().split('T')[0]),
        activities: []
      });
    }
    
    return itinerary;
  }

  getDayNumber(dateString: string): number {
    if (!dateString) return 0;
    const date = new Date(dateString);
    const startDate = new Date(this.data?.data?.departure?.date);
    return Math.floor((date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  }

  getActivityTime(activity: any): string {
    if (typeof activity === 'string') {
      const timeMatch = activity.match(/(\d{1,2}:\d{2})|morning|afternoon|evening/i);
      if (timeMatch) {
        const match = timeMatch[0].toLowerCase();
        switch (match) {
          case 'morning': return '09:00';
          case 'afternoon': return '14:00';
          case 'evening': return '18:00';
          default: return timeMatch[0];
        }
      }
      return '';
    }
    return activity?.time || '';
  }

  getActivityDescription(activity: any): string {
    if (typeof activity === 'string') {
      return activity.replace(/^(Morning:|Afternoon:|Evening:)\s*/, '').trim();
    }
    return activity?.activity || activity?.description || 'No activity specified';
  }

  getActivityLocation(activity: any): string {
    if (typeof activity === 'string') {
      const locationMatch = activity.match(/(?:in|at|to|visit)\s+([^,.]+)/i);
      return locationMatch ? locationMatch[1].trim() : '';
    }
    return activity?.location || '';
  }
}
