import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { BienvenueComponent } from './component/bienvenue/bienvenue.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { MoniteurComponent } from './component/moniteur/moniteur.component';
import { MonprofilComponent } from './component/moniteur/monprofil/monprofil.component';
import { NoteselevesComponent } from './component/moniteur/noteseleves/noteseleves.component';
import { PlanningComponent } from './component/moniteur/planning/planning.component';
import { StatistiqueComponent } from './component/moniteur/statistique/statistique.component';




const routes: Routes = [
  {path: 'app-connexion', component:ConnexionComponent}, 
  {path:'app-bienvenue', component:BienvenueComponent}, 
  {path: 'app-inscription', component:InscriptionComponent}, 
  {path: 'app-moniteur', component:MoniteurComponent}, 
  {path: 'app-monprofil', component:MonprofilComponent},
  {path: 'app-noteseleves', component:NoteselevesComponent},
  {path: 'app-planning', component:PlanningComponent},
  {path: 'app-statistique', component:StatistiqueComponent},


  
  

  {path: '', component:BienvenueComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
