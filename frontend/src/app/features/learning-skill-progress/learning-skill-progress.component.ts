import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TrackitTile } from '../../core/interfaces';
import { selectCourses } from './store/selectors';

import * as LearningActions from './store/actions';

@Component({
  selector: 'trackit-learning-skill-progress',
  templateUrl: './learning-skill-progress.component.html',
  styleUrl: './learning-skill-progress.component.scss',
  standalone: false,
})
export class LearningSkillProgressComponent implements OnInit {
  courses$: Observable<TrackitTile[]>;

  constructor(private _store: Store) {
    this.courses$ = this._store.select(selectCourses);
  }

  ngOnInit(): void {
    this._store.dispatch(LearningActions.initialize());
  }
}
