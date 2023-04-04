import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Plant } from '../../types/plant';

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

  
  // addWorkstation(workstation: Workstation): Observable<Workstation> {
  //   let url = environment.getWorkstationsUrl;
  //   return this.http
  //     .post<{ body: Workstation }>(
  //       url + 'workstations',
  //       JSON.stringify(workstation)
  //     )
  //     .pipe(map((response) => response.body));
  // }

  addPlant(plant: Plant) {
    let url = environment.getWorkstationsUrl + 'plants';
    return this.http
      .post<{ body: Plant }>(url, JSON.stringify(plant))
      .pipe(map((response) => response.body));
  }
}
