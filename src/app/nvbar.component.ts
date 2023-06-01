import { Component } from '@angular/core';

@Component({
  selector: 'fb-nvbar',
  template: `
  <div class="sticky-top bg-primary" style="color: white;!important;">

    <div class="d-flex flex-row justify-content-end pt-3 pb-3">
      <h4 class="mr-8">
        Mario Rossi
      </h4>
      <div routerLink="/login" routerLinkActive="text-dark">
        <i class="fas fa-2x fa-lock"></i>
      </div>
      <div routerLink="/profile" routerLinkActive="text-dark">
        <i class="fas fa-2x fa-user-circle"></i>
      </div>
      <div routerLink="/home" routerLinkActive="text-dark">
        <i class="fas fa-2x fa-home"></i>
      </div>
      <div routerLink="/invoice-editor" routerLinkActive="text-dark">
        <i class="fas fa-2x fa-sign-out"></i>
      </div>
      <!-- <button routerLink="/profile">profile</button>
      <button routerLink="/home">home</button>
      <button routerLink="/invoice-editor">invoices</button> -->
    </div>

  </div>
  `,

})
export class NvbarComponent {

}
