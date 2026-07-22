import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-interior-details',
  imports: [],
  templateUrl: './interior-details.html',
  styleUrl: './interior-details.css'
})
export class InteriorDetails {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle(
      'Granito detalės kapavietėms Klaipėdoje | Įmonės pavadinimas'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Gaminame granito vazas, žvakides, stalelius, suoliukus ir dekoratyvines detales kapavietėms Klaipėdoje bei Klaipėdos rajone.'
    });
  }
}