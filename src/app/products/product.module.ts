import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import {ProductDetailComponent} from './product-detail.component';
import {ProductListComponent} from './product-list.component';
import {NgModule} from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './/product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProductListComponent
  ]
})
export class ProductModule {}
