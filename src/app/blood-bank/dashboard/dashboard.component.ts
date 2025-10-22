import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 ngAfterViewInit(): void {
    new Chart("bloodChart", {
      type: 'doughnut',
      data: {
        labels: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        datasets: [{
          data: [50, 20, 40, 15, 70, 30, 10, 5],
          backgroundColor: [
            '#f44336','#e57373','#ff9800','#ffc107','#2196f3','#64b5f6','#4caf50','#81c784'
          ]
        }]
      }
    });

    new Chart("donationChart", {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
          label: 'Donations',
          data: [12, 19, 8, 15, 10, 18],
          backgroundColor: '#f44336'
        }]
      }
    });
  }
}


