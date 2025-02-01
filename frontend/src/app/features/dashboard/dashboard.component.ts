import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DashboardApiService } from './services/dashboard-api.service';
import { selectTiles } from './store/selectors';
import { DashboardTile } from './interfaces';

import * as DashboardActions from './store/actions';

@Component({
  selector: 'trackit-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false,
})
export class DashboardComponent implements OnInit {
  tiles$: Observable<DashboardTile[]>;

  constructor(private _store: Store, private _apiService: DashboardApiService) {
    // this.companies$ = this._apiService.getCompanies();
    this.tiles$ = this._store.select(selectTiles);
  }

  ngOnInit(): void {
    this._store.dispatch(DashboardActions.initialize());
  }
}
