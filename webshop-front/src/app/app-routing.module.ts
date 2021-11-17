import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminProductEditComponent } from "./admin/admin-product-edit/admin-product-edit.component";
import { AdminProductListComponent } from "./admin/admin-product-list/admin-product-list.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./auth/auth.guard";
import { HasRoleGuard } from "./auth/has-role.guard";
import { LoginComponent } from "./auth/login/login.component";
import { ResetPasswordComponent } from "./auth/reset-password/reset-password.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ProductsComponent } from "./products/products.component";
import { MainpageShopComponent } from "./shop/mainpage-shop/mainpage-shop.component";
import { ShopComponent } from "./shop/shop.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', component:MainpageShopComponent},
    { path: 'login', component: LoginComponent},
    { path: 'reset', component: ResetPasswordComponent},
    { path: 'signup', component: SignupComponent},


    { path: 'shop', component: ShopComponent},
    { path: 'shopping-cart', component: ShoppingListComponent},

    { path: 'products', component: ProductsComponent },

    { path: "admin", component: AdminComponent, children: [
        {path: "products", component:AdminProductListComponent, children: [
            {path: "", component:AdminProductListComponent},
            {path: ":id", component:AdminProductListComponent},
            {path: ":id/edit", component:AdminProductEditComponent, canActivate: [AuthGuard, HasRoleGuard], 
                data: {
                    roles: "ADMIN"
                } 
            }
        ]},
        {path: "add-product", component:AdminProductEditComponent, canActivate: [AuthGuard, HasRoleGuard],
            data: {
                roles: "ADMIN"
            } 
        },
        {path: "edit-product/:id", component:AdminProductEditComponent, canActivate: [AuthGuard, HasRoleGuard],
            data: {
                roles: "ADMIN"
            }  
        }
    ]},

    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    { path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {

}