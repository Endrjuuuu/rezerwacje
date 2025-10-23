import { Injectable } from '@angular/core';
import { OffersService } from './offers.service';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private offersService: OffersService) { }
}
