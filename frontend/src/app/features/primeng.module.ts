import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  imports: [
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    SplitButtonModule,
    SkeletonModule,
    PanelMenuModule,
    BadgeModule,
    OverlayBadgeModule,
    CardModule,
    ChartModule,
    ProgressBarModule,
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    SplitButtonModule,
    SkeletonModule,
    PanelMenuModule,
    BadgeModule,
    OverlayBadgeModule,
    CardModule,
    ChartModule,
    ProgressBarModule,
  ],
})
export class PrimeNgModule {}
