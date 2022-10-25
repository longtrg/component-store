import { Component, Input, OnInit } from '@angular/core';
import { Breed } from '../../models/breeds.model';
import { BreedStore } from '../../services/breed.store';

@Component({
  selector: 'app-breed-sidebar-item',
  templateUrl: './breed-sidebar-item.component.html',
  styleUrls: ['./breed-sidebar-item.component.scss'],
})
export class BreedSidebarItemComponent implements OnInit {
  @Input() breedItem!: Breed;
  selectedId$ = this._breedStore.selectedId$;
  constructor(private readonly _breedStore: BreedStore) {}

  ngOnInit(): void {}

  selectBreed(id: string) {
    this._breedStore.selectId(id);
  }
}
