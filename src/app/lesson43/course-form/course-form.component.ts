import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Course, CoursesService} from '../courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  add(form: NgForm) {
    this.coursesService.addCourse(form.value as Course);
    form.reset();
  }
}
