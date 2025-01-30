import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { PrimeNgModule } from './features/primeng.module';
import { MenuItem } from 'primeng/api';
import { MaterialModule } from './features/material.module';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    MaterialModule,
    PrimeNgModule,
    DashboardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  tiles: Tile[] = [
    { text: '💰 Financial Tracking', cols: 1, rows: 1, color: 'lightblue' },
    { text: '🎯 Goal Tracking', cols: 1, rows: 1, color: 'lightyellow' },
    {
      text: '📚 Learning & Skill Progress',
      cols: 2,
      rows: 2,
      color: 'lightpink',
    },
    {
      text: '✅ To-Do Lists & Planning',
      cols: 2,
      rows: 1,
      color: 'lightgreen',
    },
    {
      text: '📅 Subscription & Payment Reminders',
      cols: 1,
      rows: 1,
      color: 'orange',
    },
    { text: 'Family', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'Memories', cols: 1, rows: 1, color: 'red' },
  ];

  isExpanded = true;
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Financial Tracking',
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
        label: 'Goal Tracking',
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
        label: 'Learning & Skill Progress',
        icon: 'pi pi-chart-line',
        routerLink: [''],
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
        label: 'To-Do Lists & Planning',
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
        label: 'Subscription & Payment Reminders',
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
