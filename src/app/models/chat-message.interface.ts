export interface ChatMessage {
  id: string;
  from: 'user' | 'bot';
  message: any; // Changed from string to any to support different message types
  timestamp: Date;
  type: 'text' | 'itinerary' | 'loading';
  isProcessing?: boolean;
  parsedData?: any; // Added to support structured data
}
