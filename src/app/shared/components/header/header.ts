import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatMenuModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

   servicesOpen = false;

  toggleServices() {
    this.servicesOpen = !this.servicesOpen;
  }

  closeServices() {
    this.servicesOpen = false;
  }

}
