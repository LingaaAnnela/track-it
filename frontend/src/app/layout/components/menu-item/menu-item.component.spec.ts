import { TestBed } from '@angular/core/testing';
import { MenuItemComponent } from './menu-item.component';

describe('MenuItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MenuItemComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
