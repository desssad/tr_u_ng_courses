import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {CourseEditComponent} from './course-edit/course-edit.component';
import {CourseFormComponent} from './course-form/course-form.component';
import {NavCoursesComponent} from './nav-courses/nav-courses.component';
import {CoursesListComponent} from './courses-list/courses-list.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';


const routes: Routes = [
  {path: 'courses/:id', component: CourseDetailsComponent},
  {path: 'courses', component: CoursesListComponent},
  {path: 'course/edit/:id', component: CourseEditComponent},
  {path: 'course/add', component: CourseFormComponent},
  {path: '', redirectTo: 'courses', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseDetailsComponent,
    CourseEditComponent,
    CourseFormComponent,
    NavCoursesComponent,
    DialogDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [DialogDeleteComponent],
  exports: [NavCoursesComponent]
})
export class Lesson43Module {
}
