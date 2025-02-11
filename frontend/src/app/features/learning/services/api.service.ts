import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackitTile } from '../../../core/interfaces';

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) {}

  getCourses(): Observable<TrackitTile[]> {
    return of([
      { text: 'AWS', cols: 1, rows: 1, color: 'lightblue' },
      { text: 'Python', cols: 2, rows: 1, color: '#DDBDF1' },
      { text: 'Node', cols: 1, rows: 1, color: 'red' },
      { text: 'Angular', cols: 1, rows: 1, color: 'red' },
    ]);
  }
}
