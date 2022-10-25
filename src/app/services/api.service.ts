import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed } from '../models/breeds.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly _httpClient: HttpClient) {}

  loadBreeds(): Observable<Breed[]> {
    return this._httpClient.get<Breed[]>('https://api.thecatapi.com/v1/breeds');
  }
}
