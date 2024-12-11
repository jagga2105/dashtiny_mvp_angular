import { Component } from '@angular/core';
import {SubmittedDataServiceService} from '../../../../submitted-data-service.service'
@Component({
  selector: 'app-flights-home',
  templateUrl: './flights-home.component.html',
  styleUrls: ['./flights-home.component.scss']
})
export class flightsHomeComponent {
  cardData = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/8218/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
      title: "London",
      ModalData: [
        {
          placeName:"London Eye",
          placeImg: "../../assets/places/london-eye.jpg",
          placeDescription:"The London Eye, one of the world's tallest overhung observation wheels, offers breathtaking 360-degree views of the city. This gorgeous and unique observational wheel, also known as the Coca-Cola London Eye has 32 high-tech glass capsules or pods inside which you can stand and whirl like a large Ferris wheel."
        },
        {
          placeName: "Buckingham Palace",
          placeImg: "../../assets/places/buckingham-palace.jpg",
          placeDescription:"Buckingham Palace was built in 1703 for the Duke of Buckingham and has been the official residence of the British royals since 1837. Today, however, it is considered one of the most prestigious tourist destinations in the United Kingdom. A tour of Buckingham Palace delivers nothing but grandeur and exhilaration, from leisurely observation to the Changing of the Guards."
        }
      ]
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/13544962/pexels-photo-13544962.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Destination 2",
      ModalData: [
        {
          placeName:"Dikku Eye",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"The London Eye, one of the world's tallest overhung observation wheels, offers breathtaking 360-degree views of the city. This gorgeous and unique observational wheel, also known as the Coca-Cola London Eye has 32 high-tech glass capsules or pods inside which you can stand and whirl like a large Ferris wheel."
        },
        {
          placeName: "Buckingham Palace",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"Buckingham Palace was built in 1703 for the Duke of Buckingham and has been the official residence of the British royals since 1837. Today, however, it is considered one of the most prestigious tourist destinations in the United Kingdom. A tour of Buckingham Palace delivers nothing but grandeur and exhilaration, from leisurely observation to the Changing of the Guards."
        }
      ]
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/13978493/pexels-photo-13978493.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Destination 3",
      ModalData: [
        {
          placeName:"London Eye",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"The London Eye, one of the world's tallest overhung observation wheels, offers breathtaking 360-degree views of the city. This gorgeous and unique observational wheel, also known as the Coca-Cola London Eye has 32 high-tech glass capsules or pods inside which you can stand and whirl like a large Ferris wheel."
        },
        {
          placeName: "Buckingham Palace",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"Buckingham Palace was built in 1703 for the Duke of Buckingham and has been the official residence of the British royals since 1837. Today, however, it is considered one of the most prestigious tourist destinations in the United Kingdom. A tour of Buckingham Palace delivers nothing but grandeur and exhilaration, from leisurely observation to the Changing of the Guards."
        }
      ]
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/13319068/pexels-photo-13319068.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Destination 4",
      ModalData: [
        {
          placeName:"London Eye",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"The London Eye, one of the world's tallest overhung observation wheels, offers breathtaking 360-degree views of the city. This gorgeous and unique observational wheel, also known as the Coca-Cola London Eye has 32 high-tech glass capsules or pods inside which you can stand and whirl like a large Ferris wheel."
        },
        {
          placeName: "Buckingham Palace",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"Buckingham Palace was built in 1703 for the Duke of Buckingham and has been the official residence of the British royals since 1837. Today, however, it is considered one of the most prestigious tourist destinations in the United Kingdom. A tour of Buckingham Palace delivers nothing but grandeur and exhilaration, from leisurely observation to the Changing of the Guards."
        }
      ]
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/12635016/pexels-photo-12635016.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Destination 5",
      ModalData: [
        {
          placeName:"London Eye",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"The London Eye, one of the world's tallest overhung observation wheels, offers breathtaking 360-degree views of the city. This gorgeous and unique observational wheel, also known as the Coca-Cola London Eye has 32 high-tech glass capsules or pods inside which you can stand and whirl like a large Ferris wheel."
        },
        {
          placeName: "Buckingham Palace",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"Buckingham Palace was built in 1703 for the Duke of Buckingham and has been the official residence of the British royals since 1837. Today, however, it is considered one of the most prestigious tourist destinations in the United Kingdom. A tour of Buckingham Palace delivers nothing but grandeur and exhilaration, from leisurely observation to the Changing of the Guards."
        }
      ]
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/3728022/pexels-photo-3728022.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Destination 6",
      ModalData: [
        {
          placeName:"London Eye",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"The London Eye, one of the world's tallest overhung observation wheels, offers breathtaking 360-degree views of the city. This gorgeous and unique observational wheel, also known as the Coca-Cola London Eye has 32 high-tech glass capsules or pods inside which you can stand and whirl like a large Ferris wheel."
        },
        {
          placeName: "Buckingham Palace",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"Buckingham Palace was built in 1703 for the Duke of Buckingham and has been the official residence of the British royals since 1837. Today, however, it is considered one of the most prestigious tourist destinations in the United Kingdom. A tour of Buckingham Palace delivers nothing but grandeur and exhilaration, from leisurely observation to the Changing of the Guards."
        }
      ]
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/7245371/pexels-photo-7245371.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Destination 7",
      ModalData: [
        {
          placeName:"London Eye",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"The London Eye, one of the world's tallest overhung observation wheels, offers breathtaking 360-degree views of the city. This gorgeous and unique observational wheel, also known as the Coca-Cola London Eye has 32 high-tech glass capsules or pods inside which you can stand and whirl like a large Ferris wheel."
        },
        {
          placeName: "Buckingham Palace",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"Buckingham Palace was built in 1703 for the Duke of Buckingham and has been the official residence of the British royals since 1837. Today, however, it is considered one of the most prestigious tourist destinations in the United Kingdom. A tour of Buckingham Palace delivers nothing but grandeur and exhilaration, from leisurely observation to the Changing of the Guards."
        }
      ]
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/2453292/pexels-photo-2453292.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Destination 8",
      ModalData: [
        {
          placeName:"London Eye",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"The London Eye, one of the world's tallest overhung observation wheels, offers breathtaking 360-degree views of the city. This gorgeous and unique observational wheel, also known as the Coca-Cola London Eye has 32 high-tech glass capsules or pods inside which you can stand and whirl like a large Ferris wheel."
        },
        {
          placeName: "Buckingham Palace",
          placeImg: "https://media1.thrillophilia.com/filestore/xdrijqpxx2haqmb6w9ip99azhn8l_1579172790_shutterstock_457812985.jpg?w=1440&dpr=2",
          placeDescription:"Buckingham Palace was built in 1703 for the Duke of Buckingham and has been the official residence of the British royals since 1837. Today, however, it is considered one of the most prestigious tourist destinations in the United Kingdom. A tour of Buckingham Palace delivers nothing but grandeur and exhilaration, from leisurely observation to the Changing of the Guards."
        }
      ]
    }
  ];
  constructor(public SubmittedDataServiceService: SubmittedDataServiceService) {}
  showListing() {
    this.SubmittedDataServiceService.toggleListing();
  }
  selectedCard: any;
  modalOpen = false;
  openModal(card: any): void {
    this.selectedCard = card; // Set the selected card
    const modal = document.querySelector('.modal');
    this.modalOpen = true;
    modal?.classList.add('show');
    modal?.setAttribute('style', 'display: block');
    document.body.classList.add('modal-open');

    // Now you can use the card's ModalData to display in the modal
    if (this.selectedCard.ModalData) {
      // Use this.selectedCard.ModalData to display data in the modal
      console.log(this.selectedCard.ModalData);
    }
  }


  closeDialog(): void {
    const modal = document.querySelector('.modal');
    modal?.classList.remove('show');
    modal?.removeAttribute('style');
    this.modalOpen = true;
    document.body.classList.remove('modal-open');
  }
  bookFlight(): void {
    // Implement booking flight functionality here
    console.log('Book Flight');
  }

  bookHotel(): void {
    // Implement booking hotel functionality here
    console.log('Book Hotel');
  }

  bookCab(): void {
    // Implement booking cab functionality here
    console.log('Book Cab');
  }

  findEvents(): void {
    // Implement finding nearby events functionality here
    console.log('Find Nearby Events');
  }

}
