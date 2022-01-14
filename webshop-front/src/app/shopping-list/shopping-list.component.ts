import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartProduct } from './cartProduct.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  products: CartProduct[];
  hasProducts: boolean = false;
  totalPrice: number;
  private productListenersubs:Subscription;

  constructor(private shoppingListService: ShoppingListService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.shoppingListService.getProducts();
    this.productListenersubs = this.shoppingListService.productsChanged
      .subscribe(
        (products: CartProduct[]) => {
          this.products = products;
          this.totalPrice = this.shoppingListService.getLocalTotalPrice();
          if(this.products.length > 0) {
            this.hasProducts = true;
          } else {
            this.hasProducts = false;
          }

          console.log('dit is? ', this.hasProducts );
        }
      );
  }

  ngOnDestroy():void {
    this.productListenersubs.unsubscribe();
  }

  setTotalPrice() {
    this.totalPrice = this.shoppingListService.getLocalTotalPrice();
  }


  backToShop(){
    this.router.navigate(['/products'], {relativeTo: this.route});
  }

  checkoutCart(){
    this.router.navigate(['/checkout'], {relativeTo: this.route});
  }


}
