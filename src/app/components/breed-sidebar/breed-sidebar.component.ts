import { Component, Input, OnInit } from '@angular/core';
import { Breed } from '../../models/breeds.model';

@Component({
  selector: 'app-breed-sidebar',
  templateUrl: './breed-sidebar.component.html',
  styleUrls: ['./breed-sidebar.component.scss'],
})
export class BreedSidebarComponent implements OnInit {
  @Input() breeds?: Breed[];
  constructor() {}

  ngOnInit(): void {}
}
