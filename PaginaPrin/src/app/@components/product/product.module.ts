import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { NgxPaginationModule, PaginationControlsDirective } from 'ngx-pagination';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ], 
  exports: [ProductComponent, NgxPaginationModule]
})
export class ProductModule { }
