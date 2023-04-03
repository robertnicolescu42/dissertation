import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  constructor(private http: HttpClient) {}

  getPlants(): Observable<any> {
    let url = environment.getWorkstationsUrl + 'plants';
    return this.http
      .get<{ body: any[] }>(url)
      .pipe(map((response) => response.body));
  }
}
