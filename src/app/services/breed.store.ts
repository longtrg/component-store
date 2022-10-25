import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap } from 'rxjs';
import { Breed } from '../models/breeds.model';
import { ApiService } from './api.service';

export interface BreedState {
  breeds: Breed[];
}

const defaultState: BreedState = {
  breeds: [],
};

@Injectable({
  providedIn: 'root',
})
export class BreedStore extends ComponentStore<BreedState> {
  constructor(private readonly _api: ApiService) {
    super(defaultState);
  }

  readonly breeds$: Observable<Breed[]> = this.select((state) => state.breeds);

  readonly setBreeds = this.updater((state, breeds: Breed[]) => ({
    ...state,
    breeds,
  }));

  readonly fetchBreeds = this.effect((_) => {
    return _.pipe(
      switchMap(() => {
        return this._api.loadBreeds().pipe(
          tapResponse(
            (result) => this.setBreeds(result),
            (e) => console.log(e)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
