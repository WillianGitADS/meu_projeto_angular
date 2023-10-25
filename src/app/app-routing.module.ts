import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { InputComponent } from './shared/input/input.component';
import { NewComponentComponent } from './shared/new-component/new-component.component';
import { TitleComponent } from './title/title.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';

const routes: Routes = [
  {path: '', component: Component, pathMatch: 'full'},
  {path: 'input', component: InputComponent},
  {path: 'new', component: NewComponentComponent},
  {path: 'title', component: TitleComponent},
  {path: 'diretivasEstruturais', component: DiretivasEstruturaisComponent},
  {path: 'diretivasAtributos', component: DiretivasAtributosComponent}
  //{path: '**', component: PageErrorComponent}redirectTo: 'new'

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
