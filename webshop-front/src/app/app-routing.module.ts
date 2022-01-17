import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
    { path: '', redirectTo: '/', pathMatch:'full'},
    { path: 'admin', loadChildren: () => import('./admin/admin-products.module').then(m => m.AdminProductsModule) }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {

}