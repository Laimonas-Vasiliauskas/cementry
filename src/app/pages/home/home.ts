import { Component } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { ServiceCard } from '../../shared/components/service-card/service-card';

@Component({
  selector: 'app-home',
  imports: [Hero, ServiceCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
