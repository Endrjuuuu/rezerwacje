import { Component } from '@angular/core';

export type Contact = {
  name: string;
  phone: string;
  address: string;
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  contact: Contact = {
    name: 'Najlepsze biuro podróży',
    phone: '+481234567',
    address: '09-500 Gostynin'
  };
}
