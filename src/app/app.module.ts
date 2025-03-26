import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BienvenueComponent } from './component/bienvenue/bienvenue.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { MoniteurComponent } from './component/moniteur/moniteur.component';
import { NoteselevesComponent } from './component/moniteur/noteseleves/noteseleves.component';
import { MonprofilComponent } from './component/moniteur/monprofil/monprofil.component';
import { PlanningComponent } from './component/moniteur/planning/planning.component';
import { StatistiqueComponent } from './component/moniteur/statistique/statistique.component';
import { AdminComponent } from './component/admin/admin.component';
import { NavbarreComponent } from './component/admin/navbarre/navbarre.component';
import { StudentsComponent } from './component/admin/students/students.component';
import { AutoecoleComponent } from './component/admin/autoecole/autoecole.component';
import { MoniteursComponent } from './component/admin/moniteurs/moniteurs.component';
import { NavmoniteurComponent } from './component/moniteur/navmoniteur/navmoniteur.component';
import { EleveProfilComponent } from './élève/eleve-profil/eleve-profil.component';
import { EleveAccueilComponent } from './élève/eleve-accueil/eleve-accueil.component';
import { NavbarComponent } from './élève/navbar/navbar.component';
import { CodeRouteComponent } from './élève/code-route/code-route.component';
import { NotesComponent } from './élève/notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent,
    MoniteurComponent,
    NoteselevesComponent,
    MonprofilComponent,
    PlanningComponent,
    StatistiqueComponent,
    AdminComponent,
    NavbarreComponent,
    StudentsComponent,
    AutoecoleComponent,
    MoniteursComponent,
    NavmoniteurComponent,
    EleveProfilComponent,
    EleveAccueilComponent,
    NavbarComponent,
    CodeRouteComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule, 
    HttpClientModule,
    InscriptionComponent,
 
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
