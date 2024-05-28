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
  selector: 'app-skills-in-development',
  standalone: true,
  imports: [NgApexchartsModule, DemoMaterialModule, CommonModule],
  templateUrl: './skills-in-development.html',
})
export class SkillsInDevelopmentComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public chartOptions: Partial<ChartOptions> | null = null;
  public skillsData: any;
  public totalEmployees: number | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDashboardData().subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.totalEmployees = data.data.total_employees;
        this.skillsData = data.data.skills_in_development;
        console.log(this.skillsData);
        this.createChartOptions();
      }
    });
  }

  createChartOptions(): void {
    const categories = this.skillsData.map((skill: any) => this.truncateSkillName(skill.skill));
    const seriesData = this.skillsData.map((skill: any) => skill.employees);

    this.chartOptions = {
      series: [
        {
          name: 'Employees',
          data: seriesData,
        },
      ],
      chart: {
        type: 'bar',
        fontFamily: 'Poppins,sans-serif',
        height: 320,
      },
      grid: {
        borderColor: 'rgba(0,0,0,.2)',
        strokeDashArray: 3,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: categories,
      },
      legend: {
        show: false,
      },
      fill: {
        colors: ['#26c6da', '#1e88e5'],
        opacity: 1,
      },
      tooltip: {
        theme: 'dark',
      },
    };
  }

  truncateSkillName(skillName: string): string {
    return skillName.length > 12 ? skillName.substring(0, 12) + '...' : skillName;
  }
}
