import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VaiTro} from "../../models/VaiTro";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VaitroService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getVaiTro(): Observable<VaiTro[]> {
    return this.http.get<VaiTro[]>(`${this.apiUrl}/listVaiTro`);
  }
}
