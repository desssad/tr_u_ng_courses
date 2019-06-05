import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Course, CoursesService} from '../courses.service';

// @ts-ignore
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course$: Observable<Course>;
  onBack() {
    this.router.navigate(['/courses']);
  }

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        this.course$ = this.coursesService
          .getCourse(param.get('id'));
      }
    );
  }

}
