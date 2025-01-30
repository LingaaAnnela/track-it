import {
  Component,
  PLATFORM_ID,
  ChangeDetectorRef,
  inject,
  effect,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'trackit-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false,
})
export class DashboardComponent {
  tiles: Tile[] = [
    { text: '💰 Financial Tracking', cols: 1, rows: 1, color: 'lightblue' },
    {
      text: '💵 Payments & Due Dates',
      cols: 1,
      rows: 1,
      color: 'lightyellow',
    },
    {
      text: '📈 Investments & Portfolio',
      cols: 2,
      rows: 2,
      color: 'lightpink',
    },
    {
      text: '📚 Learning & Skill Progress',
      cols: 2,
      rows: 1,
      color: 'lightgreen',
    },
    {
      text: '💳 Subscription Tracker',
      cols: 1,
      rows: 1,
      color: 'orange',
    },
    { text: '✅ To-Do Lists & Planning', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: '🎯 Goal Tracking', cols: 1, rows: 1, color: 'red' },
    {
      text: '📊 Daily Insights & Productivity',
      cols: 2,
      rows: 1,
      color: 'red',
    },
    { text: '🏋️‍♂️ Health & Fitness', cols: 1, rows: 1, color: 'red' },
  ];

  ngOnInit() {
    this.initChart();
  }

  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  // configService = inject(AppConfigService);

  // designerService = inject(DesignerService);

  constructor(private cd: ChangeDetectorRef) {}

  themeEffect = effect(() => {
    // if (this.configService.transitionComplete()) {
    //   if (this.designerService.preset()) {
    //   }
    // }
    this.initChart();
  });

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');

      this.data = {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              // documentStyle.getPropertyValue('--p-cyan-500'),
              '#10b981',
              documentStyle.getPropertyValue('--p-orange-500'),
              documentStyle.getPropertyValue('--p-gray-500'),
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--p-cyan-400'),
              documentStyle.getPropertyValue('--p-orange-400'),
              documentStyle.getPropertyValue('--p-gray-400'),
            ],
          },
        ],
      };

      this.options = {
        cutout: '60%',
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
      };
      this.cd.markForCheck();
    }
  }
}
