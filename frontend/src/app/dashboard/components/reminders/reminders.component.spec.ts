import { TestBed } from '@angular/core/testing';
import { RemindersTileComponent } from './reminders.component';

describe('RemindersTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemindersTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RemindersTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
