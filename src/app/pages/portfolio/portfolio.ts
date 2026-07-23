import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  private title = inject(Title);
  private meta = inject(Meta);

  selectedImage: string | null = null;

  constructor() {
    this.title.setTitle(
      'Atlikti kapaviečių darbai Klaipėdoje | Įmonės pavadinimas'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Peržiūrėkite mūsų atliktus paminklų gamybos, granito plokščių montavimo, kapaviečių restauravimo ir kitus darbus.'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }

  openImage(image: string): void {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeImage(): void {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }
}