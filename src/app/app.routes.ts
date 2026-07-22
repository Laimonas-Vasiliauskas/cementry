import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Monuments } from './pages/monuments/monuments';
import { SlabCovering } from './pages/slab-covering/slab-covering';
import { Countertops } from './pages/countertops/countertops';
import { GraveRestoration } from './pages/grave-restoration/grave-restoration';
import { InteriorDetails } from './pages/interior-details/interior-details';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';
import { FuneralServices } from './pages/funeral-services/funeral-services';
export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'paminklaiklaipedoje.lt'
  },
  {
    path: 'paminklai',
    component: Monuments,
    title: 'Paminklų gamyba Klaipėdoje'
  },
  {
    path: 'granito-ploksciu-dengimas',
    component: SlabCovering,
    title: 'Plokščių dengimas Klaipėdoje'
  },
  {
    path: 'granito-stalvirsiai',
    component: Countertops,
    title: 'Stalviršių gamyba Klaipėdoje'
  },
  {
    path: 'kapavieciu-restauravimas',
    component: GraveRestoration,
    title: 'Kapaviečių restauravimas Klaipėdoje'
  },
  {
    path: 'granito-interjero-detales',
    component: InteriorDetails,
    title: 'Interjero detalės Klaipėdoje'
  },
  {
    path: 'laidojimo-paslaugos',
    component: FuneralServices,
    title: 'Laidojimo paslaugos Klaipėdoje'
  },
  {
    path: 'atlikti-darbai',
    component: Portfolio,
    title: 'Atlikti darbai Klaipėdoje'
  },
  {
    path: 'kontaktai',
    component: Contact,
    title: 'Kontaktai'
  },
  {
    path: '**',
    component: NotFound,
    title: 'Puslapis nerastas'
  }
];