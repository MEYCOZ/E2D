import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-code-route',
  standalone: false,
  templateUrl: './code-route.component.html',
  styleUrl: './code-route.component.css'
})
export class CodeRouteComponent implements OnInit, AfterViewInit {
  @ViewChild('monCanvas1') monCanvas1!: ElementRef;
  @ViewChild('monCanvas2') monCanvas2!: ElementRef;
  @ViewChild('monCanvas3') monCanvas3!: ElementRef;

  monGraphique1: Chart | null = null;
  monGraphique2: Chart | null = null;
  monGraphique3: Chart | null = null;

  constructor() { }

  ngOnInit(): void {
    // Initialisation du composant
  }

  ngAfterViewInit(): void {
    this.afficherGraphiques();
  }

  afficherGraphiques(): void {
    this.afficherGraphique1();
    this.afficherGraphique2();
    this.afficherGraphique3();
  }

  afficherGraphique1(): void {
    const ctx = this.monCanvas1.nativeElement.getContext('2d');
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
    this.monGraphique1 = new Chart(ctx, config);
  }

  afficherGraphique2(): void {
    const ctx = this.monCanvas2.nativeElement.getContext('2d');
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
    this.monGraphique2 = new Chart(ctx, config);
  }

  afficherGraphique3(): void {
    const ctx = this.monCanvas3.nativeElement.getContext('2d');
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
    this.monGraphique3 = new Chart(ctx, config);
  }
}
