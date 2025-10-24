import { Component, OnInit } from '@angular/core';
import { Booking, BookingsService } from '../bookings.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent implements OnInit {

  bookings: Booking[] = [];

  constructor(private bookingsService: BookingsService) {

  }
  ngOnInit(): void {
    this.bookingsService.getBookings().subscribe({
      error: () => {
        console.log("dane nie zostały pobrane");
      },
      next: (data: Booking[]) => {
        this.bookings = data
      }
    });
  }
}
