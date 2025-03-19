import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BienvenueComponent } from './component/bienvenue/bienvenue.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { MoniteurComponent } from './component/moniteur/moniteur.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent,
    ConnexionComponent,
    InscriptionComponent,
    MoniteurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
