import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.scss']
})
export class BookingConfirmationComponent {
  printBookingConfirmation() {
    const printContent = document.querySelector('.booking-confirmation');
    const originalBody = document.body.innerHTML;
    document.body.innerHTML = printContent?.innerHTML || '';
    window.print();
    document.body.innerHTML = originalBody;
  }
}
