import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle('Puslapis nerastas | Įmonės pavadinimas');

    this.meta.updateTag({
      name: 'robots',
      content: 'noindex, nofollow'
    });

    this.meta.updateTag({
      name: 'description',
      content: 'Ieškomas puslapis nerastas.'
    });
  }
}