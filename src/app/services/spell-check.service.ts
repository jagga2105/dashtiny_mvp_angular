import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpellCheckService {
  private readonly correctionMap: { [key: string]: string } = {
    'itinary': 'itinerary',
    'itenary': 'itinerary',
    'itenerary': 'itinerary',
    'iternary': 'itinerary',
    'travle': 'travel',
    'travell': 'travel',
    'vaccation': 'vacation',
    'holyday': 'holiday',
    'accomodation': 'accommodation',
    'acommodation': 'accommodation',
    'hotell': 'hotel',
    'flght': 'flight',
    'fligt': 'flight',
    'destinetion': 'destination',
    'journy': 'journey',
    'wether': 'weather',
    'scedule': 'schedule',
    'scheduel': 'schedule',
    'availible': 'available',
    'availabel': 'available',
    'bookng': 'booking',
    'transportetion': 'transportation',
    'transportion': 'transportation',
    'activites': 'activities',
    'activitie': 'activities',
    'resturant': 'restaurant',
    'resturent': 'restaurant',
    'hotal': 'hotel',
    'hotals': 'hotels',
    'departur': 'departure',
    'arival': 'arrival'
  };

  private readonly travelTerms = new Set([
    'itinerary', 'travel', 'vacation', 'holiday',
    'accommodation', 'hotel', 'flight', 'destination',
    'journey', 'trip', 'booking', 'departure', 'arrival',
    'weather', 'schedule', 'available', 'transportation',
    'activities', 'restaurant', 'hotels', 'explore'
  ]);

  correctWord(word: string): string {
    const lowerWord = word.toLowerCase();
    return this.correctionMap[lowerWord] || word;
  }

  correctMessage(message: string): string {
    return message.split(' ')
      .map(word => this.correctWord(word))
      .join(' ');
  }

  isTravelTerm(word: string): boolean {
    return this.travelTerms.has(word.toLowerCase());
  }
}