import { TestBed } from '@angular/core/testing';
import { FloatingConfiguratorComponent } from './floating-configurator.component';

describe('FloatingConfiguratorComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingConfiguratorComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FloatingConfiguratorComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
