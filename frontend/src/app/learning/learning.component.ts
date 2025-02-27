import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCourses } from './store/selectors';
import { Course } from './interfaces/course.interface';
import { ApiService } from './services/api.service';
import { ConfirmationService, MessageService } from 'primeng/api';

import { RESPONSIVE_OPTIONS } from '../constants/app.constants';

import * as LearningActions from './store/actions';

@Component({
  selector: 'trackit-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss',
  standalone: false,
})
export class LearningComponent implements OnInit {
  responsiveOptions = RESPONSIVE_OPTIONS;

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
    private _fb: FormBuilder,
    private _courseService: ApiService,
    private _store: Store,
    private _confirmationService: ConfirmationService,
    private _messageService: MessageService,
  ) {
    this.courses$ = this._store.select(selectCourses);
    this.courseForm = this._fb.group({
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
    this._courseService.addCourse(this.courseForm.value).subscribe((response) => {
      console.log('Course has been added!:', response);
      this._store.dispatch(LearningActions.getCoursesInfo());
    });
  }

  private _deleteCourse(id: string) {
    this._courseService.deleteCourse(id).subscribe({
      next: (response) => {
        this._messageService.add({
          severity: 'success',
          summary: 'Confirmed',
          detail: 'Record deleted',
        });
        this._store.dispatch(LearningActions.getCoursesInfo());
      },
      error: (error) => {
        this._messageService.add({
          severity: 'danger',
          summary: 'Error',
          detail: 'There was an error occured while deleting.',
        });
      },
    });
    this._courseService.deleteCourse(id).subscribe((response) => {
      console.log('Course has been deleted!:', response);
    });
  }

  onDelete(id: string) {
    this._confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Danger Zone',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },

      accept: () => {
        this._deleteCourse(id);
      },
      reject: () => {
        this._messageService.add({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'You have cancelled',
        });
      },
    });
  }
}
