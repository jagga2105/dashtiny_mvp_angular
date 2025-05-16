import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ChatMessage } from '../models/chat-message.interface';

@Injectable({
  providedIn: 'root'
})
export class GenerativeAiService {
  private generativeAI: GoogleGenerativeAI;
  private messageHistory: BehaviorSubject<ChatMessage | null> = new BehaviorSubject<ChatMessage | null>(null);

  constructor() {
    console.log('Initializing GenerativeAI service');
    this.generativeAI = new GoogleGenerativeAI(environment.apiKey);
  }

  private cleanJsonString(jsonString: string): string {
    try {
      const jsonEndIndex = jsonString.lastIndexOf('}');
      if (jsonEndIndex > -1) {
        jsonString = jsonString.substring(0, jsonEndIndex + 1);
      }

      jsonString = jsonString.replace(/```json\n|\n```/g, '');
      jsonString = jsonString.replace(/\/\*[\s\S]*?\*\//g, '');
      jsonString = jsonString.replace(/\/\/.*/g, '');
      jsonString = jsonString.replace(/\n\n.*$/s, '');
      jsonString = jsonString.replace(/,(\s*[}\]])/g, '$1');

      const firstBrace = jsonString.indexOf('{');
      const lastBrace = jsonString.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1) {
        jsonString = jsonString.slice(firstBrace, lastBrace + 1);
      }

