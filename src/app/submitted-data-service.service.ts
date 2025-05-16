import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmittedDataServiceService {
  private formDataSubject = new BehaviorSubject<any>(null);
  formData$ = this.formDataSubject.asObservable();

  constructor() {}

  updateFormData(data: any) {
    this.formDataSubject.next(data);
  }
  getFormData() {
    return this.formDataSubject.getValue();
  }
  showListing = false;
  setSubmittedData(data: any) {
    console.log('Submitted Data:', data);
    this.formDataSubject.next(data);
  }
  toggleListing() {
    this.showListing=true;

  }

  getSubmittedData() {
    return this.formDataSubject.getValue();
  }
}
