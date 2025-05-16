import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FlightList } from '../../../../models/flight/flightList';
import { SubmittedDataServiceService } from 'src/app/submitted-data-service.service';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {
  @Input() flight: FlightList;

  @Output() bookNowClicked: EventEmitter<void> = new EventEmitter<void>();
  @Input() flightOneWayOrRound: 'oneWay' | 'roundTrip';
  constructor(private submittedDataService: SubmittedDataServiceService) {}
  flightForm: {
    departureCity: string,
    arrivalCity: string,
    tripType: string
  } = {
    departureCity: '',
    arrivalCity: '',
    tripType: ''
  };

  ngOnInit(): void {
    this.submittedDataService.formData$.subscribe(formData => {
      if (formData) {
        this.flightForm.departureCity = formData.value.departureCity;
        this.flightForm.arrivalCity = formData.value.arrivalCity;
        this.flightForm.tripType = formData.value.tripType;

      }
    });
    // You can remove the subscription and data fetching logic from here
    console.log(this.flightForm.tripType);
    console.log(this.flight)
  }

  extractAirportCode(airportString: string): string {
    const regex = /\((.*?)\)/; // Regular expression to match content inside parentheses
    const matches = regex.exec(airportString);

    if (matches && matches.length > 1) {
      return matches[1];
    } else {
      return ''; // Or any default value you prefer
    }
  }

  onBookNow(flight: any) {
    this.bookNowClicked.emit();
  }
}
