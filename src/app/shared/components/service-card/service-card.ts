import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  @Input() title = '';
  @Input() description = '';
  @Input() link = '';
  @Input() image = '';
}