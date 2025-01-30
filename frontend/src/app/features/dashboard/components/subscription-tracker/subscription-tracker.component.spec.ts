import { TestBed } from '@angular/core/testing';
import { SubscriptionTrackerTileComponent } from './subscription-tracker.component';

describe('SubscriptionTrackerTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionTrackerTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SubscriptionTrackerTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
