import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/products/product.model';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  private subscription: Subscription;
  totalLength:any;
  page:number = 1;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts();
    this.subscription = this.productService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
          this.totalLength = products.length;
          console.log(this.totalLength);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
