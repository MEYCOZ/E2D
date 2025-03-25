import { Component } from '@angular/core';
import { ConnexionService, Eleve } from '../../service/connexion.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule],
})

export class ConnexionComponent {
  eleve: Eleve = { login: '', mot_de_passe: '' };
  errorMessage: string = '';
  showPassword: boolean = false;

  // Assure-toi que ConnexionService est correctement injecté dans le constructeur
  constructor(private connexionService: ConnexionService) {}

  // Appelé lors de la soumission du formulaire
  onSubmit() {
    console.log("Formulaire soumis !");
    this.onLogin();
  }

  // Méthode de connexion
  onLogin() {
    console.log("Login:", this.eleve.login);  // Vérifie la valeur de login
    console.log("Mot de passe:", this.eleve.mot_de_passe);  // Vérifie la valeur de mot_de_passe

    // Appel du service de connexion
    this.connexionService.login(this.eleve).subscribe(
      (response: { message: string }) => {
        console.log("Réponse reçue:", response);
        if (response.message === "Connexion réussie") {
          alert('Connexion réussie !');
        } else {
          this.errorMessage = response.message;
        }
      },
      (error: any) => {
        console.error("Erreur de requête:", error);
        this.errorMessage = 'Erreur de connexion';
      }
    );
  }
}
