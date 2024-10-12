import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NgonNgu} from "../../models/NgonNgu";

@Injectable({
  providedIn: 'root'
})
export class NgonnguService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getNgonNgu(): Observable<NgonNgu[]> {
    return this.http.get<NgonNgu[]>(`${this.apiUrl}/listNgonNgu`);
  }
}
