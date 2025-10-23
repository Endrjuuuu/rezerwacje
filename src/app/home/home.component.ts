import { Component } from '@angular/core';
import { BookingsService } from '../bookings.service';
import { Offer, OffersService } from '../offers.service';
import { CommonModule } from '@angular/common';
import { OfferComponent } from '../offer/offer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, OfferComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  offer?: Offer;

  constructor(
    private offersService: OffersService,
    private bookingsService: BookingsService,
  ) {
    this.offer = offersService.findOfferWithLowestPrice();
  }
}
