import { TestBed } from '@angular/core/testing';
import { PaymentsDueDatesTileComponent } from './payments-due-dates.component';

describe('PaymentsDueDatesTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsDueDatesTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PaymentsDueDatesTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