      return jsonString;
    } catch (error) {
      console.error('Error cleaning JSON string:', error);
      return jsonString;
    }
  }

  private extractJsonFromMarkdown(text: string): any {
    try {
      const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/);
      if (jsonMatch && jsonMatch[1]) {
        const cleanedJson = this.cleanJsonString(jsonMatch[1]);
        try {
          const parsed = JSON.parse(cleanedJson);
          console.log('Successfully parsed JSON:', parsed);
          return parsed;
        } catch (parseError) {
          console.error('Error parsing cleaned JSON:', parseError);
          console.log('Cleaned JSON string:', cleanedJson);
        }
      }
      return null;
    } catch (error) {
      console.error('Error in extractJsonFromMarkdown:', error);
      return null;
    }
  }

  private processResponse(response: any) {
    try {
      if (response.message.includes('```json')) {
        const parsedJson = this.extractJsonFromMarkdown(response.message);
        if (parsedJson && parsedJson.type === 'itinerary') {
          console.log('Valid itinerary data found:', parsedJson);
          return {
            ...response,
            parsedData: parsedJson,
            type: 'itinerary'
          };
        }
      }
      return response;
    } catch (error) {
      console.error('Error processing response:', error);
      return {
        ...response,
        error: 'Failed to process itinerary data'
      };
    }
  }

  private processItineraryResponse(text: string): any {
    try {
      const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/);
      if (!jsonMatch) return null;

      const cleanedJson = this.cleanJsonString(jsonMatch[1]);
      const parsedData = JSON.parse(cleanedJson);
      
      // Transform the activities array in each day
      if (parsedData.data?.dailyItinerary) {
        parsedData.data.dailyItinerary = parsedData.data.dailyItinerary.map((day: any) => ({
          day: day.day,
          date: day.date,
          activities: day.activities.map((activity: any) => {
            if (typeof activity === 'string') {
              return {
                time: this.extractTimeFromActivity(activity),
                activity: activity,
                location: this.extractLocation(activity),
                place_type: this.inferPlaceType(activity),
                estimatedCost: day.estimatedDailyCost?.activities || 0
              };
            }
            return activity;
          })
        }));
      }

      return parsedData;
    } catch (error) {
      console.error('Error processing itinerary response:', error);
      return null;
    }
  }

  private extractTimeFromActivity(activity: string): string {
    const timePatterns = [
      /Early morning/i,
      /Morning/i,
      /Afternoon/i,
      /Evening/i,
      /Night/i,
      /(\d{1,2}:\d{2})/
    ];

    for (const pattern of timePatterns) {
      const match = activity.match(pattern);
      if (match) {
        if (match[1]) return match[1];
        switch (match[0].toLowerCase()) {
          case 'early morning': return '06:00';
          case 'morning': return '09:00';
          case 'afternoon': return '14:00';
          case 'evening': return '18:00';
          case 'night': return '20:00';
          default: return match[0];
        }
      }
    }
    return '';
  }

  private extractNumericAmount(value: string): number {
    if (typeof value === 'number') return value;
    const matches = value.match(/[\d,]+/);
    return matches ? parseInt(matches[0].replace(/,/g, '')) : 0;
  }

  private extractLocation(activity: string): string {
    const locationMatches = activity.match(/\bin\b\s+([^,.]+)|\bat\b\s+([^,.]+)|\bto\b\s+([^,.]+)/i);
    return locationMatches ? (locationMatches[1] || locationMatches[2] || locationMatches[3]).trim() : '';
  }

  private inferPlaceType(activity: string): string {
    const lowerActivity = activity.toLowerCase();
    if (lowerActivity.includes('temple') || 
        lowerActivity.includes('fort') || 
        lowerActivity.includes('museum') ||
        lowerActivity.includes('park')) return 'TA';
    if (lowerActivity.includes('restaurant') || 
        lowerActivity.includes('lunch') || 
        lowerActivity.includes('dinner')) return 'R';
    if (lowerActivity.includes('hotel') || 
        lowerActivity.includes('check-in') || 
        lowerActivity.includes('accommodation')) return 'H';
    return 'TA';
  }

  private estimateActivityCost(activity: string): number {
    const activityLower = activity.toLowerCase();
    if (activityLower.includes('hotel') || activityLower.includes('accommodation')) {
      return 2000;
    }
    if (activityLower.includes('dinner') || activityLower.includes('lunch')) {
      return 500;
    }
    if (activityLower.includes('temple') || activityLower.includes('beach')) {
      return 100;
    }
    if (activityLower.includes('taxi') || activityLower.includes('transport')) {
      return 1000;
    }
    return 200;
  }

  private getPlaceType(type: string): 'TA' | 'R' | 'H' {
    const typeToCheck = type.toLowerCase();
    
    if (typeToCheck.includes('restaurant') || 
        typeToCheck.includes('meal') || 
        typeToCheck.includes('dining') || 
        typeToCheck.includes('lunch') || 
        typeToCheck.includes('dinner') || 
        typeToCheck.includes('breakfast')) {
      return 'R';
    }
    
    if (typeToCheck.includes('hotel') || 
        typeToCheck.includes('accommodation') || 
        typeToCheck.includes('stay') || 
        typeToCheck.includes('resort') || 
        typeToCheck.includes('check-in') || 
        typeToCheck.includes('check-out')) {
      return 'H';
    }
    
    return 'TA';
  }

  private getEstimatedCost(type: string): number {
    const typeToCheck = type.toLowerCase();
    
    if (typeToCheck.includes('hotel') || 
        typeToCheck.includes('accommodation') || 
        typeToCheck.includes('stay') || 
        typeToCheck.includes('resort')) {
      return 2500;
    }
    
    if (typeToCheck.includes('restaurant') || 
        typeToCheck.includes('meal') || 
        typeToCheck.includes('dining') || 
        typeToCheck.includes('lunch') || 
        typeToCheck.includes('dinner')) {
      return 800;
    }
    
    if (typeToCheck.includes('flight') || 
        typeToCheck.includes('travel') || 
        typeToCheck.includes('train') || 
        typeToCheck.includes('transfer')) {
      return 1500;
    }
    
    if (typeToCheck.includes('activity') || 
        typeToCheck.includes('sightseeing') || 
        typeToCheck.includes('tour') || 
        typeToCheck.includes('visit')) {
      return 500;
    }
    
    return 300; // Default cost for unspecified activities
  }

  async generateText(prompt: string): Promise<void> {
    debugger; // Start debugging at text generation
    console.log('Generating text for prompt:', prompt);
    
    try {
      const model = this.generativeAI.getGenerativeModel({ 
        model: 'gemini-2.5-flash-preview-04-17',
      });

      debugger; // Check model initialization
      console.log('Model initialized, generating content...');
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      debugger; // Check raw response
      console.log('Received response:', text);

      if (text) {
        const parsedData = this.processItineraryResponse(text);
        debugger; // Check processed data
        const messageType = parsedData?.type === 'itinerary' ? 'itinerary' : 'text';

        console.log('Processed data:', {
          type: messageType,
          hasData: !!parsedData,
          structure: parsedData
        });

        const message: ChatMessage = {
          id: uuidv4(),
          from: 'bot',
          message: text,
          parsedData: parsedData,
          timestamp: new Date(),
          type: messageType
        };

        debugger; // Check final message before emitting
        this.messageHistory.next(message);
      }
    } catch (error) {
      debugger; // Check error cases
      console.error('Error generating content:', error);
      throw error;
    }
  }

  async generateTextForChunk(prompt: string): Promise<any> {
    const model = this.generativeAI.getGenerativeModel({ model: 'gemini-2.5-flash-preview-04-17' });
    
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      if (text) {
        const cleanedJson = this.cleanJsonString(text);
        return JSON.parse(cleanedJson);
      }
      return null;
    } catch (error) {
      console.error('Error generating chunk:', error);
      throw error;
    }
  }

  public getMessageHistory(): Observable<ChatMessage | null> {
    return this.messageHistory.asObservable();
  }
}