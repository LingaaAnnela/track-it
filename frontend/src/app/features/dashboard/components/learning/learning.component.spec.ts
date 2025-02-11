import { TestBed } from '@angular/core/testing';
import { LearningTileComponent } from './learning.component';

describe('LearningTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LearningTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
