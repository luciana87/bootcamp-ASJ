import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'form',
    component: FormComponent
  },
  {
    path:'detail/:idVid',
    component: DetailComponent
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
