import { Component, AfterViewInit } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-statistique',
  standalone: false,
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const canvas = document.getElementById('statisticsChart') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(191, 179, 239, 1.0)');
    gradient.addColorStop(1, 'rgba(134, 105, 221, 1.9)');
    
    const data = {
      labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août'],
      datasets: [{
        label: 'Statistiques',
        data: [3500, 15070, 8000, 15000, 20250, 3000, 10000, 8000],
        backgroundColor: gradient,
        borderWidth: 0,
        borderRadius: 5,
        barPercentage: 0.6,
        categoryPercentage: 0.8
      }]
    };

    const options: ChartOptions<'bar'> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          titleColor: '#3f51b5',
          bodyColor: '#3f51b5',
          titleFont: {
            size: 14,
            weight: 'bold'
          },
          bodyFont: {
            size: 14
          },
          padding: 10,
          displayColors: false,
          callbacks: {
            label: (context) => context.parsed.y.toLocaleString() + ' €'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.8)',
            font: {
              size: 12
            },
            callback: (value) => {
              const values: { [key: number]: string } = { 
                0: '0', 
                570: '570', 
                2500: '2 500', 
                5000: '5 000', 
                10000: '10 000', 
                15070: '15 070', 
                20250: '20 250' 
              };

              // Conversion explicite de `value` en `number`
              return values[+value] || '';
            },
            stepSize: 5000
          },
          max: 22000 // Limite max pour l'axe Y
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.8)',
            font: {
              size: 12
            }
          }
        }
      }
    };
    
    new Chart(ctx, {
      type: 'bar',
      data,
      options
    });
  }
}
