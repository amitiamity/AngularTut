import {IProduct} from './product';
import {ProductService} from './product.service';
import {Component, OnInit} from '@angular/core'


@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageHeight: number = 40;
  showImage: boolean = false;
  errorMessage : string;
  _listFilter: string;
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[];
  //productService is automatically getting created, assiged through dependecny injection
  constructor(private productService: ProductService) {
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
         this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any> error
    );
   
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }
}