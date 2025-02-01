import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTiles } from './store/selectors';

import { TrackitTile } from '../../core/interfaces';
import * as DashboardActions from './store/actions';

@Component({
  selector: 'trackit-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false,
})
export class DashboardComponent implements OnInit {
  tiles$: Observable<TrackitTile[]>;

  constructor(private _store: Store) {
    this.tiles$ = this._store.select(selectTiles);
  }

  ngOnInit(): void {
    this._store.dispatch(DashboardActions.initialize());
  }
}
