import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-grave-restoration',
  imports: [],
  templateUrl: './grave-restoration.html',
  styleUrl: './grave-restoration.css'
})
export class GraveRestoration {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle(
      'Kapaviečių restauravimas Klaipėdoje | Įmonės pavadinimas'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Restauruojame ir atnaujiname senas kapavietes Klaipėdoje bei Klaipėdos rajone. Remontuojame pamatus, keičiame granito detales ir sutvirtiname paminklus.'
    });
  }
}