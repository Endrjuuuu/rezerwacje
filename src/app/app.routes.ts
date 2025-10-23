import { Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'rezerwacje', component: BookingsComponent },
    { path: 'oferty', component: OffersComponent },
    {
        path: 'kontakt', component: ContactComponent
    }
];
