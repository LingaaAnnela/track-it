import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../features/material.module';
import { PrimeNgModule } from '../features/primeng.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MaterialModule, PrimeNgModule],
  exports: [],
})
export class CoreModule {}
