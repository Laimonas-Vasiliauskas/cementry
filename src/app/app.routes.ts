import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Monuments } from './pages/monuments/monuments';
import { GraveCare } from './pages/grave-care/grave-care';
import { Granite } from './pages/granite/granite';
import { Foundations } from './pages/foundations/foundations';
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
    title: 'Paminklai'
  },
  {
    path: 'kapu-prieziura',
    component: GraveCare,
    title: 'Kapų priežiūra'
  },
  {
    path: 'granito-plokstes',
    component: Granite,
    title: 'Granito plokštės'
  },
  {
    path: 'pamatu-liejimas',
    component: Foundations,
    title: 'Pamatų liejimas'
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