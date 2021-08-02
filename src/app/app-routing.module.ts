import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: []},
  { path: 'register', component: RegisterComponent},
  // Cargar un modulo mediante lazyload en angular asi:
  {
    path: '',
    loadChildren: () => import('./ingreso-egreso/ingreso-egreso.module').then( module => module.IngresoEgresoModule)
  },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
//Copmmit avance desde mi pc