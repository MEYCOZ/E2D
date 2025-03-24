import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginResponse } from '../../models/login-response'; // Importer l'interface
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  imports: [CommonModule, FormsModule, HttpClientModule],
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
togglePasswordVisibility() {
throw new Error('Method not implemented.');
}
selectedButton: any;
showPassword: any;
setActiveButton(arg0: string) {
throw new Error('Method not implemented.');
}
  login: string = '';
  mot_de_passe: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const loginData = {
      login: this.login,
      mot_de_passe: this.mot_de_passe
    };

    console.log("Données de connexion envoyées :", loginData); // Vérifier les données envoyées
    
    // Utiliser l'interface LoginResponse pour typer la réponse
    this.http.post<LoginResponse>('http://localhost/GitHub/E2D/API_SAE/Src/login-eleve-process.php', loginData)
      .subscribe(
        (response: LoginResponse) => {
          if (response.success) {
            console.log("Connexion réussie :", response);
            alert("Connexion réussie !");
            // Rediriger ou effectuer une action après la connexion réussie
            // this.router.navigate(['/dashboard']); // Remplacer par la route de redirection
          } else {
            console.log("Erreur de connexion :", response.message);
            alert("Erreur : " + response.message);
          }
        },
        error => {
          console.error("Erreur lors de la connexion :", error);
          alert("Erreur : " + error.message);
        }
      );
  }
}
