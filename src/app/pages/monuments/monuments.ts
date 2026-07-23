import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-monuments',
  imports: [],
  templateUrl: './monuments.html',
  styleUrl: './monuments.css'
})
export class Monuments {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle(
      'Paminklų gamyba Klaipėdoje | Akmens Namas'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Gaminame ir montuojame granito paminklus Klaipėdoje bei Klaipėdos rajone. Individualios formos, granito spalvos, užrašai ir dekoras.'
    });
  }
}