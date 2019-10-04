import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { TicketComponent } from './ticket/ticket.component';
import { ItemComponentComponent } from '../components/item-component/item-component.component';
import { ComponentModule } from '../components/component.module';
import { ImagenPipe } from '../pipes/imagen.pipe';

@NgModule({
  declarations: [
    PageComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ComponentModule
  ]
})
export class PageModule { }
