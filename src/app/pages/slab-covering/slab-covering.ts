import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-slab-covering',
  imports: [],
  templateUrl: './slab-covering.html',
  styleUrl: './slab-covering.css'
})
export class SlabCovering {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle(
      'Kapaviečių dengimas granito plokštėmis Klaipėdoje | Įmonės pavadinimas'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Dengiame kapavietes granito plokštėmis Klaipėdoje ir Klaipėdos rajone. Atliekame matavimo, gamybos, pagrindo paruošimo ir montavimo darbus.'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}