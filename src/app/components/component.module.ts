import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularAutocompleteComponent } from './angular-autocomplete/angular-autocomplete.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { ImagenPipe } from '../pipes/imagen.pipe';

@NgModule({
  declarations: [
    AngularAutocompleteComponent,
    ItemComponentComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AngularAutocompleteComponent,
    ItemComponentComponent
  ]
})
export class ComponentModule { }
