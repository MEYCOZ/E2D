import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Eleve {
  id?: number;
  login: string;
  mot_de_passe: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private apiUrl = "http://localhost/GitHub/E2D/API_SAE/Src/login-eleve-process.php"


  constructor(private http: HttpClient) { }
  login(eleve: Eleve): Observable<any> {
    return this.http.post<any>(this.apiUrl, eleve);
  }
}
