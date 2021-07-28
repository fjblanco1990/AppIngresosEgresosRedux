import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/app.reducer';
import { Usuario } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  infoUser!: Usuario | null;
  constructor(private store:Store<GlobalState>) { }

  ngOnInit(): void {
    this.store.select('user')
    .subscribe( ({ user }) => this.infoUser = user);
  }

  //comentario desde golden
}
