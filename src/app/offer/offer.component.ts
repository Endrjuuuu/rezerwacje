import { Component, Input } from '@angular/core';
import { Offer } from '../offers.service';
import { NgIf } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [NgIf, DatePipe],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent {

  @Input() offer?: Offer;
}
