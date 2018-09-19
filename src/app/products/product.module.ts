import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductDetailComponent} from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import {ProductListComponent} from './product-list.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard]
      },


    ])
  ],
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe
  ]
})
export class ProductModule {}
