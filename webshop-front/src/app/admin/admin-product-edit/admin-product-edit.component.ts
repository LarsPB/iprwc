import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/products/product.model';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})

export class AdminProductEditComponent implements OnInit {
  id: number;  
  editMode = false;
  productForm: FormGroup;
  private subscription: Subscription;
  updatedProduct: Product;

  constructor(private productService: ProductService, 
              private route: ActivatedRoute,
              private router: Router
              ) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      )


  }

  onSubmit() {
    if (this.editMode) {
      this.updatedProduct = this.productService.getProduct(this.id);
      this.productService.updateProduct(this.updatedProduct.id, this.productForm.value);
    } else {
      this.productService.addProduct(this.productForm.value);
    }
    this.productForm.reset(this.productForm.value);
    this.router.navigate(['/admin/products']);
  }

  private initForm() {
    let productId = '';
    let productName = '';
    let productImagePath = '';
    let productPrice = null;
    let productDescription = '';

    if(this.editMode) {
      const product = this.productService.getProduct(this.id);
      productId = product.id;
      productName = product.name;
      productImagePath = product.imagePath;
      productPrice = product.price;
      productDescription = product.description;
    }
    this.productForm = new FormGroup({
      'name': new FormControl(productName, Validators.required),
      'imagePath': new FormControl(productImagePath, Validators.required),
      'price': new FormControl(productPrice, [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{0,2})?$')]),
      'description': new FormControl(productDescription, Validators.required),
    });
  }
  
  

}
