import { Component, inject, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { CourseDataComponent } from "../course-data/course-data.component";
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-task',
  imports: [CourseDataComponent,CommonModule,RouterModule],
  templateUrl: './course-task.component.html',
  styleUrl: './course-task.component.css'
})
export class CourseTaskComponent implements OnInit {
  router = inject(Router);

  userService = inject(UserServiceService);

  course = this.userService.course;

  filtereCourse:any[] = [];

  ngOnInit(): void {
    this.filtereCourse = [...this.course];
  }


  navigateToCourse(){
    this.router.navigateByUrl("create-course");
  }



  

}
