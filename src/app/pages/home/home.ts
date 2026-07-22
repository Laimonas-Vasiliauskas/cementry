import { Component, inject } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { ServiceCard } from '../../shared/components/service-card/service-card';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  imports: [Hero, ServiceCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle(
      'Paminklai ir kapaviečių tvarkymas Klaipėdoje | Įmonės pavadinimas'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Paminklų gamyba, kapaviečių dengimas granito plokštėmis, restauravimas ir laidojimo paslaugos Klaipėdoje bei Klaipėdos rajone.'
    });
  }
}
