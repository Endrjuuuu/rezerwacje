import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from "./logo/logo.component";
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers/offers.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LogoComponent,
    OffersComponent,
    BookingsComponent,
    NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
