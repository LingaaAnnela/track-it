// import { Component, ViewChild } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { MenuItem } from 'primeng/api';
// import { Drawer } from 'primeng/drawer';

// import { CoreModule } from './core/core.module';

// import { DashboardModule } from './features/dashboard/dashboard.module';
// import { PrimeNgModule } from './features/primeng.module';
// import { MaterialModule } from './features/material.module';

// @Component({
//   selector: 'app-root',
//   imports: [CommonModule, RouterOutlet, CoreModule, MaterialModule, PrimeNgModule, DashboardModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent {
//   @ViewChild('drawerRef') drawerRef!: Drawer;

//   closeCallback(e: any): void {
//     this.drawerRef.close(e);
//   }

//   visible: boolean = false;
//   isExpanded = true;
//   sideIcon = 'pi pi-angle-double-left';
//   items!: MenuItem[];

//   ngOnInit() {
//     this.items = [
//       {
//         label: 'Dashboard',
//         icon: 'pi pi-home',
//         routerLink: ['/'],
//         items: [],
//       },
//       {
//         label: 'Learning',
//         icon: 'pi pi-chart-line',
//         routerLink: ['learning'],
//         items: [
//           {
//             label: 'Courses',
//             icon: 'pi pi-file',
//           },
//           {
//             label: 'Reading List',
//             icon: 'pi pi-users',
//           },
//           {
//             label: 'Certifications',
//             icon: 'pi pi-users',
//           },
//         ],
//       },
//       {
//         label: 'Financial',
//         icon: 'pi pi-dollar',
//         routerLink: ['/financial'],
//         items: [
//           {
//             label: 'Savings',
//             icon: 'pi pi-file',
//           },
//           {
//             label: 'Spendings',
//             icon: 'pi pi-users',
//           },
//           {
//             label: 'Investments',
//             icon: 'pi pi-users',
//           },
//         ],
//       },
//       {
//         label: 'Goals',
//         icon: 'pi pi-bullseye',
//         routerLink: [''],
//         items: [
//           {
//             label: 'Long-term',
//             icon: 'pi pi-file',
//           },
//           {
//             label: 'Short-term Goals',
//             icon: 'pi pi-file',
//           },
//           // {
//           //   label: 'Progress Bar & Forecasting',
//           //   icon: 'pi pi-users',
//           // },
//           {
//             label: 'Habit Formation',
//             icon: 'pi pi-users',
//           },
//         ],
//       },
//       {
//         label: 'To-Do Lists',
//         icon: 'pi pi-list-check',
//         routerLink: [''],
//         items: [
//           {
//             label: 'Task Scheduling',
//             icon: 'pi pi-file',
//           },
//           {
//             label: 'Kanban Board',
//             icon: 'pi pi-users',
//           },
//           {
//             label: 'AI-Powered Suggestions',
//             icon: 'pi pi-users',
//           },
//         ],
//       },
//       {
//         label: 'Reminders',
//         icon: 'pi pi-receipt',
//         routerLink: [''],
//         items: [
//           {
//             label: 'Billing Cycles',
//             icon: 'pi pi-file',
//           },
//           {
//             label: 'Categorized Subscriptions',
//             icon: 'pi pi-users',
//           },
//           {
//             label: 'Cost Optimization',
//             icon: 'pi pi-users',
//           },
//         ],
//       },
//     ];
//   }

//   toggleSideMenu() {
//     this.isExpanded = !this.isExpanded;
//     this.sideIcon = this.isExpanded ? 'pi pi-angle-double-left' : 'pi pi-angle-double-right';
//   }
// }

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PrimeNgModule } from './primeng.module';
import { MaterialModule } from './material.module';

@Component({
  selector: 'trackit-root',
  standalone: true,
  imports: [RouterModule, MaterialModule, PrimeNgModule, CoreModule, DashboardModule],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
