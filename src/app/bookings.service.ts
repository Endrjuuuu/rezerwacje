import { Injectable } from '@angular/core';
import { Offer, OffersService } from './offers.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Booking = {
  id?: string;
  name: string;
  adults: number;
  children: number;
  offer: Offer;
}

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  url = "http://localhost:3000/booking";

  constructor(
    private http: HttpClient,
    private offersService: OffersService) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.url);
  }

  addBooking(data: Booking): Observable<any> {
    return this.http.post<Booking>(this.url, data);
  }
}
