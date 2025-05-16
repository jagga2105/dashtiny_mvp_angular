import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmittedDataServiceService } from '../../../../submitted-data-service.service';
import { AirportService } from '../../../../services/flights/airport-data.service';
import { AirportList } from '../../../../models/flight/airportList';
import { FlightListingService } from '../../../../services/flights/flight-listing.service';

@Component({
  selector: 'app-flight-suggestion-form',
  templateUrl: './flight-suggestion-form.component.html',
  styleUrls: ['./flight-suggestion-form.component.scss']
})
export class FlightSuggestionFormComponent {
  flightForm: FormGroup;
  currentDate: string;
  showFlightListing: boolean = false;
  airportData: any[] = [];
  filteredDepartureAirports: any[] = [];
  filteredArrivalAirports: any[] = [];
  showDropdown: boolean = false;
  selectedValue: any = 1;
  selectedPassengers = '';
  isDropdownOpen: boolean = false;
  departureCities: string[];
  highlightedIndex = -1;
  arrivalCities: string[] = ['City4', 'City5', 'City6'];
  isOneWaySelected = false;
  isRoundTripSelected = false;
  flightOneWayOrRound: string = '';
  selectedCabinClass: string = 'Select an option';
  toggleCabinClassOptionClicked: boolean = false;
  selectedPassengerandCabin: any = '';
  airports: AirportList[] = [];

  constructor(
    private airportService: AirportService,
    private flightListingService: FlightListingService,
    private formBuilder: FormBuilder,
    private submittedDataServiceService: SubmittedDataServiceService
  ) {
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0];
    this.flightForm = this.formBuilder.group({
      departureCity: ['', Validators.required],
      arrivalCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: [''],
      travellers: [1, Validators.required],
      tripType: ['roundTrip'],
      selectedCabinClass: ['Select an option', Validators.required],
    });
  }

  ngOnInit() {
    this.airports = this.airportService.getAirports();
  }

  journey = {
    departureCity: '',
    arrivalCity: '',
    departureDate: '',
    returnDate: '',
    travellers: '',
    selectedCabin: '',
    tripType: 'roundTrip',
  };

  @ViewChild('departureDate') departureDateInput: ElementRef;
  @ViewChild('returnDate') returnDateInput: ElementRef;

  isFormValid(): boolean {
    return (
      this.isCityValid(this.journey.departureCity) &&
      this.isCityValid(this.journey.arrivalCity) &&
      this.isDateValid(this.journey.departureDate) &&
      this.isTravellersValid(this.journey.travellers)
    );
  }

  isCityValid(city: string): boolean {
    return !!city && city.length >= 3;
  }

  isDateValid(date: string): boolean {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return !!date && datePattern.test(date);
  }

  isTravellersValid(travellers: string): boolean {
    const numberOfTravellers = parseInt(travellers, 10);
    return !isNaN(numberOfTravellers) && numberOfTravellers >= 1 && numberOfTravellers <= 10;
  }

  @Output() flightOneWayOrRoundChange = new EventEmitter<'oneWay' | 'roundTrip'>();
  @Output() flightButtonClick: EventEmitter<void> = new EventEmitter<void>();

  handleRadioButtonChange(selectedValue: 'oneWay' | 'roundTrip') {
    this.flightOneWayOrRoundChange.emit(selectedValue);
    if (selectedValue === 'oneWay') {
      this.isOneWaySelected = true;
    } else {
      this.isOneWaySelected = false;
    }
  }

  resetDepartureCity() {
    this.journey.departureCity = '';
  }

  resetArrivalCity() {
    this.journey.arrivalCity = '';
  }

  resetDepartureDate() {
    this.journey.departureDate = '';
  }

  resetReturnDate() {
    this.journey.returnDate = '';
  }

  resettravelandCabin() {
    this.journey.travellers = '';
    this.journey.selectedCabin = '';
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  increment() {
    this.selectedValue++;
  }

  decrement() {
    if (this.selectedValue > 0) {
      this.selectedValue--;
    }
  }

  selectOption(option: string) {
    this.selectedCabinClass = option;
    this.toggleCabinClassOptionClicked = false;
  }

  toggleCabinClassOption() {
    this.toggleCabinClassOptionClicked = !this.toggleCabinClassOptionClicked;
  }

  sendPassengerCabinClassDetail() {
    this.flightForm.value.travellers = this.selectedValue;
    this.flightForm.value.selectedCabinClass = this.selectedCabinClass;
    this.journey.travellers = this.selectedValue + ' Person, ' + this.selectedCabinClass + ' Class';
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  submitFlightForm() {
    this.flightForm.value.travellers = this.selectedValue;
    this.flightForm.value.departureCity = this.journey.departureCity;
    this.flightForm.value.arrivalCity = this.journey.arrivalCity;
    this.flightForm.value.departureDate = this.journey.departureDate;
    this.flightForm.value.returnDate = this.journey.returnDate;
    this.flightForm.value.tripType = this.journey.tripType;
    this.submittedDataServiceService.setSubmittedData(this.flightForm);
    console.log('data submitted');
    console.log(this.flightForm.value);
    this.showFlightListing = true;
    console.log(this.flightForm.value);
    this.submittedDataServiceService.toggleListing();
    this.flightListingService.setShowFlightListing(true);
    this.flightButtonClick.emit();
  }

  resetForm() {
    this.flightForm.reset({
      travellers: 1,
      tripType: 'roundTrip',
      selectedCabinClass: 'Select an option',
    });
  }

  selectArrivalAirport(airport: AirportList) {
    this.journey.arrivalCity = `(${airport.code}) ${airport.name}`;
    this.filteredArrivalAirports = [];
  }

  selectDepartureAirport(airport: AirportList) {
    this.journey.departureCity = `(${airport.code}) ${airport.name}`;
    this.filteredDepartureAirports = [];
  }

  filterDepartureAirports(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.filteredDepartureAirports = this.airports.filter((airport: AirportList) => {
      return (
        airport.code.toLowerCase().includes(searchText) ||
        airport.name.toLowerCase().includes(searchText) ||
        airport.city.toLowerCase().includes(searchText)
      );
    });
  }

  filterAirports(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.filteredArrivalAirports = this.airports.filter((airport: AirportList) => {
      return (
        airport.code.toLowerCase().includes(searchText) ||
        airport.name.toLowerCase().includes(searchText) ||
        airport.city.toLowerCase().includes(searchText)
      );
    });
  }

  loadAirportData() {
    this.airportData = this.airportService.getAirports();
    console.log('the data is', this.airportData);
  }

  openDatePickers() {
    if (!this.isOneWaySelected) {
      setTimeout(() => {
        this.returnDateInput.nativeElement.focus();
      }, 0);
    }
  }
}
