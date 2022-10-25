import { TestBed } from '@angular/core/testing';

import { BreedStore } from './breed.store';

describe('BreedStore', () => {
  let service: BreedStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
