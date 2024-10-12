import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NhanVien} from "../../models/NhanVien";

@Injectable({
  providedIn: 'root'
})
export class NhanvienService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getNV(): Observable<NhanVien[]> {
    return this.http.get<NhanVien[]>(`${this.apiUrl}/listNhanVien`);
  }

  addNV(nhanVien: NhanVien): Observable<NhanVien> {
    return this.http.post(this.apiUrl + '/addNV', nhanVien);
  }
  getNhanVienById(maNV: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/findByMaNV/${maNV}`)
  }

  updateNhanVien(maNV: number, nhanvien: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateNhanVien/${maNV}`, nhanvien);
  }
}
