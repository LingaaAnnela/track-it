import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCourses } from './store/selectors';
import { Course } from './interfaces/course.interface';
import { AddCourseComponent } from './components/add-course/add-course.component';

import * as LearningActions from './store/actions';
import { ApiService } from './services/api.service';

@Component({
  selector: 'trackit-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss',
  standalone: false,
})
export class LearningComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private courseService: ApiService,
    private dialog: MatDialog,
    private _store: Store,
  ) {
    this.courses$ = this._store.select(selectCourses);
  }

  ngOnInit(): void {
    this._store.dispatch(LearningActions.initialize());
  }

  openAddCourseDialog(action: 'Add' | 'Edit', course: Course | null): void {
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '500px',
      height: '600px',
      data: {
        action,
        title: `${action} Course`,
        course,
      }, // Pass any required data here
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._store.dispatch(LearningActions.getCoursesInfo());
      }
    });
  }

  deleteCourse(id: string) {
    const confirmDelete = window.confirm('Are you sure you want to delete this course?');
    if (confirmDelete) {
      this.courseService.deleteCourse(id).subscribe((response) => {
        console.log('Course has been deleted!:', response);
        this._store.dispatch(LearningActions.getCoursesInfo());
      });
    }
  }
}
