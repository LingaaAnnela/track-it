import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'trackit-learning-skill-progress',
  templateUrl: './learning-skill-progress.component.html',
  styleUrl: './learning-skill-progress.component.scss',
  standalone: false,
})
export class LearningSkillProgressComponent {
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
}
