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
    title: 'Akmens Namas'
  },
  {
    path: 'paminklai',
    component: Monuments,
    title: 'Akmens Namas | Paminklai ir granito darbai Klaipėdoje'
  },
  {
    path: 'granito-ploksciu-dengimas',
    component: SlabCovering,
    title: 'Kapaviečių dengimas granito plokštėmis | Akmens Namas'
  },
  {
    path: 'granito-stalvirsiai',
    component: Countertops,
    title: 'Granito stalviršių gamyba Klaipėdoje | Akmens Namas'
  },
  {
    path: 'kapavieciu-restauravimas',
    component: GraveRestoration,
    title: 'Kapaviečių restauravimas Klaipėdoje | Akmens Namas'
  },
  {
    path: 'granito-interjero-detales',
    component: InteriorDetails,
    title: 'Interjero detalės Klaipėdoje'
  },
  {
    path: 'laidojimo-paslaugos',
    component: FuneralServices,
    title: 'Laidojimo paslaugos | Akmens Namas'
  },
  {
    path: 'atlikti-darbai',
    component: Portfolio,
    title: 'Atlikti darbai | Akmens Namas'
  },
  {
    path: 'kontaktai',
    component: Contact,
    title: 'Kontaktai | Akmens Namas'
  },
  {
    path: '**',
    component: NotFound,
    title: 'Puslapis nerastas'
  }
];