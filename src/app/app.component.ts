import { Component, OnInit } from '@angular/core';
import { BreedStore } from './services/breed.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'component-store';
  breed$ = this._breedStore.breeds$;
  constructor(private readonly _breedStore: BreedStore) {}
  ngOnInit(): void {
    this._breedStore.fetchBreeds();

    this.breed$.subscribe((val) => console.log(val));
  }
}
