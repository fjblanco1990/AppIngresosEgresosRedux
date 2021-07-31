import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit, OnDestroy {
  userConecte?: string = '';
  userSubs!: Subscription;
  constructor(private authService: AuthService, private router: Router, private store:Store<GlobalState>) { }

  ngOnInit(): void {
    this.userSubs = this.store.select('user')
    .pipe(
      filter( user => user != null )
    )
    .subscribe( ({ user }) => this.userConecte = user?.nombre);
  }

  ngOnDestroy() {
    this.userSubs.unsubscribe();
  }

  logout() {
    this.authService.Logout().then( () => {
      this.router.navigate(['/login']);
    });
  }

}
