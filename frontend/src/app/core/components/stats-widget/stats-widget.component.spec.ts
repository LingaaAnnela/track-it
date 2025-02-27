import { TestBed } from '@angular/core/testing';
import { StatsWidgetComponent } from './stats-widget.component';

describe('StatsWidgetComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsWidgetComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StatsWidgetComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
