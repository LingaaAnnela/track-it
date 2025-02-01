import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackitTile } from '../../../core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL = 'https://fake-json-api.mock.beeceptor.com';

  constructor(private _http: HttpClient) {}

  getCompanies(): Observable<any> {
    return this._http.get(`${this.BASE_URL}/companies`);
  }

  getTiles(): Observable<TrackitTile[]> {
    return of([
      { text: '💰 Financial Tracking', cols: 1, rows: 1, color: 'lightblue' },
      {
        text: '💵 Payments & Due Dates',
        cols: 1,
        rows: 1,
        color: 'lightyellow',
      },
      {
        text: '📈 Investments & Portfolio',
        cols: 2,
        rows: 2,
        color: 'lightpink',
      },
      {
        text: '📚 Learning & Skill Progress',
        cols: 2,
        rows: 1,
        color: 'lightgreen',
      },
      {
        text: '💳 Subscription Tracker',
        cols: 1,
        rows: 1,
        color: 'orange',
      },
      { text: '✅ To-Do Lists & Planning', cols: 2, rows: 1, color: '#DDBDF1' },
      { text: '🎯 Goal Tracking', cols: 1, rows: 1, color: 'red' },
      {
        text: '📊 Daily Insights & Productivity',
        cols: 2,
        rows: 1,
        color: 'red',
      },
      { text: '🏋️‍♂️ Health & Fitness', cols: 1, rows: 1, color: 'red' },
    ]);
  }
}
