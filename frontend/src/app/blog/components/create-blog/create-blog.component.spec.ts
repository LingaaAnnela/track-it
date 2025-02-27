import { TestBed } from '@angular/core/testing';
import { CreateBlogComponent } from './create-blog.component';

describe('CreateBlogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBlogComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CreateBlogComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
