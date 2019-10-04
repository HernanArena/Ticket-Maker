import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { PageModule } from './pages/page.module';
import { AngularAutocompleteComponent } from './components/angular-autocomplete/angular-autocomplete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ItemComponentComponent } from './components/item-component/item-component.component';
import { ComponentModule } from './components/component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PageModule,
    ComponentModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
