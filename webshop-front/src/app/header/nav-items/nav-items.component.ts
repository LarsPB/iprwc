import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-nav-items',
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.css']
})
export class NavItemsComponent implements OnInit, OnDestroy {
  userIsAuthenticated:boolean = false;
  private authListenerSubs: Subscription;
  private isAdminSubs: Subscription;

  isAdmin:boolean = false;

  constructor(private recipeService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.isAdmin = this.authService.getIsAdmin();
    this.authListenerSubs = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });

    this.isAdminSubs = this.authService.getisAdminListener()
      .subscribe(isAuthAdmin => {
        this.isAdmin = isAuthAdmin;
      });
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.isAdminSubs.unsubscribe();
  }

  onNewProduct(){
    this.router.navigate(['admin/add-product'], {relativeTo: this.route});
  }

  onAdminProducts(){
    this.router.navigate(['admin/products'], {relativeTo: this.route});
  }

  onLogout() {
    this.authService.logout();
  }

}


// routerLink="/admin/products"