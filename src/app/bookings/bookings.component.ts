import { Component } from '@angular/core';
import { BookingsService } from '../bookings.service';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent {

  constructor(private bookingsService: BookingsService) {

  }
}
