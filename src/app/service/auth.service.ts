import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eleve } from '../models/eleve';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(login: string, mot_de_passe: string) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost/GitHub/E2D/API_SAE/Src/';


  constructor(private http: HttpClient) {}

  // Inscription
  inscription(eleve: Eleve): Observable<any> {
    return this.http.post(`${this.apiUrl}/add_student.php`, eleve);
  }

  // Connexion
  connexion(login: string, mot_de_passe: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login-eleve-process.php`, { login, mot_de_passe });
  }
}