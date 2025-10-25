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
  @ViewChild('numberOfAdults') viewChildNumberOfAdults!: ElementRef;
  @ViewChild('numberOfChildren') viewChildNumberOfChildren!: ElementRef;

  offers: Offer[] = [];
  countries: string[] = [];

  selectedCountry: string | undefined = '';
  selectedPrice: number = 200000;

  numberOfAdults = 1;
  numberOfChildren = 0;

  priceThresholds = [
    5000,
    6000,
    7000,
    8000,
    9000
  ];
  adults = [
    1,
    2,
    3,
    4,
    5
  ];
  children = [
    0,
    1,
    2,
    3,
    4,
    5
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

  onSelectedAdults(): void {
    this.numberOfAdults = this.viewChildNumberOfAdults.nativeElement.value;
  }

  onSelectedChildren(): void {
    this.numberOfChildren = this.viewChildNumberOfChildren.nativeElement.value;
  }
}
