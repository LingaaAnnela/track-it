import { TestBed } from '@angular/core/testing';
import { DailyInsightsProductivityTileComponent } from './daily-insights-productivity.component';

describe('DailyInsightsProductivityTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyInsightsProductivityTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(
      DailyInsightsProductivityTileComponent
    );
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
