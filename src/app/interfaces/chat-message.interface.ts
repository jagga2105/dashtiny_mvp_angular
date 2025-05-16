export interface ChatMessage {
  message: string;
  from: 'user' | 'bot';
  timestamp: Date;
  isProcessing?: boolean;
  itineraryData?: {
    message: string;
    tripImage?: string;
    data: {
      totalTripDuration: string;
      totalDistance: string;
      estimatedBudget: {
        total: number;
        breakdown: Array<{
          category: string;
          amount: number;
        }>;
      };
      departure: {
        location: string;
        date: string;
        time: string;
        weather?: {
          condition: string;
          temperature: string;
        };
      };
      arrival: {
        location: string;
        date: string;
        time: string;
        weather?: {
          condition: string;
          temperature: string;
        };
      };
      dailyItinerary: Array<{
        day: number;
        date: string;
        activities: Array<{
          time: string;
          activity: string;
          location: string;
          estimatedCost: number;
          weather?: {
            condition: string;
            temperature: string;
          };
        }>;
      }>;
    };
  };
}
