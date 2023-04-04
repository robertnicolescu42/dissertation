import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Workstation } from '../../types/work-station';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class WorkstationsService {
  constructor(private http: HttpClient) {}

  getWorkstations(): Observable<Workstation[]> {
    let url = environment.getWorkstationsUrl;
    return this.http
      .get<{ body: Workstation[] }>(url + 'workstations')
      .pipe(map((response) => response.body));
  }

  getWorkstationsByPlantIndex(plantIndex: string): Observable<Workstation[]> {
    let url =
      environment.getWorkstationsUrl + `workstations`;
    const params = new HttpParams().set('plantIndex', plantIndex);

    return this.http
      .get<{ body: Workstation[] }>(url, { params })
      .pipe(map((response) => response.body));
  }

  addWorkstation(workstation: Workstation): Observable<Workstation> {
    let url = environment.getWorkstationsUrl;
    return this.http
      .post<{ body: Workstation }>(
        url + 'workstations',
        JSON.stringify(workstation)
      )
      .pipe(map((response) => response.body));
  }
}
