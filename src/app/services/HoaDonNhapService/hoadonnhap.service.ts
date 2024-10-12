import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sach} from "../../models/Sach";
import {HoaDonNhap} from "../../models/HoaDonNhap";
import {ChiTietHDN} from "../../models/ChiTietHDN";


@Injectable({
  providedIn: 'root'
})
export class HoadonnhapService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addHoaDonNhap(hoadonnhap: any): Observable<any> {
    return this.http.post(this.apiUrl + '/addhoadonnhap', hoadonnhap);
  }
  getHDN(): Observable<HoaDonNhap[]> {
    return this.http.get<HoaDonNhap[]>(this.apiUrl + '/listHDN');
  }
  getCTHDN(): Observable<ChiTietHDN[]> {
    return this.http.get<ChiTietHDN[]>(this.apiUrl + '/listCTHDN');
  }
  getCTHDNById(maHDN: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listCTHDN/${maHDN}`)
  }
}
