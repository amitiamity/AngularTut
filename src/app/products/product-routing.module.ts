import {ProductDetailComponent} from './product-detail.component';
import {ProductDetailGuard} from './product-detail.guard';
import {ProductListComponent} from './product-list.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
      },
    ]),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
