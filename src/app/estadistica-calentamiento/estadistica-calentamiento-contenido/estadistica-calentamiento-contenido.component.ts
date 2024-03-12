import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-estadistica-calentamiento-contenido',
  templateUrl: './estadistica-calentamiento-contenido.component.html',
  styleUrls: ['./estadistica-calentamiento-contenido.component.css']
})
export class EstadisticaCalentamientoContenidoComponent implements OnInit {

  chart: any;

  constructor() { }

  ngOnInit(): void {
    this.kilometrosRecorridos();
    this.tiempoRecorrido();
    this.velocidadMedia();
  }

  kilometrosRecorridos(): void {
    Chart.register(...registerables);
    Chart.defaults.font.size = 12;
    Chart.defaults.font.family = "Roboto";
    Chart.defaults.color = '#666666'
    Chart.defaults.scale.min = 0;
    Chart.defaults.scale.max = 6;

    this.chart = new Chart('km-recorridos', {
      type: 'bar',
      data:{
        labels: ['L', 'Mar', 'Mier', 'J', 'V', 'S', 'D'],
        datasets: [{
          data: [2, 1.5, 2.1, 2.1, 2.1, 0, 0],
          backgroundColor: [
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)'
          ],
          borderColor: [
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: {
            stacked: false,
          },
          yAxes: {
            stacked: false,
          }
        },
        plugins: {

          legend: {
            display: false
          }
        }
      }
    })
  }


  tiempoRecorrido(): void {
    Chart.register(...registerables);
    Chart.defaults.font.size = 12;
    Chart.defaults.font.family = "Roboto";
    Chart.defaults.color = '#666666'
    Chart.defaults.scale.min = 0;
    Chart.defaults.scale.max = 6;

    this.chart = new Chart('tiempo-recorrido', {
      type: 'bar',
      data:{
        labels: ['L', 'Mar', 'Mier', 'J', 'V', 'S', 'D'],
        datasets: [{
          data: [2, 1.5, 2.1, 2.1, 2.1, 0, 0],
          backgroundColor: [
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)'
          ],
          borderColor: [
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: {
            stacked: false,
          },
          yAxes: {
            stacked: false,
          }
        },
        plugins: {

          legend: {
            display: false
          }
        }
      }
    })
  }


  velocidadMedia(): void {
    Chart.register(...registerables);
    Chart.defaults.font.size = 12;
    Chart.defaults.font.family = "Roboto";
    Chart.defaults.color = '#666666'
    Chart.defaults.scale.min = 0;
    Chart.defaults.scale.max = 6;

    this.chart = new Chart('velocidad-media', {
      type: 'bar',
      data:{
        labels: ['L', 'Mar', 'Mier', 'J', 'V', 'S', 'D'],
        datasets: [{
          data: [2, 1.5, 2.1, 2.1, 2.1, 0, 0],
          backgroundColor: [
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)'
          ],
          borderColor: [
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)',
            'rgba(255, 200, 138)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: {
            stacked: false,
          },
          yAxes: {
            stacked: false,
          }
        },
        plugins: {

          legend: {
            display: false
          }
        }
      }
    })
  }

}
