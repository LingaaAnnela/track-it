import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [ButtonModule],
  selector: 'trackit-footer',
  template: `<div class="layout-footer">
    Made with <p-button icon="pi pi-heart" [rounded]="true" [text]="true" severity="danger" /> by
    Linga Annela
  </div>`,
})
export class FooterComponent {}
