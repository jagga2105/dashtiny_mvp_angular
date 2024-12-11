import { Component, EventEmitter, Output } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmittedDataServiceService } from '../../../../submitted-data-service.service';
import { PlacesList } from '../../../../models/hotels/placesList';
import { CityDataService } from '../../../../services/hotels/city-data.service';
@Component({
  selector: 'app-hotel-suggestion-form',
  templateUrl: './hotel-suggestion-form.component.html',
  styleUrls: ['./hotel-suggestion-form.component.scss']
})
export class HotelSuggestionFormComponent {
  hotelForm: FormGroup;
  currentDate: string;
  places: PlacesList[] = [];
  filteredPlaces: any[] = [];
  constructor(private cityDataService: CityDataService, private formBuilder: FormBuilder, private submittedDataServiceService: SubmittedDataServiceService){
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0];
    this.hotelForm = this.formBuilder.group({
      departureCity: ['', Validators.required],
      arrivalCity: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: [''],
      travellers: [1, Validators.required],
      stayType: ['hotels'],
      selectedCabinClass: ['Select an option', Validators.required],
    });
  }
  ngOnInit() {
    this.places = this.cityDataService.getCities();
  }
  @Output() hotelButtonClick: EventEmitter<void> = new EventEmitter<void>();
  journey = {
    departureCity: '',
    arrivalCity: '',
    departureDate: '',
    returnDate: '',
    travellers: '',
    selectedCabin:'',
    stayType: 'hotels',

  };
  noOfRooms: any = 1;
  noOfAdults: any = 1;
  noOfChildren: any = 1;
  selectedPassengers = '';
  showDropdowns = false;
  isDropdownOpen: boolean = false;
  departureCities: string[] = ['City1', 'City2', 'City3'];
  arrivalCities: string[] = ['City4', 'City5', 'City6'];
  isOneWaySelected = false;
  selectedCabinClass: string = 'Select an option';
  toggleCabinClassOptionClicked: boolean = false;
  selectedPassengerandCabin: any = '';
  selectedValue: any = 1;
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
  handleStayTypeChange(type: string) {
    this.journey.stayType = type;
  }
  filterCity(event: any) {
    const searchText = event.target.value.toLowerCase();
    this.filteredPlaces = this.places.filter((places: PlacesList) => {
      return (
        places.city.toLowerCase().includes(searchText) ||
        places.state.toLowerCase().includes(searchText)
      );
    });
  }
  onDepartureCitySelect(places: PlacesList): void {
    this.journey.departureCity = `(${places.city}) ${places.state}`;
    this.filteredPlaces = []
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
    this.hotelForm.value.arrivalCity = this.journey.arrivalCity;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  sendPassengersRoomDetail(){
    this.hotelForm.value.travellers = this.selectedValue;
    this.hotelForm.value.selectedCabinClass = this.selectedCabinClass;
    this.journey.travellers = this.noOfRooms + ' Room, ' + this.noOfAdults + ' Adults,' + this.noOfChildren + ' Childrens';
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  incrementRooms() {
    this.noOfRooms++;
  }

  incrementAdults() {
    this.noOfAdults++;
  }

  incrementChildren() {
    this.noOfChildren++;
  }




  decrementRooms() {
    if (this.noOfRooms > 0) {
      this.noOfRooms--;
    }
  }
  decrementAdults() {
    if (this.noOfAdults > 0) {
      this.noOfAdults--;
    }
  }
  decrementChildren() {
    if (this.noOfChildren > 0) {
      this.noOfChildren--;
    }
  }


  submitForm() {
    this.hotelForm.value.departureDate = this.journey.departureDate;
    this.hotelForm.value.returnDate =  this.journey.returnDate;
      this.submittedDataServiceService.setSubmittedData(this.hotelForm);
      console.log("data submitted");
      console.log(this.hotelForm.value);
      this.hotelButtonClick.emit();
  }
  resetForm() {
    this.hotelForm.reset({
      travellers: 1,
      stayType: 'hotels',
      selectedCabinClass: 'Select an option',
    });
  }


}
