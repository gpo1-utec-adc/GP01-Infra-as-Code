import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ComboBoxDirective } from './_directive/combobox.directive';
import { ConciliacionComponent } from './conciliacion/conciliacion.component';
import { ConciliacionService } from './_service/conciliacion.service';
import { HttpClientModule } from '@angular/common/http';
import { ConciliacionListaComponent } from './conciliacion/conciliacion-lista/conciliacion-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComboBoxDirective,
 
    ConciliacionComponent,
    ConciliacionListaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ConciliacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
