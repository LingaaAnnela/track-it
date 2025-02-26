import { TestBed } from '@angular/core/testing';
import { HealthFitnessTileComponent } from './health-fitness.component';

describe('HealthFitnessTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthFitnessTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HealthFitnessTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
