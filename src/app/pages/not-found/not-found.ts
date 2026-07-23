import { Component, inject, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound implements OnDestroy {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.title.setTitle('Puslapis nerastas | Akmens Namas');

    this.meta.updateTag({
      name: 'robots',
      content: 'noindex, nofollow'
    });
  }

  ngOnDestroy(): void {
    this.meta.removeTag("name='robots'");
  }
}