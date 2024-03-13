import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-estadisticas-rutina-contenido',
  templateUrl: './estadisticas-rutina-contenido.component.html',
  styleUrls: ['./estadisticas-rutina-contenido.component.css']
})
export class EstadisticasRutinaContenidoComponent implements OnInit {

  constructor() {
    // Register all controllers, elements, scales and plugins for the chart
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.renderHoursOfExerciseChart();
    this.renderCaloriesBurnedChart();
  }

  private getChartContext(canvasId: string): CanvasRenderingContext2D | null {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    return canvas?.getContext('2d') || null;
  }

  renderHoursOfExerciseChart(): void {
    const ctx = this.getChartContext('horas-ejercicio');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['L', 'Mar', 'Mier', 'J', 'V', 'S', 'D'],
        datasets: [{
          label: 'Horas de ejercicio',
          data: [1, 2, 1.5, 2, 2.5, 0, 0], // Replace with actual data
          backgroundColor: 'rgba(255, 200, 138, 0.7)',
          borderColor: 'rgba(255, 200, 138, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    new Chart(ctx, config);
  }

  renderCaloriesBurnedChart(): void {
    const ctx = this.getChartContext('calorias-gastadas');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['Pecho', 'Femoral', 'Abdomen', 'Bíceps', 'Tríceps'],
        datasets: [{
          label: 'Calorías gastadas',
          data: [300, 250, 400, 200, 100], // Replace with actual data
          backgroundColor: 'rgba(255, 159, 64, 0.7)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        indexAxis: 'y', // This makes the bar chart horizontal
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }
    };

    new Chart(ctx, config);
  }
}
