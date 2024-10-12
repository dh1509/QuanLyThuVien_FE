import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TacGia} from "../../models/TacGia";

@Injectable({
  providedIn: 'root'
})
export class TacgiaService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getTacGia(): Observable<TacGia[]> {
    return this.http.get<TacGia[]>(`${this.apiUrl}/listTacGia`);
  }
}
