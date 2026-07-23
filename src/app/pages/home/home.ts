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
      'Akmens Namas | Paminklai ir granito darbai Klaipėdoje'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Akmens Namas – paminklų gamyba, granito darbai, kapaviečių restauravimas ir laidojimo paslaugos Klaipėdoje bei Klaipėdos rajone.'
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
  }
}
