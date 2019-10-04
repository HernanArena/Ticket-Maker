import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { Routes, RouterModule } from '@angular/router';


const pagesRoutes: Routes = [
  { path: 'ticket', component: TicketComponent },
  { path: '**',pathMatch: 'full', redirectTo: 'ticket' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class PageRoutingModule { }
