import { TestBed } from '@angular/core/testing';
import { DailyInsightsTileComponent } from './daily-insights.component';

describe('DailyInsightsTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyInsightsTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DailyInsightsTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
