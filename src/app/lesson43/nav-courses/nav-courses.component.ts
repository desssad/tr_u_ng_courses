import {Component, OnInit} from '@angular/core';

class Link {
  path: string;
  label: string;
}

@Component({
  selector: 'app-nav-courses',
  templateUrl: './nav-courses.component.html',
  styleUrls: ['./nav-courses.component.css']
})
export class NavCoursesComponent implements OnInit {

  navLinks: Link[] = [
    {path: 'courses', label: 'Courses'},
    {path: 'course/add', label: 'Add new Course'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
