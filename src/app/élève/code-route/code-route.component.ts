import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-route',
  standalone: false,

  templateUrl: './code-route.component.html',
  styleUrl: './code-route.component.css'
})
export class CodeRouteComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('monCanvas1', { static: false }) monCanvas1!: ElementRef<HTMLCanvasElement>;
  @ViewChild('monCanvas2', { static: false }) monCanvas2!: ElementRef<HTMLCanvasElement>;
  @ViewChild('monCanvas3', { static: false }) monCanvas3!: ElementRef<HTMLCanvasElement>;

  monGraphique1: Chart<any> | null = null;
  monGraphique2: Chart<any> | null = null;
  monGraphique3: Chart<any> | null = null;

  constructor() { }

  ngOnInit(): void {
    // Initialisation du composant
  }

  ngAfterViewInit(): void {
    this.loadChartJS().then(() => {
      this.afficherGraphiques();
    });
  }

  ngOnDestroy(): void {
    // Détruit les graphiques pour libérer les ressources
    if (this.monGraphique1) {
      this.monGraphique1.destroy();
    }
    if (this.monGraphique2) {
      this.monGraphique2.destroy();
    }
    if (this.monGraphique3) {
      this.monGraphique3.destroy();
    }
  }

  async loadChartJS(): Promise<void> {
    try {
      const { Chart } = await import('chart.js/auto');
      // Enregistrez Chart.js globalement si nécessaire
      // (window as any).Chart = Chart;
    } catch (error) {
      console.error("Failed to load Chart.js:", error);
      // Affichez un message d'erreur à l'utilisateur dans l'interface utilisateur.
      // Vous pouvez utiliser un service d'alerte ou manipuler le DOM pour afficher un message.
      // Par exemple :
      // alert('Erreur de chargement de Chart.js. Veuillez vérifier votre connexion réseau.');
      throw error; // Rethrow pour que l'initialisation du composant échoue.
    }
  }

  afficherGraphiques(): void {
    this.afficherGraphique1();
    this.afficherGraphique2();
    this.afficherGraphique3();
  }

  afficherGraphique1(): void {
    if (!this.monCanvas1?.nativeElement) return;
    const ctx = this.monCanvas1.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['Rouge', 'Bleu', 'Jaune', 'Vert', 'Violet', 'Orange'],
        datasets: [{
          label: '# de Votes 1',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Graphique 1: Code de la Route',
            font: {
              size: 16
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    if (this.monGraphique1) {
      this.monGraphique1.destroy();
    }
    this.monGraphique1 = new Chart(ctx, config);
  }

  afficherGraphique2(): void {
    if (!this.monCanvas2?.nativeElement) return;
    const ctx = this.monCanvas2.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'pie',
      data: {
        labels: ['A', 'B', 'C', 'D', 'E'],
        datasets: [{
          label: 'Série 2',
          data: [20, 30, 15, 25, 10],
          backgroundColor: [
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 132, 0.8)'
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Graphique 2: Répartition',
            font: {
              size: 16
            }
          },
          legend: {
            position: 'top'
          }
        }
      }
    };
    if (this.monGraphique2) {
      this.monGraphique2.destroy();
    }
    this.monGraphique2 = new Chart(ctx, config);
  }

  afficherGraphique3(): void {
    if (!this.monCanvas3?.nativeElement) return;
    const ctx = this.monCanvas3.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil'],
        datasets: [{
          label: 'Ventes',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Graphique 3: Évolution des Ventes',
            font: {
              size: 16
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
    if (this.monGraphique3) {
      this.monGraphique3.destroy();
    }
    this.monGraphique3 = new Chart(ctx, config);
  }
}