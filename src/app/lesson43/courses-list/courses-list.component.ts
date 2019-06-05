import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Course, CoursesService} from '../courses.service';
import {DialogDeleteComponent} from '../dialog-delete/dialog-delete.component';
import {MatDialog} from '@angular/material';

// @ts-ignore
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
//
// id: string;
// title: string;
// price: number;
// description: string;
// lecturer: string;
export class CoursesListComponent implements OnInit {
  dataSource: MatTableDataSource<Course>;
  displayedColumns = ['id', 'title', 'price', 'description', 'details', 'edit', 'delete'];

  constructor(private coursesService: CoursesService,
              private dialog: MatDialog) {
  }

  @ViewChild(MatSort) sorter: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.coursesService.getCourses().subscribe(courses => {
      this.dataSource = new MatTableDataSource<Course>(courses);
      this.dataSource.sort = this.sorter;
      this.dataSource.paginator = this.paginator;
    });
  }

  // remove(id: string) {
  //   this.coursesService.removeCourse(id)
  //     .subscribe(() => this.ngOnInit());
  // }

  // ngOnDestroy(): void {
  //   // console.log('component students list: ngOnDestroy');
  // }

  onRemove(course: Course) {
    const dialogRef =
      this.dialog.open(DialogDeleteComponent, {
        data: course
      });
    dialogRef.afterClosed()
      .subscribe(res => {
      if (res) {
        this.coursesService.removeCourse(course.id)
          .subscribe(() => this.ngOnInit());
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
