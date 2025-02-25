import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'trackit-menu',
  imports: [CommonModule, MenuItemComponent, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
})
export class MenuComponent {
  model: MenuItem[] = [];

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
          { label: 'Learning', icon: 'pi pi-fw pi-chart-line', routerLink: ['/learning'] },
          { label: 'Bookmarks', icon: 'pi pi-fw pi-bookmark', routerLink: ['/bookmarks'] },
          { label: 'Favourites', icon: 'pi pi-fw pi-star', routerLink: ['/favourites'] },
        ],
      },
    ];
  }
}
