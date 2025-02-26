import { TestBed } from '@angular/core/testing';
import { GoalsTileComponent } from './goals.component';

describe('GoalsTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GoalsTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
