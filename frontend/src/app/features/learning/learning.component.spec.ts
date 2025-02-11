import { TestBed } from '@angular/core/testing';
import { LearningComponent } from './learning.component';

describe('LearningComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LearningComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
