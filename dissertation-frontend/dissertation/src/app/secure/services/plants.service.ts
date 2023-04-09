import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Plant } from '../../types/plant';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getPlants(): Observable<any> {
    let url = environment.baseUrl + 'plants';
    return this.http
      .get<{ body: any[] }>(url)
      .pipe(map((response) => response.body));
  }

  addPlant(plant: Plant) {
    let url = environment.baseUrl + 'plants';
    return this.http.post<{ body: Plant }>(url, JSON.stringify(plant)).pipe(
      map((response) => {
        this.toastr.success('Plant successfully added.');
        return response.body;
      })
    );
  }

  editPlant(plant: Plant) {
    let url = environment.baseUrl + 'plants';
    return this.http.put<{ body: Plant }>(url, JSON.stringify(plant)).pipe(
      map((response) => {
        this.toastr.success('Plant successfully edited.');
        return response.body;
      })
    );
  }

  deletePlant(plantIndex: string): Observable<any> {
    let url =
      environment.baseUrl + 'plants/' + plantIndex + '/delete';

    return this.http.get(url).pipe(
      map((response) => {
        this.toastr.success('Plant successfully deleted.');
        return response;
      })
    );
  }
}
