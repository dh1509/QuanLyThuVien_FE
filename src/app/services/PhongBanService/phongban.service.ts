import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NhaXuatBan} from "../../models/NhaXuatBan";
import {PhongBan} from "../../models/PhongBan";

@Injectable({
  providedIn: 'root'
})
export class PhongbanService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getPhongBan(): Observable<PhongBan[]> {
    return this.http.get<PhongBan[]>(`${this.apiUrl}/listPhongBan`);
  }
}
