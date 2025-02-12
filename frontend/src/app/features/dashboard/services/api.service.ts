import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackitTile } from '../../../core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL = 'https://fake-json-api.mock.beeceptor.com';
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private _http: HttpClient) {
    this.backendCheck();
  }

  backendCheck() {
    return this._http.get(`${this.apiUrl}/`).subscribe({
      next: (res) => console.log(res),
    });
  }

  getCompanies(): Observable<any> {
    return this._http.get(`${this.BASE_URL}/companies`);
  }

  getTiles(): Observable<TrackitTile[]> {
    return this._http.get<TrackitTile[]>(`${this.apiUrl}/tiles`);
    /* 
    return of([
      { text: '💰 Financial', cols: 1, rows: 1, color: 'lightblue' },
      {
        text: '🔔 Reminders',
        cols: 1,
        rows: 1,
        color: 'lightyellow',
      },
      {
        text: '📈 Portfolio',
        cols: 2,
        rows: 2,
        color: 'lightpink',
      },
      {
        text: '📚 Learning',
        cols: 2,
        rows: 1,
        color: 'lightgreen',
      },
      {
        text: '💳 Subscriptions',
        cols: 1,
        rows: 1,
        color: 'orange',
      },
      { text: '✅ To-Dos', cols: 2, rows: 1, color: '#DDBDF1' },
      { text: '🎯 Goals', cols: 1, rows: 1, color: 'red' },
      {
        text: '📊 Daily Insights',
        cols: 2,
        rows: 1,
        color: 'red',
      },
      { text: '🏋️‍♂️ Health & Fitness', cols: 1, rows: 1, color: 'red' },
    ]);
     */
  }
}
