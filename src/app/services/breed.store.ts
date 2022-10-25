import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { catchError, EMPTY, Observable, switchMap } from 'rxjs';
import { Breed } from '../models/breeds.model';
import { ApiService } from './api.service';

export interface BreedState {
  breeds: Breed[];
  selectedId: string | null;
}

const defaultState: BreedState = {
  breeds: [],
  selectedId: null,
};

@Injectable({
  providedIn: 'root',
})
export class BreedStore extends ComponentStore<BreedState> {
  constructor(private readonly _api: ApiService) {
    super(defaultState);
  }

  readonly breeds$: Observable<Breed[]> = this.select((state) => state.breeds);
  readonly selectedId$: Observable<string | null> = this.select(
    (state) => state.selectedId
  );
  readonly selectedBreed$: Observable<Breed | undefined> = this.select(
    this.breeds$,
    this.selectedId$,
    (breeds, selectedId) => breeds.find((breed) => breed.id === selectedId)
  );

  readonly setBreeds = this.updater((state, breeds: Breed[]) => ({
    ...state,
    breeds,
  }));

  readonly selectId = this.updater((state, breedId: string) => ({
    ...state,
    selectedId: breedId,
  }));

  readonly fetchBreeds = this.effect((_) => {
    return _.pipe(
      switchMap(() => {
        return this._api.loadBreeds().pipe(
          tapResponse(
            (result) => {
              this.setBreeds(result);
              this.selectId(result[0].id);
            },
            (e) => console.log(e)
          ),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
