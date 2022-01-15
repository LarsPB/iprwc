import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
    // { path: '', component:MainpageShopComponent},
    // { path: 'login', component: LoginComponent},
    // { path: 'reset', component: ResetPasswordComponent},
    // { path: 'signup', component: SignupComponent},
    // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    // { path: 'category', component: ShopCategoriesComponent},
    // { path: 'shopping-cart', component: ShoppingListComponent},

    // { path: 'products', component: ProductsComponent },

    // { path: "admin", component: AdminComponent, canActivate: [AuthGuard, HasRoleGuard], data: { roles: "ADMIN" }, children: [
    //     {path: "products", component:AdminProductListComponent },
    //     {path: "add-product", component:AdminProductEditComponent },
    //     {path: "edit-product/:id", component:AdminProductEditComponent}
    // ]},

    // { path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {

}