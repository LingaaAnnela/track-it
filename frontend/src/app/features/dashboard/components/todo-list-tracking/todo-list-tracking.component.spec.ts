import { TestBed } from '@angular/core/testing';
import { TodoListTrackingTileComponent } from './todo-list-tracking.component';

describe('TodoListTrackingTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListTrackingTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TodoListTrackingTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
