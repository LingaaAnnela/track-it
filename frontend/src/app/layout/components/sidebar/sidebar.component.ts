import { Component, ElementRef } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'trackit-sidebar',
  standalone: true,
  imports: [MenuComponent],
  template: ` <div class="layout-sidebar">
    <trackit-menu></trackit-menu>
  </div>`,
})
export class SidebarComponent {
  constructor(public el: ElementRef) {}
}
