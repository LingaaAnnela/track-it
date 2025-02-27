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
          { label: 'Portfolio', icon: 'pi pi-fw pi-user', routerLink: ['/portfolio'] },
          { label: 'Learning', icon: 'pi pi-fw pi-chart-line', routerLink: ['/learning'] },
          {
            label: 'Blog',
            icon: 'pi pi-fw pi-comment',
            items: [
              {
                label: 'List',
                icon: 'pi pi-fw pi-image',
                routerLink: ['/blog'],
              },
              {
                label: 'Details',
                icon: 'pi pi-fw pi-list',
                routerLink: ['/blog/details'],
              },
              {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/blog/create'],
              },
            ],
          },
          {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
            items: [
              {
                label: 'Privacy',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/auth/login'],
              },
              {
                label: 'Notifications',
                icon: 'pi pi-fw pi-bell',
                routerLink: ['/auth/error'],
              },
              {
                label: 'Logout',
                icon: 'pi pi-fw pi-sign-out',
                routerLink: ['/auth/access'],
              },
            ],
          },

          // { label: 'Bookmarks', icon: 'pi pi-fw pi-bookmark', routerLink: ['/bookmarks'] },
          // { label: 'Favourites', icon: 'pi pi-fw pi-star', routerLink: ['/favourites'] },
        ],
      },
    ];
  }
}
