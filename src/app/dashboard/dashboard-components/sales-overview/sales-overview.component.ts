import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { DemoMaterialModule } from 'src/app/demo-material-module';

import { DataService } from 'src/app/service/data.service';
import { take } from 'rxjs/operators';


export interface ChartOptions {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  grid: ApexGrid | any;
}

@Component({
  selector: 'app-sales-overview',
  standalone: true,
  imports: [NgApexchartsModule, DemoMaterialModule, CommonModule],
  templateUrl: './sales-overview.component.html',
})
export class SalesOverviewComponent implements OnInit {


  public teamData: any[] = [];
  public chartData: { title: string, total_employee_count: number }[] = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getDashboardData()
      .subscribe((data: any) => {
        console.log(data);
        if (data && data.data.teams) {
          this.teamData = data.data.teams;
          console.log(this.teamData);
        }
      });
  }


}
