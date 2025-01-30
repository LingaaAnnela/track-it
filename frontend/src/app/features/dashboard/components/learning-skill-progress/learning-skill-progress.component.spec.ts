import { TestBed } from '@angular/core/testing';
import { LearningSkillProgressTileComponent } from './learning-skill-progress.component';

describe('LearningSkillProgressTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningSkillProgressTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LearningSkillProgressTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
