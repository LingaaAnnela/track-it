import { TestBed } from '@angular/core/testing';
import { FinancialTrackerComponent } from './financial.component';

describe('FinancialTrackerComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialTrackerComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FinancialTrackerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
