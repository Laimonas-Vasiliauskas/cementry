import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Monuments } from './pages/monuments/monuments';
import { SlabCovering } from './pages/slab-covering/slab-covering';
import { Countertops } from './pages/countertops/countertops';
import { GraveRestoration } from './pages/grave-restoration/grave-restoration';
import { InteriorDetails } from './pages/interior-details/interior-details';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Pagrindinis'
  },
  {
    path: 'paslaugos',
    component: Services,
    title: 'Paslaugos'
  },
  {
    path: 'paminklai',
    component: Monuments,
    title: 'Paminklų gamyba'
  },
  {
    path: 'ploksciu-dengimas',
    component: SlabCovering,
    title: 'Plokščių dengimas'
  },
  {
    path: 'stalvirsiai',
    component: Countertops,
    title: 'Stalviršių gamyba'
  },
  {
    path: 'kapavieciu-restauravimas',
    component: GraveRestoration,
    title: 'Kapaviečių restauravimas'
  },
  {
    path: 'interjero-detales',
    component: InteriorDetails,
    title: 'Interjero detalės'
  },
  {
    path: 'atlikti-darbai',
    component: Portfolio,
    title: 'Atlikti darbai'
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