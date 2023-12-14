import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SimpsonsComponent } from './components/simpsons/simpsons.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


//URL = https://localhost:4200/
const routes: Routes = [
  { path: 'footer', component: FooterComponent }, //https://localhost:4200/footer ---> muestro FooterComponent
  { path: 'main', component: MainComponent }, //https://localhost:4200/main ---> muestra MainComponent
  { path: 'simpsons',component: SimpsonsComponent }, //https://localhost:4200/simpsons ---> muestra SimpsonsComponent
  { path: 'todo-list', component: TodoListComponent }, //https://localhost:4200/todo-list ---> muestra TodoListComponent
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
