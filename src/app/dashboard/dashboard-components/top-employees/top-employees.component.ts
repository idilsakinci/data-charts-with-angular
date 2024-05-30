import { Component, OnInit } from '@angular/core';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule, CircleProgressOptions } from 'ng-circle-progress';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-top-employees',
  standalone: true,
  imports: [DemoMaterialModule, CommonModule, NgCircleProgressModule],
  templateUrl: './top-employees.component.html',
  providers: [
    {
      provide: CircleProgressOptions,
      useValue: {
        radius: 14,
        space: -6,
        outerStrokeWidth: 5,
        outerStrokeGradient: true,
        outerStrokeGradientStopColor: "#53a9ff",
        innerStrokeWidth: 5,
        outerStrokeColor: "#4882c2",
        innerStrokeColor: "#e7e8ea",
        animationDuration: 1000,
        showTitle: false,
        showUnits: false,
        showSubtitle: false,
        showInnerStroke: false,
        showZeroOuterStroke: false,
        renderOnClick: false,
        title: 0,
        titleFontSize: 10,
        titleFontWeight: 900,
      }
    }
  ]
})
export class TopEmployeesComponent implements OnInit {

  public topEmployees: any;
  public averageEmployeeScore: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getDashboardData().subscribe((data: any) => {
      if (data) {
        this.averageEmployeeScore=data.data.average_employee_score;
        let imageCounter = 1;
        this.topEmployees = data.data.top_employees.map(
          (employee: any) => {
            employee.image = `assets/images/users/${imageCounter}.jpg`;
            imageCounter++;
            return employee;
          }
        );
        console.log('Top Employees:', this.topEmployees);
      }
    });
  }

}
