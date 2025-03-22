import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  standalone: false,
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'] // ✅ Correction ici
})
export class ConnexionComponent implements OnInit {
  
  showPassword: boolean = false;
  selectedButton: string = 'student'; // Défini par défaut

  ngOnInit(): void {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  setActiveButton(button: string): void {
    this.selectedButton = button;
  }
}
