import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SimpsonsComponent } from './components/simpsons/simpsons.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RickAndMortyComponent } from './components/rick-and-morty/table-character/rick-and-morty.component';
import { CardDetailRmComponent } from './components/rick-and-morty/card-detail-rm/card-detail-rm.component';


//URL = https://localhost:4200/
const routes: Routes = [
  { path: 'footer', component: FooterComponent }, //https://localhost:4200/footer ---> muestro FooterComponent
  { path: 'main', component: MainComponent }, //https://localhost:4200/main ---> muestra MainComponent
  { path: 'simpsons',component: SimpsonsComponent }, //https://localhost:4200/simpsons ---> muestra SimpsonsComponent
  { path: 'todo-list', component: TodoListComponent }, //https://localhost:4200/todo-list ---> muestra TodoListComponent
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'rick-and-morty', component: RickAndMortyComponent},
  { path: 'card-detail-rm/:id', component: CardDetailRmComponent},
  // { path:'', pathMatch: 'full', redirectTo: ' ErrorComponent'},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
