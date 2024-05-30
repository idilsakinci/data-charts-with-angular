import { Component, AfterViewInit } from '@angular/core';
import { SkillsInDevelopmentComponent } from './dashboard-components/skills-in-development/skills-in-development';
import { TopSkillsComponent } from './dashboard-components/top-skills/top-skills.component';
import { AddComponent } from './dashboard-components/add/add.component';
import { TopEmployeesComponent } from './dashboard-components/top-employees/top-employees.component';
import { CoursesTimelineComponent } from './dashboard-components/courses-timeline/courses-timeline.component';
import { TeamsComponent } from './dashboard-components/teams/teams.component';
import { EmployeesComponent } from './dashboard-components/employees/employees.component';
import { ActivityHoursComponent } from './dashboard-components/activity-hours/activity-hours.component';


@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [SkillsInDevelopmentComponent, TopSkillsComponent, AddComponent, TopEmployeesComponent, CoursesTimelineComponent, TeamsComponent, EmployeesComponent, ActivityHoursComponent],
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

	ngAfterViewInit() { }

}
