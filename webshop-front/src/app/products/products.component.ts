import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'  
})
export class ProductsComponent implements OnInit, OnDestroy {
  selectedProduct: Product;
  private isSelectedProductSub: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.isSelectedProductSub = this.productService.productSelected
    .subscribe(
      (product: Product) => {
        this.selectedProduct = product;
      }
    );
  }

  ngOnDestroy():void {
    this.isSelectedProductSub.unsubscribe();
  }


}
