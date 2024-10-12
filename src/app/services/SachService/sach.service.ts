import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sach} from "../../models/Sach";
import {ChiTietSach} from "../../models/ChiTietSach";


@Injectable({
  providedIn: 'root'
})
export class SachService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getSach(): Observable<Sach[]> {
    return this.http.get<Sach[]>(this.apiUrl + '/listSach');
  }
  getCTSach(): Observable<ChiTietSach[]> {
    return this.http.get<ChiTietSach[]>(this.apiUrl + '/listCTSach');
  }

  // addSach(sach: Sach): Observable<Sach> {
  //   return this.http.post(this.apiUrl + '/addSach', sach);
  // }
  addSach(sachData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/addSach', sachData);
  }

  updateSach(maSach: number, sach: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateSach/${maSach}`, sach);
  }
  getSachById(maSach: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/findByMaSach/${maSach}`)
  }

  getCTSachById(maSach: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listCTSach/${maSach}`)
  }

  getCTSachAll(): Observable<ChiTietSach[]> {
    return this.http.get<ChiTietSach[]>(this.apiUrl + '/listChiTietSach');
  }
  getSachByTheLoai(maTheLoai: number|undefined): Observable<Sach[]>{
    return this.http.get<Sach[]>(`${this.apiUrl}/listsachbytheloai/${maTheLoai}`)
  }
  getCTSachBySach(maSach: number| undefined): Observable<ChiTietSach[]>{
    return this.http.get<ChiTietSach[]>(`${this.apiUrl}/listctsachbysach/${maSach}`)
  }


}
