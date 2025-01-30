import { TestBed } from '@angular/core/testing';
import { InvestmentPortfolioTileComponent } from './investment-portfolio.component';

describe('InvestmentPortfolioTileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentPortfolioTileComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InvestmentPortfolioTileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
