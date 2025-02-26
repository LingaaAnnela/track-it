import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { PrimeNgModule } from '../primeng.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, MaterialModule, PrimeNgModule],
  exports: [LoginComponent],
})
export class CoreModule {}
