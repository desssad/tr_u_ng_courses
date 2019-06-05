import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Course, CoursesService} from '../courses.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  course$: Observable<Course>
  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.course$ = this.coursesService.getCourse(id);
  }

  update(form: NgForm) {
    this.coursesService.updateCourse(form.value)
      .subscribe(() => {
        this.onCancel();
      });
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }
}

