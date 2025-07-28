import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-course-details',
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute){}
  userService = inject(UserServiceService);

  courseId!:number;
  courseData!:any;


  ngOnInit(): void {

    let data = this.route.snapshot.paramMap.get("courseId") ;

    if(data){
      this.courseId = parseInt(data);
    }

    this.courseData = this.userService.course.filter((co)=>co.id == this.courseId)[0]

    console.log(this.courseId,this.courseData);
  }



}
