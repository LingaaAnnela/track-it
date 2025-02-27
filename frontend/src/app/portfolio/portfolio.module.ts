import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { PrimeNgModule } from '../primeng.module';
import { PortfolioComponent } from './portfolio.component';
import { CoreModule } from '../core/core.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    PortfolioRoutingModule,
    MaterialModule,
    PrimeNgModule,
  ],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
