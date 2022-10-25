import { Component, OnInit } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';
import { BreedStore } from './services/breed.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'component-store';
  breed$ = this._breedStore.breeds$;
  selectedBreed$ = this._breedStore.selectedBreed$;
  constructor(private readonly _breedStore: BreedStore) {}
  ngOnInit(): void {
    this._breedStore.fetchBreeds();
  }
}
