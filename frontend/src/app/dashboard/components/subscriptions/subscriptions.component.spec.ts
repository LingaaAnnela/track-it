import { TestBed } from '@angular/core/testing';
import { SubscriptionsTileComponent } from './subscriptions.component';

describe('SubscriptionsTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionsTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SubscriptionsTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
