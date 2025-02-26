import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../interfaces/course.interface';

const API_URL = 'http://127.0.0.1:8000/courses';

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) {}

  // getCourses(): Observable<TrackitTile[]> {
  //   return of([
  //     { text: 'AWS', cols: 1, rows: 1, color: 'lightblue' },
  //     { text: 'Python', cols: 2, rows: 1, color: '#DDBDF1' },
  //     { text: 'Node', cols: 1, rows: 1, color: 'red' },
  //     { text: 'DSA', cols: 2, rows: 1, color: '#DDBDF1' },
  //     { text: 'Angular', cols: 1, rows: 1, color: 'red' },
  //     { text: 'New...', cols: 1, rows: 1, color: 'red' },
  //   ]);
  // }

  addCourse(course: Course): Observable<Course> {
    return this._http.post<Course>(API_URL, course);
  }

  getCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(API_URL);
  }

  // Update an existing course
  updateCourse(courseId: string, updatedCourse: Course): Observable<Course> {
    console.log('updatedCourse:::: ', updatedCourse);
    return this._http.put<Course>(`${API_URL}/${courseId}`, updatedCourse, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Delete a course
  deleteCourse(courseId: string): Observable<any> {
    return this._http.delete(`${API_URL}/${courseId}`);
  }
}
