import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Product } from "../products/product.model";
import { CartProduct } from "./cartProduct.model";

@Injectable({providedIn: "root"})
export class ShoppingListService {
    productsChanged = new Subject<CartProduct[]>();
    private products: Product[] = [];
    private cartProducts: CartProduct[] = [];
    private totalPrice: number;
    constructor(private http: HttpClient, private authService:AuthService){}

    setLocalProductPrice(index: number, quantity:number){
        this.cartProducts[index].quantity = quantity;
        this.productsChanged.next(this.cartProducts.slice());
        this.setLocalTotalPrice();
    }

    setLocalTotalPrice() {
        let amount = 0;
        this.cartProducts.forEach(element => {
            amount += element.price * element.quantity;
        });
        this.totalPrice = +amount.toFixed(2);
        this.productsChanged.next(this.cartProducts.slice());
    }

    getLocalTotalPrice(){
        return this.totalPrice;
    }



    getProducts() {
        if(this.authService.getIsAuthenticated()) {
            this.http.get<{message: string, products: any[]}>('http://localhost:3000/api/user/cart')
            .pipe(map((postData) => {
                return postData.products.map(product => {
                    return {
                        id: product.productId._id,
                        name: product.productId.name,
                        imagePath: product.productId.imagePath,
                        price: product.productId.price,
                        quantity: product.quantity
                    };
                });
            }))
            .subscribe((prods) => {
                this.cartProducts = prods;
                this.setLocalTotalPrice();
                this.productsChanged.next(this.cartProducts.slice());
            })
            return this.cartProducts.slice();
        } else {
            this.products.length = 0;
            this.cartProducts.length = 0;
            return this.cartProducts.slice();
        }
    }

    addProduct(newProduct: Product){
        const prod: Product = {
            id: newProduct.id,
            name: newProduct.name,
            imagePath: newProduct.imagePath,
            price: newProduct.price,
            description: newProduct.description
        };
        this.http.post<{prod:Product}>('http://localhost:3000/api/user/cart', prod)
            .subscribe(responseData => {
                this.products.push(prod);
                this.productsChanged.next(this.cartProducts.slice());
            })
    }

    deleteProduct(index: number){
        const prod: CartProduct = this.cartProducts[index];
        console.log('wat is dit dan? ', prod.id);
        this.http.delete('http://localhost:3000/api/user/cart/' + prod.id)
            .subscribe(() => {
                console.log('Deleted!');
                this.cartProducts.splice(index, 1);
                this.setLocalTotalPrice();
                this.productsChanged.next(this.cartProducts.slice());
            });
    }

}