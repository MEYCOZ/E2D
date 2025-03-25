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
  connexionService: any;
togglePasswordVisibility() {
throw new Error('Method not implemented.');
}
onSubmit() {
throw new Error('Method not implemented.');
}
  eleve: Eleve = { login: '', mot_de_passe: '' };
  errorMessage: string = '';
showPassword: any;

  constructor(private http: HttpClient) {}

  onLogin() {
    console.log("Bouton cliqué !");
    this.connexionService.login(this.eleve).subscribe(
      (response: { message: string; }) => {
        console.log("Réponse reçue :", response);
        if (response.message === "Connexion réussie") {
          alert('Connexion réussie !');
        } else {
          this.errorMessage = response.message;
        }
      },
      (error: any) => {
        this.errorMessage = 'Erreur de connexion';
        console.error("Erreur de requête :", error);
      }
    );
  }
}