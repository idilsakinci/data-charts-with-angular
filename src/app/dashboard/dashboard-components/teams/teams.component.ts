import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { DataService } from 'src/app/service/data.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [DemoMaterialModule, CommonModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit{
  public teams: any;
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  public displayedColumns: string[] = ['title', 'description', 'employee_count', 'overall_score'];

  public sort: MatSort = new MatSort();

  constructor(private dataService: DataService) {
    this.dataSource = new MatTableDataSource<any>();
    this.sort = new MatSort();
  }

  ngOnInit(): void {
    this.dataService.getDashboardData().subscribe((data: any) => {
      if (data) {
        console.log("Data:", data);
        this.teams = data.data.teams;
        console.log("Teams:", this.teams);
        this.dataSource = new MatTableDataSource(this.teams);
        this.dataSource.sort = this.sort;
      }
    });
  }

}
