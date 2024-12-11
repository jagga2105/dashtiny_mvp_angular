import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerativeaiService {
  private generativeAi: GoogleGenerativeAI;
  private messageHistory: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() {
    this.generativeAi = new GoogleGenerativeAI('AIzaSyDtytCCmlfXfniTqodHdzIxW48euaUa9as');
  }
  async generateText(prompt: string) {
    const model = this.generativeAi.getGenerativeModel({model: 'gemini-1.5-flash'});
    this.messageHistory.next({
      from: 'user',
      message:prompt
    });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    this.messageHistory.next({
      from: 'bot',
      message: text
    })
    return text;
  }
  public getMessageHistory(): Observable<any> {
    return this.messageHistory.asObservable();
  }
}
