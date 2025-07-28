import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent {

  router = inject(Router);
  courseName:string= "";
  courseDescription:string = "";

  userService = inject(UserServiceService)


  submitCourse(){

    let payload = {
      id:this.userService.course.length+1,
      title: this.courseName,
      description: this.courseDescription,
    }

    this.userService.course.push(payload);

    this.router.navigateByUrl("course");

  }


}
