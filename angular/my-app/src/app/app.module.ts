import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/contenido/mi-componente.component';
import { ListaComponent } from './components/lista/lista.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { ContactoComponent } from './components/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    ListaComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    TableComponent,
    PadreComponent,
    HijoComponent,
    ContactoComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
