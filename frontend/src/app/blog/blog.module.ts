import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { PrimeNgModule } from '../primeng.module';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [BlogComponent, BlogListComponent, BlogDetailsComponent, CreateBlogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    BlogRoutingModule,
    MaterialModule,
    PrimeNgModule,
  ],
  exports: [BlogComponent],
})
export class BlogModule {}
