import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoutes } from './dashboard/dashboard.routes';
import { AuhtGuard } from './service/auht.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: []},
  { path: 'register', component: RegisterComponent},
  {
    path: '',
    component: DashboardComponent,
    children: dashboardRoutes,
    canActivate: [ AuhtGuard ]
  },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
