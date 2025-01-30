import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { DashboardComponent } from './dashboard.component';
import { PrimeNgModule } from '../primeng.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FinancialTrackingTileComponent } from './components/financial-tracking/financial-tracking.component';
import { GoalTrackingTileComponent } from './components/goal-tracking/goal-tracking.component';
import { LearningSkillProgressTileComponent } from './components/learning-skill-progress/learning-skill-progress.component';
import { TodoListTrackingTileComponent } from './components/todo-list-tracking/todo-list-tracking.component';
import { SubscriptionTrackerTileComponent } from './components/subscription-tracker/subscription-tracker.component';
import { InvestmentPortfolioTileComponent } from './components/investment-portfolio/investment-portfolio.component';
import { PaymentsDueDatesTileComponent } from './components/payments-due-dates/payments-due-dates.component';
import { HealthFitnessTileComponent } from './components/health-fitness/health-fitness.component';
import { DailyInsightsProductivityTileComponent } from './components/daily-insights-productivity/daily-insights-productivity.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DailyInsightsProductivityTileComponent,
    FinancialTrackingTileComponent,
    InvestmentPortfolioTileComponent,
    LearningSkillProgressTileComponent,
    HealthFitnessTileComponent,
    GoalTrackingTileComponent,
    PaymentsDueDatesTileComponent,
    SubscriptionTrackerTileComponent,
    TodoListTrackingTileComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule,
    DashboardRoutingModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
