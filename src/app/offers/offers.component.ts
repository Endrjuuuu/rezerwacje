import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Offer, OffersService } from '../offers.service';
import { OfferComponent } from '../offer/offer.component';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, OfferComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
  @ViewChild('searchCountry') searchCountry!: ElementRef;
  @ViewChild('searchPrice') searchPrice!: ElementRef;
  offers: Offer[] = [];
  countries: string[] = [];
  selectedCountry: string = '';

  selectedPrice: number = 200000;
  priceThresholds = [
    5000,
    6000,
    7000,
    8000,
    9000
  ];

  constructor(
    private offersService: OffersService,
    private placesService: PlacesService
  ) {
    this.offers = this.offersService.list();
    this.countries = this.placesService.getCountries();
  }

  onSelectedCountry(): void {
    this.selectedCountry = this.searchCountry.nativeElement.value;
    this.offers = this.offersService.searchByCountry(this.selectedCountry);
  }

  onSelectedPrice(): void {
    this.selectedPrice = this.searchPrice.nativeElement.value;
    this.offers = this.offersService.searchByMaxPrice(this.selectedPrice);
  }
}
