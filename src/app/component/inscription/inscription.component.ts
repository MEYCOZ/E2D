import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log("Données envoyées :", this.eleve); // Vérifier les données envoyées
  
    this.http.post('http://localhost/GitHub/E2D/API_SAE/Src/add_student.php', this.eleve)
      .subscribe(
        response => {
          console.log("Réponse de l'API :", response);
          alert("Inscription réussie !");
        },
        error => {
          console.error("Erreur lors de l'inscription :", error);
          alert("Erreur : " + error.message);
        }
      );
  }
}  