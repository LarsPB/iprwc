import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminProductsModule } from './admin/admin-products.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core.module';
import { ErrorPageModule } from './error-page/error-page.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { ProductsModule } from './products/products.module';
import { ShopCategoriesModule } from './shop-categories/shop-categories.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ProductsModule,
    AdminProductsModule,
    HeaderModule,
    AuthModule,
    ShoppingListModule,
    ShopCategoriesModule,
    CoreModule,
    ErrorPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
