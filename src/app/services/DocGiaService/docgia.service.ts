import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HoaDonNhap} from "../../models/HoaDonNhap";
import {DocGia} from "../../models/DocGia";

@Injectable({
  providedIn: 'root'
})
export class DocgiaService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }
  getDocGia(): Observable<DocGia[]> {
    return this.http.get<DocGia[]>(this.apiUrl + '/listDocGia');
  }
}
