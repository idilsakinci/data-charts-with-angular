import { Component, AfterViewInit } from '@angular/core';
import { SkillsInDevelopmentComponent } from './dashboard-components/skills-in-development/skills-in-development';
import { TopSkillsComponent } from './dashboard-components/top-skills/top-skills.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { ActivityTimelineComponent } from './dashboard-components/activity-timeline/activity-timeline.component';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [SkillsInDevelopmentComponent, TopSkillsComponent, ProfileComponent, ContactsComponent, ActivityTimelineComponent],
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

	ngAfterViewInit() { }

}
