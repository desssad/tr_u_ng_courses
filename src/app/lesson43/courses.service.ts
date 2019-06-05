import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Course {
  id: string;
  title: string;
  price: number;
  description: string;
  lecturer: string;
}

const url = 'http://localhost:3000/courses';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor(private http: HttpClient) {}

  addCourse(course: Course) {
    this.http.post<Course>(url, course).subscribe();
  }

  updateCourse(course: Course) {
    return this.http.put<Course>(`${url}/${course.id}`
      , course);
  }

  existCourse(id: string): Observable<boolean> {
    return this.getCourse(id).pipe(map(c =>
      c ? true : false));
  }

  getCourse(id: string): Observable<Course> {
    return this.http.get<Course>(`${url}/${id}`);
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(url);
  }

  removeCourse(id: string) {
    return this.http.delete(`${url}/${id}`);
  }
}
