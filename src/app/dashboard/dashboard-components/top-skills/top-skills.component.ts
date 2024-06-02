import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { DemoMaterialModule } from 'src/app/demo-material-module';

import { DataService } from 'src/app/service/data.service';

export interface TopSkillsChartOptions {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  responsive: ApexResponsive[] | any;
  labels: any;
  tooltip: ApexTooltip | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  stroke: any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
}

@Component({
  selector: 'app-top-skills',
  standalone: true,
  imports: [NgApexchartsModule, DemoMaterialModule, CommonModule],
  templateUrl: './top-skills.component.html',
  styleUrls: ['./top-skills.component.scss']
})
export class TopSkillsComponent {
  @ViewChild('top-skills-chart') chart2: ChartComponent = Object.create(null);
  public TopSkillsChartOptions: Partial<TopSkillsChartOptions> | null = null;
  public topSkillsData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDashboardData().subscribe((data: any) => {
      if (data) {
        this.topSkillsData = data.data.top_skills;
        console.log("Top Skills:", this.topSkillsData);
        this.createChartOptionsTopSkills();
      }
    });
  }

  createChartOptionsTopSkills(): void {
    const categories = this.topSkillsData.map((skill: any) => skill.skill);
    const seriesData = this.topSkillsData.map((skill: any) => skill.employees);

    this.TopSkillsChartOptions = {
      series: seriesData,
      chart: {
        type: 'donut',
        fontFamily: 'Poppins,sans-serif',
        width: '100%', // genişlik ve yükseklik değerlerini otomatik hale getirdik
        height: '100%',
      },
      plotOptions: {
        pie: {
          donut: {
            size: '80%',
          },
        },
      },
      tooltip: {
        fillSeriesColor: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      labels: categories,
      colors: ['#1e88e5', '#26c6da', '#745af2', '#e91e63', '#67757c'],
      responsive: [
        {
          breakpoint: 767,
          options: {
            chart: {
              width: '100%', 
              height: '100%',
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '60%',
                },
              },
            },
          },
        },
      ],
    };
  }
}
