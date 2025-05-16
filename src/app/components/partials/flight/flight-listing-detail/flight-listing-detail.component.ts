import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FlightDetailsService } from '../../../../flight-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flight-listing-detail',
  templateUrl: './flight-listing-detail.component.html',
  styleUrls: ['./flight-listing-detail.component.scss']
})
export class FlightListingDetailComponent {
  isAccordionOpen: boolean = false;
  showConfirmationButton = false;

  @ViewChild('exampleModal') modal: ElementRef<HTMLDivElement> | undefined;
  constructor(public flightDetailsService: FlightDetailsService, private router: Router, private renderer: Renderer2) {}

  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }

  openModal(): void {
    if (this.modal) {
      this.renderer.addClass(this.modal.nativeElement, 'show');
      this.renderer.setStyle(this.modal.nativeElement, 'display', 'block');

      setTimeout(() => {
        this.showConfirmationButton = true;
      }, 15000);
    } else {
      console.error('Modal element is undefined.');
    }
  }

  closeModal(): void {
    if (this.modal) {
      this.renderer.removeClass(this.modal.nativeElement, 'show');
      this.renderer.setStyle(this.modal.nativeElement, 'display', 'none');
    }
  }

  navigateToConfirmation(): void {
    // Navigate to confirmation page here
    this.router.navigate(['/confirmation']);
  }
}
