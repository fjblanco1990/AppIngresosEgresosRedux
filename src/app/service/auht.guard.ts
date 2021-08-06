import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuhtGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) {
  }

  //proteje las rutas para que no se pueda acceder
  // canActivate(
  //   //pagina a la que quiere ir
  //   // route: ActivatedRouteSnapshot,
  //   // state: RouterStateSnapshot
  //   ): Observable<boolean> { // retorna un obserbalble que resuelve un boolean
  //     return this.authService.isAuth();
  // }

  canActivate(): Observable<boolean> {
    return this.authService.isAuth().pipe(
      tap( estado => {
        if (!estado) {
          this.router.navigate(['/login']);
        }
      })
    );
  }

  canLoad(): Observable<boolean> {
    return this.authService.isAuth()
    .pipe(
      tap( estado => {
        if (!estado) {
          this.router.navigate(['/login']);
        }
      }),
      take(1)
    );
  }
}
