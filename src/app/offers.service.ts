import { Injectable } from '@angular/core';
import { Place, PlacesService } from './places.service';
import offers from './offers.json';

export type Offer = {
  city: string;
  price: number
  place: Place | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offers: Offer[] = offers.details.map((element) => {
    {
      return {
        city: element.enName,
        place: undefined,
        price: element.cost
      }
    }
  });

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

  searchByCountry(country: string): Offer[] {
    return this.list().filter(offer => offer.place?.country === country);
  };

  findOfferWithLowestPrice(): Offer {
    const offer: Offer = this.offers.reduce((previous, current) =>
      previous.price < current.price ? previous : current);

    offer.place = this.placesService.getPlaceByName(offer.city)
    return offer;
  }

  searchByMaxPrice(price: number): Offer[] {
    return this.list().filter(offer => offer.price <= price);
  }
}
