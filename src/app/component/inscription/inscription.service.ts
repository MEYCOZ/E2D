import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eleve } from '../../models/eleve';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private apiUrl = 'http://localhost/API_SAE/Src/add_student.php'; // Mets l'URL de ton API backend

  constructor(private http: HttpClient) { }

  // Méthode pour envoyer les données d'inscription au serveur
  inscrireEleve(eleveData: any): Observable<any> {
    return this.http.post(this.apiUrl, eleveData);
  }
}
