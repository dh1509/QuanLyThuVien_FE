import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {NgonNgu} from "../../models/NgonNgu";
import {HttpClient} from "@angular/common/http";
import {NhaCungCap} from "../../models/NhaCungCap";

@Injectable({
  providedIn: 'root'
})
export class NhacungcapService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }
  getNCC(): Observable<NhaCungCap[]> {
    return this.http.get<NhaCungCap[]>(`${this.apiUrl}/listNCC`);
  }
}
