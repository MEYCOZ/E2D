import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Eleve } from '../../models/eleve';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  imports: [CommonModule, FormsModule, HttpClientModule],
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  eleve: Eleve = new Eleve();

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    console.log("Formulaire soumis");
    console.log("Données envoyées :", this.eleve);

    this.http.post('http://localhost/API_SAE/Src/add_student.php', this.eleve)
      .subscribe(
        (response: any) => { // Ajout de :any pour éviter les erreurs de typage
          console.log("Réponse de l'API :", response);
          alert("Inscription réussie !");

          // Redirige vers la page d'accueil de l'élève
          this.router.navigate(['/app-eleve-accueil']);
        },
        error => {
          console.error("Erreur lors de l'inscription :", error);
          alert("Erreur : " + error.message);
        }
      );
  }
}
