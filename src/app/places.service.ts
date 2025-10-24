import { Injectable } from '@angular/core';
import places from './places.json';

export type Place = {
  city: string;
  country: string;
  isCapitol: boolean;
  population: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  places: Place[] = places.cities;

  constructor() { }

  getPlaceByName(name: string): Place | undefined {
    return this.places.find(element => element.city === name)
  }

  getCountries(): string[] {
    return [...new Set(this.places.map(place => place.country))].sort();
  }
}
