import { Injectable } from '@angular/core';
import { Place, PlacesService } from './places.service';
import offers from './offers.json';

export type Offer = {
  city: string;
  price: number
  place: Place | undefined;
  pictures: string[];
}

export type CriteriaDefinition = {
  country?: string;
  maxPrice: number;
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
        price: element.cost,
        pictures: element.pictures
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

  searchByCriteria(criteriaDefinition: CriteriaDefinition): Offer[] {
    let filteredOffers = this.list();

    if (criteriaDefinition.country) {
      filteredOffers = filteredOffers.filter(offer => offer.place?.country === criteriaDefinition.country);
    }

    if (criteriaDefinition.maxPrice < Number.POSITIVE_INFINITY) {
      filteredOffers = filteredOffers.filter(offer => offer.price <= criteriaDefinition.maxPrice)
    }

    return filteredOffers;
  }
}
