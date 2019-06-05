import {Component, Inject, OnInit} from '@angular/core';
import {Course} from '../courses.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public course: Course) { }

  ngOnInit() {
  }

}
