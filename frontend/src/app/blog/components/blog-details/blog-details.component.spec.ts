import { TestBed } from '@angular/core/testing';
import { BlogDetailsComponent } from './blog-details.component';

describe('BlogDetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailsComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BlogDetailsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
