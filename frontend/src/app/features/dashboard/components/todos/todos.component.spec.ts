import { TestBed } from '@angular/core/testing';
import { TodosTileComponent } from './todos.component';

describe('TodosTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TodosTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
