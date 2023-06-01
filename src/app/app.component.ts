import { Component } from '@angular/core';

@Component({
  selector: 'fb-root',
  template: `
    <fb-nvbar></fb-nvbar>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ngrx-invoice';
}
