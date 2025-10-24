import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaDefinition, Offer, OffersService } from '../offers.service';
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
  selectedCountry: string | undefined = '';

  selectedPrice: number = 200000;
  priceThresholds = [
    5000,
    6000,
    7000,
    8000,
    9000
  ];

  DEFAULT = 'DEFAULT';

  criteriaDefinition: CriteriaDefinition = {
    country: undefined,
    maxPrice: Number.POSITIVE_INFINITY
  };

  constructor(
    private offersService: OffersService,
    private placesService: PlacesService
  ) {
    this.offers = this.offersService.list();
    this.countries = this.placesService.getCountries();
  }

  onSelectedCountry(): void {
    this.selectedCountry = this.searchCountry.nativeElement.value === this.DEFAULT ? undefined : this.searchCountry.nativeElement.value;
    this.criteriaDefinition.country = this.selectedCountry;
    this.offers = this.offersService.searchByCriteria(this.criteriaDefinition);
  }

  onSelectedPrice(): void {
    this.selectedPrice = this.searchPrice.nativeElement.value === this.DEFAULT ? Number.POSITIVE_INFINITY : this.searchPrice.nativeElement.value;
    this.criteriaDefinition.maxPrice = this.selectedPrice;
    this.offers = this.offersService.searchByCriteria(this.criteriaDefinition);
  }
}
