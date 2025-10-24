import { Component, Input } from '@angular/core';
import { Offer } from '../offers.service';
import { NgIf } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Booking, BookingsService } from '../bookings.service';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [NgIf, DatePipe],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent {

  constructor(private bookingsService: BookingsService) {

  }

  @Input() offer?: Offer;
  @Input() showAddBooking: boolean = true;

  addBooking(offer: Offer) {
    console.log(offer);

    const booking: Booking = {
      name: 'Rezerwacja 9999',
      adults: 2,
      children: 3,
      offer
    }

    this.bookingsService.addBooking(booking).subscribe({
      error: () => {
        console.log("dane nie zostały pobrane");
      },
      next: (data: any) => {
        console.log(data);
      }
    })
  }
}
