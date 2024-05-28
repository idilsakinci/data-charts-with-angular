import { Component, AfterViewInit } from '@angular/core';
import { SkillsInDevelopmentComponent } from './dashboard-components/skills-in-development/skills-in-development';
import { TopSkillsComponent } from './dashboard-components/top-skills/top-skills.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { CoursesTimelineComponent } from './dashboard-components/courses-timeline/courses-timeline.component';
import { TeamsComponent } from './dashboard-components/teams/teams.component';


@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [SkillsInDevelopmentComponent, TopSkillsComponent, ProfileComponent, ContactsComponent, CoursesTimelineComponent, TeamsComponent],
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

	ngAfterViewInit() { }

}
