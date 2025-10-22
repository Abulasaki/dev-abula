import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogGuard implements CanActivate {
  public isLoggedIn: boolean
  constructor(private route: Router) {
    this.isLoggedIn = localStorage.getItem('firstname') ? true : false
    console.log(this.isLoggedIn)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.isLoggedIn) {
      return true
    }
    else {
      this.route.navigate(['/home'])
      return false

    }

  }

}
