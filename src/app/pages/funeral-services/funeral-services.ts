import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-funeral-services',
  imports: [],
  templateUrl: './funeral-services.html',
  styleUrl: './funeral-services.css'
})
export class FuneralServices {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle(
      'Laidojimo paslaugos Klaipėdoje | Įmonės pavadinimas'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Laidojimo reikmenys, velionio transportavimas, kapo iškasimas, medinio kryžiaus pastatymas ir kapo sutvarkymas Klaipėdoje bei Klaipėdos rajone.'
    });
  }
}