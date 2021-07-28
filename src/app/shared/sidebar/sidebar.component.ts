import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private store:Store<GlobalState>) { }

  ngOnInit(): void {

  }

  logout() {
    this.authService.Logout().then( () => {
      this.router.navigate(['/login']);
    });
  }

}
