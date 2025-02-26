import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { DashboardComponent } from './dashboard.component';
import { PrimeNgModule } from '../primeng.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GoalsTileComponent } from './components/goals/goals.component';
import { LearningTileComponent } from './components/learning/learning.component';
import { TodosTileComponent } from './components/todos/todos.component';
import { SubscriptionsTileComponent } from './components/subscriptions/subscriptions.component';
import { PortfolioTileComponent } from './components/portfolio/portfolio.component';
import { RemindersTileComponent } from './components/reminders/reminders.component';
import { HealthFitnessTileComponent } from './components/health-fitness/health-fitness.component';
import { DailyInsightsTileComponent } from './components/daily-insights/daily-insights.component';

import { FinancialTileComponent } from './components/financial/financial.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FinancialTileComponent,
    DailyInsightsTileComponent,
    PortfolioTileComponent,
    LearningTileComponent,
    HealthFitnessTileComponent,
    GoalsTileComponent,
    RemindersTileComponent,
    SubscriptionsTileComponent,
    TodosTileComponent,
  ],
  imports: [CommonModule, MaterialModule, PrimeNgModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
