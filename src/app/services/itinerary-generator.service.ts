import { Injectable } from '@angular/core';
import { GenerativeAiService } from './generativeai.service';
import { Observable, from, concat } from 'rxjs';
import { map, concatMap, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItineraryGeneratorService {
  private readonly CHUNK_SIZE = 3; // Days per chunk

  constructor(private aiService: GenerativeAiService) {}

  generateChunkedItinerary(startDate: Date, endDate: Date, userPreferences: any): Observable<any> {
    const dateChunks = this.splitDateRange(startDate, endDate);
    
    // Create an array of observables for each chunk
    const chunkObservables = dateChunks.map(chunk => {
      const prompt = this.createPromptForChunk(chunk.start, chunk.end, userPreferences);
      return from(this.aiService.generateTextForChunk(prompt));
    });

    // Process chunks sequentially and merge results
    return concat(...chunkObservables).pipe(
      map(response => this.parseResponse(response)),
      reduce((acc, chunk) => this.mergeChunks(acc, chunk), {
        type: 'itinerary',
        message: `${userPreferences.destination} Travel Plan`,
        data: {
          totalTripDuration: this.calculateDuration(startDate, endDate),
          dailyItinerary: []
        }
      })
    );
  }

  private splitDateRange(startDate: Date, endDate: Date): Array<{start: Date, end: Date}> {
    const chunks: Array<{start: Date, end: Date}> = [];
    let currentDate = new Date(startDate);

    while (currentDate < endDate) {
      const chunkEnd = new Date(currentDate);
      chunkEnd.setDate(chunkEnd.getDate() + this.CHUNK_SIZE - 1);
      
      // Ensure we don't exceed the end date
      const actualEnd = chunkEnd < endDate ? chunkEnd : endDate;
      
      chunks.push({
        start: new Date(currentDate),
        end: new Date(actualEnd)
      });

      currentDate = new Date(chunkEnd);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return chunks;
  }

  private createPromptForChunk(startDate: Date, endDate: Date, preferences: any): string {
    return `Generate a detailed travel itinerary for ${preferences.destination} from ${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]} with the following preferences:
    - Travel Style: ${preferences.travelStyle}
    - Budget: ${preferences.budget}
    - Interests: ${preferences.interests.join(', ')}
    
    Please provide the response in the following JSON structure:
    {
      "type": "itinerary_chunk",
      "dailyItinerary": [
        {
          "day": number,
          "date": "YYYY-MM-DD",
          "activities": [
            {
              "time": "HH:mm",
              "place_type": "string",
              "activity": "string",
              "location": "string",
              "location_coordinates": { "lat": number, "long": number },
              "weather": { "temperature": "string", "condition": "string" },
              "image_name_suggestion": ["string"],
              "estimatedCost": number
            }
          ]
        }
      ]
    }`;
  }

  private parseResponse(response: any): any {
    try {
      if (typeof response === 'string') {
        return JSON.parse(response);
      }
      return response;
    } catch (error) {
      console.error('Error parsing response:', error);
      return null;
    }
  }

  private mergeChunks(accumulator: any, chunk: any): any {
    if (!chunk || !chunk.dailyItinerary) return accumulator;

    return {
      ...accumulator,
      data: {
        ...accumulator.data,
        dailyItinerary: [
          ...accumulator.data.dailyItinerary,
          ...chunk.dailyItinerary
        ]
      }
    };
  }

  private calculateDuration(startDate: Date, endDate: Date): string {
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return `${days} days`;
  }
}
