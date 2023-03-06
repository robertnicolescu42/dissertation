import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workstation } from '../../types/work-station';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class WorkstationsService {
  constructor(private http: HttpClient) {}

  getWorkstations(): Observable<Workstation[]> {
    let url = environment.getWorkstationsUrl;
    return this.http.get<Workstation[]>(url);
  }
}
