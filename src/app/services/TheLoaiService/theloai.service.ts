import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TheLoai} from "../../models/TheLoai";

@Injectable({
  providedIn: 'root'
})
export class TheloaiService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getTheLoai(): Observable<TheLoai[]> {
    return this.http.get<TheLoai[]>(this.apiUrl + '/listTheLoai');
  }
  addTheLoai(theLoai: TheLoai): Observable<TheLoai> {
    return this.http.post(this.apiUrl + '/addTheLoai', theLoai);
  }
  getTheLoaiById(maTheLoai: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/findById/${maTheLoai}`)
  }
  updateTheLoai(maTheLoai: number, theLoai: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateTheLoai/${maTheLoai}`, theLoai);
  }
  deleteTheLoai(maTheLoai: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteTheLoai/${maTheLoai}`)
  }
  checkTenTheLoaiDaTonTai(tenTheLoai: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/existsTenTL/${tenTheLoai}`);
  }

}
