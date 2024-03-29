import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Workstation } from '../../types/work-station';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class WorkstationsService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getWorkstations(): Observable<Workstation[]> {
    let url = environment.baseUrl;
    return this.http
      .get<{ body: Workstation[] }>(url + 'workstations')
      .pipe(map((response) => response.body));
  }

  getWorkstationsByPlantIndex(plantIndex: string): Observable<Workstation[]> {
    let url = environment.baseUrl + 'plants/' + plantIndex + '/workstations';

    return this.http.get<Workstation[]>(url).pipe(map((response) => response));
  }

  addWorkstation(workstation: Workstation): Observable<Workstation> {
    let url = environment.baseUrl;
    return this.http
      .post<{ body: Workstation }>(
        url + 'workstations',
        JSON.stringify(workstation)
      )
      .pipe(
        map((response) => {
          this.toastr.success('Workstation successfully added.');
          return response.body;
        })
      );
  }

  updateWorkstation(workstation: Workstation): Observable<Workstation> {
    let url =
      environment.baseUrl +
      'plants/' +
      workstation.plantIndex +
      '/' +
      workstation.stationId;
    return this.http
      .put<{ body: Workstation }>(url, JSON.stringify(workstation))
      .pipe(
        map((response) => {
          this.toastr.success('Workstation successfully updated.');
          return response.body;
        })
      );
  }

  deleteWorkstation(plantIndex: string, stationId: string): any {
    let url =
      environment.baseUrl +
      'plants/' +
      plantIndex +
      '/' +
      stationId +
      '/delete';

    return this.http.get(url).pipe(
      map((response) => {
        this.toastr.success('Workstation successfully deleted.');
        return response;
      })
    );
  }
}
