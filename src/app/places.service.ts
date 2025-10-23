import { Injectable } from '@angular/core';

export type Place = {
  city: string;
  country: string;
  isCapital: boolean;
  population: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  places: Place[] = [
    {
      city: 'Chicago',
      country: 'USA',
      isCapital: false,
      population: 2697,
    },
    {
      city: 'Rome',
      country: 'Italy',
      isCapital: true,
      population: 2873
    },
    {
      city: 'London',
      country: 'UK',
      isCapital: true,
      population: 3210
    }
  ];

  constructor() { }

  getPlaceByName(name: string): Place | undefined {
    return this.places.find(element => element.city === name)
  }
}
