import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-countertops',
  imports: [],
  templateUrl: './countertops.html',
  styleUrl: './countertops.css'
})
export class Countertops {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle(
      'Granito staleliai ir suoliukai kapavietėms | Įmonės pavadinimas'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Gaminame granito stalelius, suoliukus ir jų komplektus kapavietėms Klaipėdoje bei Klaipėdos rajone. Pristatymas ir montavimas.'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}