import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { DataService } from 'src/app/service/data.service';
import {
  ChartComponent,
  NgApexchartsModule,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexLegend,
  ApexPlotOptions,
  ApexFill,
  ApexTooltip,
  ApexStroke,
  ApexDataLabels,
  ApexGrid,
} from 'ng-apexcharts';

export interface ChartOptions {
  series: any;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
}

@Component({
  selector: 'app-activity-hours',
  standalone: true,
  imports: [DemoMaterialModule, CommonModule, NgApexchartsModule],
  templateUrl: './activity-hours.component.html',
  styleUrls: ['./activity-hours.component.scss'],
})
export class ActivityHoursComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public chartOptions: Partial<ChartOptions> | any;
  public activityHours: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDashboardData().subscribe((data: any) => {
      if (data) {
        this.activityHours = data.data.activity_hours;

        if (this.activityHours.length > 0) {
          this.activityHours[0].exams_completed = 0;
        }

        console.log('Activity Hours:', this.activityHours);
        this.createChartOptions();
      }
    });
  }

  createChartOptions(): void {
    const categories = this.activityHours.map((item: any) => item.date);
    const lessonsData = this.activityHours.map(
      (item: any) => item.lessons_taken
    );
    const hoursData = this.activityHours.map((item: any) => item.hours);
    // const colors = this.activityHours.map((item: any) => item.exams_completed === 1 ? '#28a745' : '#dc3545');

    const maxLessons = Math.max(...lessonsData);
    const maxHours = Math.max(...hoursData);

    this.chartOptions = {
      series: [
        {
          name: 'Lessons Taken',
          type: 'column',
          data: lessonsData,
        },
        {
          name: 'Hours',
          type: 'line',
          data: hoursData,
          color: '#e91e63',
        },
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
          colors: {
            ranges: [{
              from: 0,
            }]
          },
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [0, 2],
      },
      xaxis: {
        categories: categories,
      },
      yaxis: [
        {
          title: {
            text: 'Lessons Taken',
          },
          min: 0,
          max: maxLessons + 1,
          tickAmount: maxLessons + 1,
          labels: {
            formatter: function (val: any) {
              return Math.floor(val);
            },
          },
        },
        {
          opposite: true,
          title: {
            text: 'Hours',
          },
          min: 0,
          max: maxHours + 1,
          tickAmount: maxHours + 1,
          labels: {
            formatter: function (val: any) {
              return val.toFixed(1);
            },
          },
        },
      ],
      fill: {
        opacity: [1, 0.8],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      legend: {
        show: true,
        position: 'top',
      },
    };
  }
}
