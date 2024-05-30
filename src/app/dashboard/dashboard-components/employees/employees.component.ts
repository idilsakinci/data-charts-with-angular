import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/service/data.service';
import { DemoMaterialModule } from 'src/app/demo-material-module';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [DemoMaterialModule, CommonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {
  teamsDetail: any[] = [];
  displayedEmployeeColumns: string[] = ['name', 'email', 'title', 'currentScore', 'lessonsTaken', 'skillsBeingDeveloped'];
  selectedTeam: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDashboardData().subscribe((data: any) => {
      if (data) {
        this.teamsDetail = data.data.teams;
        if (this.teamsDetail.length > 0) {
          this.selectedTeam = this.teamsDetail[0];
        }
      }
    });
  }

  onTeamSelect(team: any): void {
    this.selectedTeam = team;
  }
}
