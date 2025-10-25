import { Component, OnInit } from '@angular/core';
import { Booking, BookingsService } from '../bookings.service';
import { CommonModule } from '@angular/common';
import { OfferComponent } from '../offer/offer.component';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, OfferComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent implements OnInit {

  bookings: Booking[] = [];

  constructor(private bookingsService: BookingsService) {
  }

  ngOnInit(): void {
    this.refreshBookings();
  }

  refreshBookings() {
    this.bookingsService.getBookings().subscribe({
      error: () => {
        console.log("dane nie zostały pobrane");
      },
      next: (data: Booking[]) => {
        this.bookings = data.map(
          (booking: Booking) => {
            return {
              ...booking,
              totalCost: booking.offer.price * (booking.adults + booking.children * 0.5)
            }
          }
        )
      }
    });
  }

  cancelBooking(id?: string): void {
    if (!id) {
      return;
    }

    this.bookingsService.cancelBooking(id).subscribe({
      error: () => {
        console.log("błąd cancel booking");

      },
      next: (data: any) => {
        this.refreshBookings();
      }
    })
  }
}
