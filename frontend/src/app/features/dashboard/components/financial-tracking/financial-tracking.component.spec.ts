import { TestBed } from '@angular/core/testing';
import { FinancialTrackingTileComponent } from './financial-tracking.component';

describe('FinancialTrackingTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialTrackingTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FinancialTrackingTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
