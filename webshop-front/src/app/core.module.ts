import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProductService } from './products/product.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';


@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceptor, 
            multi: true
        }, 
        ShoppingListService, 
        ProductService
    ]
})

export class CoreModule {}