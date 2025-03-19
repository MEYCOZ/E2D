import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { BienvenueComponent } from './component/bienvenue/bienvenue.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { MoniteurComponent } from './component/moniteur/moniteur.component';

const routes: Routes = [
  {path: 'app-connexion', component:ConnexionComponent}, 
  {path:'app-bienvenue', component:BienvenueComponent}, 
  {path: 'app-inscription', component:InscriptionComponent}, 
  {path: 'app-moniteur', component:MoniteurComponent}, 
  {path: '', component:BienvenueComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
