import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
  offers = [
    {
      city: 'Chicago',
      country: 'USA',
      isCapitol: false,
      population: 2697,
    },
    {
      city: 'Rome',
      country: 'Italy',
      isCapitol: true,
      population: 2873
    },
  ];
}
