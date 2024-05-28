import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DemoMaterialModule } from 'src/app/demo-material-module';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-courses-timeline',
  standalone: true,
  imports: [DemoMaterialModule, CommonModule],
  templateUrl: './courses-timeline.component.html',
  styleUrls: ['./courses-timeline.component.scss'],
})
export class CoursesTimelineComponent implements OnInit {
  public inProgressCourses: any;
  public upcomingCourses: any;
  public totalCompletedCourses: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDashboardData().subscribe((data: any) => {
      if (data) {
        this.inProgressCourses = data.data.in_progress_courses.map(
          (course: any) => {
            course.image = `assets/images/courses/${course.title
              .toLowerCase()
              .replace(/\s+/g, '-')}.jpg`;
            return course;
          }
        );
        console.log('In Progress Courses:', this.inProgressCourses);
        this.upcomingCourses = data.data.upcoming_courses.map((course: any) => {
          course.image = `assets/images/courses/${course.title
            .toLowerCase()
            .replace(/\s+/g, '-')}.jpg`;
          return course;
        });
        console.log('Upcoming Courses:', this.upcomingCourses);
        this.totalCompletedCourses = data.data.total_completed_courses;
      }
    });
  }
}
