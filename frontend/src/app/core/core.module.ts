import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { PrimeNgModule } from '../primeng.module';
import { LoginComponent } from './components/login/login.component';
import { StatsWidgetComponent } from './components/stats-widget/stats-widget.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent, StatsWidgetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    PrimeNgModule,
  ],
  exports: [LoginComponent, StatsWidgetComponent],
})
export class CoreModule {}
