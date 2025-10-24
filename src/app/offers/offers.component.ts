import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Offer, OffersService } from '../offers.service';
import { OfferComponent } from '../offer/offer.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, OfferComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
  offers: Offer[] = [];

  constructor(
    offersService: OffersService
  ) {
    this.offers = offersService.list();
  }
}
