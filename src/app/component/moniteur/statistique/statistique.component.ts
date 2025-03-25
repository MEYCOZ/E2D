import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { Colors } from 'chart.js';

Chart.register(Colors);


@Component({
  selector: 'app-statistique',
  standalone: false,  // Vous avez spécifié standalone: false
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('statisticsChart1', { static: false }) statisticsChart1!: ElementRef<HTMLCanvasElement>;
  @ViewChild('statisticsChart2', { static: false }) statisticsChart2!: ElementRef<HTMLCanvasElement>; // Référence pour le deuxième graphique
  statistiqueGraphique1: Chart<any> | null = null;
  statistiqueGraphique2: Chart<any> | null = null; // Instance pour le deuxième graphique

  constructor() { }

  ngOnInit(): void {
    // Initialisation du composant
  }

  ngAfterViewInit(): void {
    this.loadChartJS().then(() => {
      this.afficherGraphique1();
      this.afficherGraphique2(); // Appeler la méthode pour afficher le deuxième graphique
    });
  }

  ngOnDestroy(): void {
    // Détruit les graphiques pour libérer les ressources
    if (this.statistiqueGraphique1) {
      this.statistiqueGraphique1.destroy();
    }
    if (this.statistiqueGraphique2) {
      this.statistiqueGraphique2.destroy();
    }
  }

  async loadChartJS(): Promise<void> {
    try {
      const { Chart } = await import('chart.js/auto');
    } catch (error) {
      console.error("Failed to load Chart.js:", error);
      throw error;
    }
  }

  afficherGraphique1(): void {
    if (!this.statisticsChart1?.nativeElement) return;
    const ctx = this.statisticsChart1.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: [
          "City'Zen",
          "EnVoitureSimone",
          "French Permis",
          "Stych",
          "Ornikar",
          "France Auto Ecole",
          "ECF",
          "VroomVroom"
        ],
        
        datasets: [{
          
          label: "",
          data: [25, 85, 40, 70, 92, 25, 65, 40],
          backgroundColor: [
            'rgba(190, 255, 209, 0.8)',
          ],
          borderColor: [
            'rgba(200, 190, 255, 1)',
          ],
          borderWidth: 1,
          borderRadius: 5,
          barPercentage: 0.6,
          categoryPercentage: 0.8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Taux d'échec des élèves par auto-école (en pourcentage)",
            color: 'rgba(255, 255, 255, 0.8)',
            font: {
              size: 16,
              
            }
          }

        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
              stepSize: 50,
            }
          },

          x: {
            beginAtZero: true,
            max: 100,
            ticks: {
               color: 'rgba(255, 255, 255, 0.7)',
              font: {  
                size: 14
            }
             
             
            }
          },
          
          


        }
      }
    };

    if (this.statistiqueGraphique1) {
      this.statistiqueGraphique1.destroy();
    }
    this.statistiqueGraphique1 = new Chart(ctx, config);
  }

  afficherGraphique2(): void {
    if (!this.statisticsChart2?.nativeElement) return;
    const ctx2 = this.statisticsChart2.nativeElement.getContext('2d');
    if (!ctx2) return;

    const config2: ChartConfiguration = {
      type: 'bar', // Type de graphique : line
      data: {
        labels: ['Lécole Auto', 'EnVoitureSimone', 'PermisPourTous', 'Stych', 'Ornikar', 'France Auto Ecole', 'ECF', 'VroomVroom'],
        datasets: [{
          label: "",
          
          data: [50, 12, 30, 12, 8, 40, 22, 18],
          backgroundColor: 'rgba(255, 81, 145, 0.9)', // Couleur de fond     // Couleur de la ligne
          borderWidth: 2,
          fill: false, // Ne pas remplir sous la ligne
          borderRadius: 5,
          barPercentage: 0.6,
          categoryPercentage: 0.8
           // Taille des points au survol
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Taux d'échec des élèves par auto-école (en pourcentage)",
            color: 'rgba(255, 255, 255, 0.8)',
            font: {
              size: 16,
              
            }
          }

        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
              stepSize: 50,
            }
          },

          x: {
            beginAtZero: true,
            max: 100,
            ticks: {
               color: 'rgba(255, 255, 255, 0.7)',
              font: {  
                size: 14
            }
             
             
            }
          },

        },
        
        
      }
    };

    if (this.statistiqueGraphique2) {
      this.statistiqueGraphique2.destroy();
    }
    this.statistiqueGraphique2 = new Chart(ctx2, config2);
  }
}
