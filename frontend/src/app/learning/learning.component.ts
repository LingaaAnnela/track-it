import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCourses } from './store/selectors';
import { Course } from './interfaces/course.interface';
import { ApiService } from './services/api.service';

import * as LearningActions from './store/actions';

@Component({
  selector: 'trackit-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss',
  standalone: false,
})
export class LearningComponent implements OnInit {
  courses$: Observable<Course[]>;

  courseForm: FormGroup;
  showAddDialog = false;
  dialogTitle = 'Add Course';
  priorities = [
    { label: 'High', value: 'High' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Low', value: 'Low' },
  ];
  categories = [
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Backend', value: 'Backend' },
    { label: 'Cloud', value: 'Cloud' },
  ];

  constructor(
    private fb: FormBuilder,
    private courseService: ApiService,
    private dialog: MatDialog,
    private _store: Store,
  ) {
    this.courses$ = this._store.select(selectCourses);
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      subtitle: [''],
      description: [''],
      targetDate: ['', Validators.required],
      priority: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this._store.dispatch(LearningActions.initialize());
  }

  onAddCourse(): void {
    this.showAddDialog = true;
  }

  onSubmit() {
    this.courseService.addCourse(this.courseForm.value).subscribe((response) => {
      console.log('Course has been added!:', response);
      this._store.dispatch(LearningActions.getCoursesInfo());
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
