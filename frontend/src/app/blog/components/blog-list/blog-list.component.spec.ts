import { TestBed } from '@angular/core/testing';
import { BlogListComponent } from './blog-list.component';

describe('BlogListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BlogListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
