import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SimpsonsComponent } from './components/simpsons/simpsons.component';
import { RickAndMortyComponent } from './components/rick-and-morty/table-character/rick-and-morty.component';


import { RickAndMortyServiceService } from './services/rick-and-morty/rick-and-morty-service.service';  //Importo el modulo para poder usar el servicio
import { HttpClientModule } from '@angular/common/http';
import { CardDetailRmComponent } from './components/rick-and-morty/card-detail-rm/card-detail-rm.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { MiPipePipe } from './pipes/mi-pipe.pipe';
import { PotenciaPipe } from './pipes/potencia.pipe';
import { NrosPrimosPipe } from './pipes/nros-primos.pipe'; //Importo el modulo para poder usar http

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    SidebarComponent,
    TodoListComponent,
    SimpsonsComponent,
    RickAndMortyComponent,
    CardDetailRmComponent,
    PipesComponent,
    MiPipePipe,
    PotenciaPipe,
    NrosPrimosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RickAndMortyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
