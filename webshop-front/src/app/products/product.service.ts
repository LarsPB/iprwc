import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Product } from "./product.model";

const BACKEND_URL = environment.apiUrl + '/products';

@Injectable({providedIn: "root"})
export class ProductService {
    productSelected = new Subject<Product>();
    productsChanged = new Subject<Product[]>();
    startedEditing = new Subject<number>();
    private products: Product[] = [];

    constructor(private http: HttpClient){}


    getProducts() {
        this.http
            .get<{message: string, products: any[]}>(
                BACKEND_URL
            )
            .pipe(map((postData) => {
                console.log(postData.products);
                return postData.products.map(product => {
                    return {
                        id: product._id,
                        name: product.name,
                        imagePath: product.imagePath,
                        price: product.price,
                        description: product.description
                    };
                });
            }))
            .subscribe((transformedProducts) => {
                this.products = transformedProducts;
                this.productsChanged.next(this.products.slice());
            });

    }

    // gets product by id from url
    getProduct(index: number) {
        return this.products[index];
    }

    addProduct(product: Product){
        const prod: Product = { 
            id: '', 
            name: product.name, 
            imagePath: product.imagePath, 
            price: product.price, 
            description: product.description 
        };
        this.http.post<{message: string, productId: string}>(BACKEND_URL, prod)
            .subscribe(responseData => {
                const id = responseData.productId; 
                prod.id = id; //objects zijn referenced types, dus je kan de attributen editten van const prod
                this.products.push(prod);
                this.productsChanged.next(this.products.slice());
            });


    }

    updateProduct(productId: string, newProduct: Product) {
        const prod: Product = {
            id: productId,
            name: newProduct.name,
            imagePath: newProduct.imagePath,
            price: newProduct.price,
            description: newProduct.description
        };
        this.http.put(BACKEND_URL + '/' + productId, prod)
            .subscribe(response => {
                const updatedProducts = [...this.products];
                const oldProductIndex = updatedProducts.findIndex(p => p.id === prod.id);
                updatedProducts[oldProductIndex] = prod;
                this.products = updatedProducts;
                this.productsChanged.next(this.products.slice());
            })
    }

    deleteProduct(index: number){
        const prod:Product = this.products[index];
        this.http.delete(BACKEND_URL + '/' + prod.id)
            .subscribe(() => {
                console.log('Deleted!');
                this.products.splice(index, 1);
                this.productsChanged.next(this.products.slice());
            });
    }
}