import { TestBed } from '@angular/core/testing';
import { GoalTrackingTileComponent } from './goal-tracking.component';

describe('GoalTrackingTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalTrackingTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GoalTrackingTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
