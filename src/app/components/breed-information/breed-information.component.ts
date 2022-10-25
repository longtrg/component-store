import { Component, Input, OnInit } from '@angular/core';
import { Breed } from '../../models/breeds.model';

@Component({
  selector: 'app-breed-information',
  templateUrl: './breed-information.component.html',
  styleUrls: ['./breed-information.component.scss'],
})
export class BreedInformationComponent implements OnInit {
  @Input() selectedBreed?: Breed;
  constructor() {}

  ngOnInit(): void {}
}
