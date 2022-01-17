import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    ShopCategoriesModule,
    HttpClientModule,
    AppRoutingModule,
    ProductsModule,
    HeaderModule,
    AuthModule,
    ShoppingListModule,
    CoreModule,
    ErrorPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
