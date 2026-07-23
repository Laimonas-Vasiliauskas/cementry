import { Component, inject } from '@angular/core';
import { ContactForm } from '../../shared/components/contact-form/contact-form';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [ContactForm],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle(
      'Kontaktai | Paminklų gamyba Klaipėdoje'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Susisiekite dėl paminklų gamybos, kapaviečių tvarkymo, restauravimo, granito darbų ir laidojimo paslaugų Klaipėdoje.'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}
