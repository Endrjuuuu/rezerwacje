import { Injectable } from '@angular/core';
import { Place, PlacesService } from './places.service';

export type Offer = {
  city: string;
  price: number
  place: Place | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offers: Offer[] = [
    {
      city: 'Chicago',
      price: 5000,
      place: undefined,
    },
    {
      city: 'Rome',
      price: 6000,

      place: undefined,
    },
    {
      city: 'London',
      price: 7000,
      place: undefined
    }
  ];

  constructor(private placesService: PlacesService) { }

  list(): Offer[] {
    return this.offers.map(
      (element) => {
        return {
          ...element,
          place: this.placesService.getPlaceByName(element.city)
        }
      }
    );
  }

  findOfferWithLowestPrice(): Offer {
    const offer: Offer = this.offers.reduce((previous, current) =>
      previous.price < current.price ? previous : current);

    offer.place = this.placesService.getPlaceByName(offer.city)
    return offer;
  }
}
