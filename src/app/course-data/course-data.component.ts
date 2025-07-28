import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-data',
  imports: [RouterModule],
  templateUrl: './course-data.component.html',
  styleUrl: './course-data.component.css'
})
export class CourseDataComponent {


  @Input() data:any;

}
