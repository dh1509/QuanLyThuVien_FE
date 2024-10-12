import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NhaXuatBan} from "../../models/NhaXuatBan";

@Injectable({
  providedIn: 'root'
})
export class NhaxuatbanService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getNxb(): Observable<NhaXuatBan[]> {
    return this.http.get<NhaXuatBan[]>(`${this.apiUrl}/listNXB`);
  }
}
