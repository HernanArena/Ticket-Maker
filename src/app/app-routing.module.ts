import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './pages/page.component';

const appRoutes:Routes =[
  { path: 'login', component: LoginComponent },
  {
    path: '', component: PageComponent,
    loadChildren: () => import('./pages/page.module').then( m => m.PageModule),
    // canActivate:[ AuthGuard ]
  },
  { path: '**',pathMatch: 'full', redirectTo: 'login' }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
