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
import { AdminComponent } from './component/admin/admin.component';
import { NavbarreComponent } from './component/admin/navbarre/navbarre.component';
import { NavmoniteurComponent } from './component/moniteur/navmoniteur/navmoniteur.component';
import { EleveProfilComponent } from './élève/eleve-profil/eleve-profil.component';
import { EleveAccueilComponent } from './élève/eleve-accueil/eleve-accueil.component';
import { CodeRouteComponent } from './élève/code-route/code-route.component';
import { NotesComponent } from './élève/notes/notes.component';



const routes: Routes = [
  {path: 'app-connexion', component:ConnexionComponent}, 
  {path:'app-bienvenue', component:BienvenueComponent}, 
  {path: 'app-inscription', component:InscriptionComponent}, 
  {path: 'app-moniteur', component:MoniteurComponent}, 
  {path: 'app-monprofil', component:MonprofilComponent},
  {path: 'app-noteseleves', component:NoteselevesComponent},
  {path: 'app-planning', component:PlanningComponent},
  {path: 'app-statistique', component:StatistiqueComponent},
  {path: 'app-admin', component:AdminComponent},
  {path: 'app-navbarre', component:NavbarreComponent},
  {path: 'app-navmoniteur', component:NavmoniteurComponent},
  {path: 'app-eleve-accueil', component:EleveAccueilComponent},
  {path: 'app-eleve-profil', component:EleveProfilComponent},
  {path: 'app-code-route', component:CodeRouteComponent},
  {path: 'app-notes', component:NotesComponent},
  {path: '', component:BienvenueComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
