import { Component } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmittedDataServiceService } from '../../../../submitted-data-service.service';
import { RailwayStationList } from '../../../../models/train/railwayStationList';
import { RailwayStationDataService } from '../../../../services/railways/railway-station-data.service';

@Component({
  selector: 'app-train-suggestion-form',
  templateUrl: './train-suggestion-form.component.html',
  styleUrls: ['./train-suggestion-form.component.scss']
})
export class TrainSuggestionFormComponent {
  flightForm: FormGroup;
  currentDate: string;
  filteredDepartureRailwayStations: any[] = [];
  railwayStation: RailwayStationList[] = [];
  filteredArrivalRailwayStations: any[] = [];
  constructor(private railwayStationDataService: RailwayStationDataService, private formBuilder: FormBuilder, private submittedDataServiceService: SubmittedDataServiceService){
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
  journey = {
    departureCity: '',
    arrivalCity: '',
    departureDate: '',
    returnDate: '',
    travellers: '',
    selectedCabin:'',
    tripType: 'roundTrip',

  };
  selectedValue: any = 1;
  selectedPassengers = '';
  showDropdowns = false;
  isDropdownOpen: boolean = false;
  departureCities: string[] = ['City1', 'City2', 'City3'];
  arrivalCities: string[] = ['City4', 'City5', 'City6'];
  isOneWaySelected = false;
  selectedCabinClass: string = 'Select an option';
  toggleCabinClassOptionClicked: boolean = false;
  selectedPassengerandCabin: any = '';
  ngOnInit() {
    this.railwayStation = this.railwayStationDataService.getRailwayStation();
  }
  filterDepartureRailwayStations(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.filteredDepartureRailwayStations = this.railwayStation.filter((station: RailwayStationList) => {
      return (
        station.code.toLowerCase().includes(searchText) ||
        station.name.toLowerCase().includes(searchText)
      );
    });
  }
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
  handleRadioButtonChange() {
    this.isOneWaySelected = this.journey.tripType === 'oneWay';
  }
  onDepartureCitySelect(event: TypeaheadMatch): void {
    this.journey.departureCity = event.item;
    this.flightForm.value.departureCity = this.journey.departureCity;
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
    this.journey.returnDate ='';
  }
  resettravelandCabin() {
    this.journey.travellers = '';
    this.journey.selectedCabin = '';
  }
  onArrivalCitySelect(event: TypeaheadMatch): void {
    this.journey.arrivalCity = event.item;
    this.flightForm.value.arrivalCity = this.journey.arrivalCity;
  }
  selectArrivalRailwayStation(RailwayStation: RailwayStationList) {
    this.journey.arrivalCity = `(${RailwayStation.code}) ${RailwayStation.name}`;
    this.filteredArrivalRailwayStations = [];
  }
  selectDepartureRailwayStation(RailwayStation: RailwayStationList) {
    this.journey.departureCity = `(${RailwayStation.code}) ${RailwayStation.name}`;
    this.filteredDepartureRailwayStations = [];
  }
  filterRailwayStations(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.filteredArrivalRailwayStations = this.railwayStation.filter((RailwayStation: RailwayStationList) => {
      return (
        RailwayStation.code.toLowerCase().includes(searchText) ||
        RailwayStation.name.toLowerCase().includes(searchText)
      );
    });
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
    this.flightForm.value.travellers= this.selectedValue;
    this.flightForm.value.selectedCabinClass = this.selectedCabinClass;
    this.journey.travellers = this.selectedValue + ' Person, ' + this.selectedCabinClass + ' Class';
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  submitForm() {
    this.flightForm.value.departureDate = this.journey.departureDate;
    this.flightForm.value.returnDate =  this.journey.returnDate;
      this.submittedDataServiceService.setSubmittedData(this.flightForm);
      console.log("data submitted");
      console.log(this.flightForm.value);
  }
  resetForm() {
    this.flightForm.reset({
      travellers: 1,
      tripType: 'roundTrip',
      selectedCabinClass: 'Select an option',
    });
  }

}
