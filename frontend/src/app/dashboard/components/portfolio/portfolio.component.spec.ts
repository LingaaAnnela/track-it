import { TestBed } from '@angular/core/testing';
import { PortfolioTileComponent } from './portfolio.component';

describe('PortfolioTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PortfolioTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
