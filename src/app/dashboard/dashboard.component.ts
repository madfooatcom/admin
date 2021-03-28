import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // @ViewChild('chart') chart: ChartComponent;

  series = [40, 55, 65, 11, 23, 44, 54, 33];
  title = 'Test Chart';
  constructor() { }

  ngOnInit() {
  }

}
