import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'trackit-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss',
  standalone: false,
})
export class AddCourseComponent {
  courseForm: FormGroup;
  dialogTitle = 'Add Course';
  priorities = ['High', 'Medium', 'Low'];

  constructor(
    private courseService: ApiService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.dialogTitle = data.title;
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      subtitle: [''],
      description: [''],
      targetDate: ['', Validators.required],
      priority: ['', Validators.required],
    });

    if (data.course) {
      this.courseForm.patchValue(data.course);
    }
  }

  onSubmit() {
    if (this.courseForm.valid) {
      // console.log('Course Data:', this.courseForm.value);
      this.dialogRef.close(this.courseForm.value);
      if (this.data.action === 'Edit') {
        this.courseService
          .updateCourse(this.data.course.id, { ...this.courseForm.value, id: this.data.course.id })
          .subscribe((response) => {
            console.log('Course has been updated!', response);
          });
      } else {
        this.courseService.addCourse(this.courseForm.value).subscribe((response) => {
          console.log('Course has been added!:', response);
        });
      }
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
