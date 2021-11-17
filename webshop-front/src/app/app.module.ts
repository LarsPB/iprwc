import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminProductEditComponent } from './admin/admin-product-edit/admin-product-edit.component';
import { AdminProductItemComponent } from './admin/admin-product-list/admin-product-item/admin-product-item.component';
import { AdminProductListComponent } from './admin/admin-product-list/admin-product-list.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavItemsComponent } from './header/nav-items/nav-items.component';
import { NavSearchbarComponent } from './header/nav-items/nav-searchbar/nav-searchbar.component';
import { NavShopComponent } from './header/nav-shop/nav-shop.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductService } from './products/product.service';
import { ProductsComponent } from './products/products.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { MainpageShopComponent } from './shop/mainpage-shop/mainpage-shop.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavItemsComponent,
    ShopComponent,
    FooterComponent,
    AuthComponent,
    SignupComponent,
    ErrorPageComponent,
    NavShopComponent,
    NavSearchbarComponent,
    MainpageShopComponent,
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    AdminComponent,
    ProductDetailComponent,
    ShoppingListComponent,

    AdminProductListComponent,
    AdminProductItemComponent,
    AdminProductEditComponent,
    ResetPasswordComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    ShoppingItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, ShoppingListService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
