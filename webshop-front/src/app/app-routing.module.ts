import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch:'full'},
    { path: 'admin', loadChildren: () => import('./admin/admin-products.module').then(m => m.AdminProductsModule) },
    { path: 'shopping-cart', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {

}