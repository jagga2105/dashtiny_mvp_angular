import { Component } from '@angular/core';
import { SubmittedDataServiceService } from '../../../../submitted-data-service.service';
@Component({
  selector: 'app-bus-listing',
  templateUrl: './bus-listing.component.html',
  styleUrls: ['./bus-listing.component.scss']
})
export class BusListingComponent {
  getData: any;
  selectedRange: number = 50;
  accordionData: any[] = [
    {
      label: 'Stops',
      items: ['Non-stop', '1 Stop', '2 Stops', '3+ Stops']
    },
    {
      label: 'Departure Time',
      items: ['Morning', 'Afternoon', 'Evening', 'Night', 'Late Night']
    },
    {
      label: 'One-Way Price',
      items: [1000],
      showSection: true
    },
    {
      label: 'Airline',
      items: ['Airline 1', 'Airline 2', 'Airline 3', 'Airline 4', 'Airline 5', 'Airline 6', 'Airline 7', 'Airline 8', 'Airline 9', 'Airline 10']
    }
  ];

  onRangeChange(range: number): void {
    this.selectedRange = range;
  }
  constructor(public submittedDataServiceService: SubmittedDataServiceService) { }
  ngOnInit() {
    this.getData = this.submittedDataServiceService.getSubmittedData();
  }
}
