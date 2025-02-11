import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { CoreModule } from './core/core.module';

import { DashboardModule } from './features/dashboard/dashboard.module';
import { PrimeNgModule } from './features/primeng.module';
import { MaterialModule } from './features/material.module';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, CoreModule, MaterialModule, PrimeNgModule, DashboardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isExpanded = true;
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Financial',
        icon: 'pi pi-dollar',
        routerLink: ['/financial-tracking'],
        items: [
          {
            label: 'Savings & Investments',
            icon: 'pi pi-file',
          },
          {
            label: 'Spending Analysis',
            icon: 'pi pi-users',
          },
          {
            label: 'Payments & Subscriptions',
            icon: 'pi pi-users',
          },
        ],
      },
      {
        label: 'Goals',
        icon: 'pi pi-bullseye',
        routerLink: [''],
        items: [
          {
            label: 'Long-term & Short-term Goals',
            icon: 'pi pi-file',
          },
          {
            label: 'Progress Bar & Forecasting',
            icon: 'pi pi-users',
          },
          {
            label: 'Habit Formation',
            icon: 'pi pi-users',
          },
        ],
      },
      {
        label: 'Learning',
        icon: 'pi pi-chart-line',
        routerLink: ['learning'],
        items: [
          {
            label: 'Courses & Certifications',
            icon: 'pi pi-file',
          },
          {
            label: 'Reading List',
            icon: 'pi pi-users',
          },
          {
            label: 'Skill Mastery Tracker',
            icon: 'pi pi-users',
          },
        ],
      },
      {
        label: 'To-Do Lists',
        icon: 'pi pi-list-check',
        routerLink: [''],
        items: [
          {
            label: 'Task Scheduling',
            icon: 'pi pi-file',
          },
          {
            label: 'Kanban Board',
            icon: 'pi pi-users',
          },
          {
            label: 'AI-Powered Suggestions',
            icon: 'pi pi-users',
          },
        ],
      },
      {
        label: 'Reminders',
        icon: 'pi pi-receipt',
        routerLink: [''],
        items: [
          {
            label: 'Billing Cycles',
            icon: 'pi pi-file',
          },
          {
            label: 'Categorized Subscriptions',
            icon: 'pi pi-users',
          },
          {
            label: 'Cost Optimization',
            icon: 'pi pi-users',
          },
        ],
      },
    ];
  }
}
