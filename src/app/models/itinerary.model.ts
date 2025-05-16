export interface ItineraryData {
  type: string;
  message: string;
  tripImage?: string; // Add optional tripImage property
  data: {
    totalTripDuration: string;
    estimatedBudget: {
      total: number;
      breakdown: Array<{
        category: string;
        amount: number;
      }>;
    };
    totalDistance: string;
    departure: {
      location: string;
      date: string;
      time: string;
      weather?: {
        temperature: string;
        condition: string;
      };
    };
    arrival: {
      location: string;
      date: string;
      time: string;
      weather?: {
        temperature: string;
        condition: string;
      };
    };
    dailyItinerary: Array<{
      day: number;
      date: string;
      activities: Array<{
        time: string;
        activity: string;
        location: string;
        place_type: string;
        estimatedCost: number;
        weather?: {
          temperature: string;
          condition: string;
        };
      }>;
    }>;
  };
}