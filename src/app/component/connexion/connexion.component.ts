import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from '../../models/login-response';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  eleve = { login: '', mot_de_passe: '' };
  errorMessage: string = '';
  showPassword: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  // 🔹 Méthode pour afficher/masquer le mot de passe
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // 🔹 Méthode pour soumettre le formulaire
  onSubmit() {
    console.log('Informations de connexion envoyées:', this.eleve);

    this.http.post<LoginResponse>('http://localhost/API_SAE/Src/login-eleve-process.php', this.eleve)
      .subscribe(
        response => {
          console.log("Réponse de l'API :", response);

          if (response.success) {
            // ✅ Redirection ici
            this.router.navigate(['/app-eleve-accueil']);
          
          } else {
            this.errorMessage = response.message;
          }
        },
        error => {
          console.error("Erreur lors de la connexion :", error);
          this.errorMessage = 'Erreur lors de la connexion. Veuillez réessayer.';
        }
      );
  }
}
