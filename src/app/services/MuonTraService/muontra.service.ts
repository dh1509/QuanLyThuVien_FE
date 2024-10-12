import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChiTietHDN} from "../../models/ChiTietHDN";
import {MuonTra} from "../../models/MuonTra";

@Injectable({
  providedIn: 'root'
})
export class MuontraService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  addPhieuMuon(phieumuon: any): Observable<any> {
    return this.http.post(this.apiUrl + '/addphieumuon', phieumuon);
  }
  getMuonTra(): Observable<MuonTra[]> {
    return this.http.get<MuonTra[]>(this.apiUrl + '/listMuonTra');
  }
  getCTMuonTraById(maMuonTra: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/listctMuonTra/${maMuonTra}`);
  }
  updateCTMuonTra(maCTMuonTra: number | undefined): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateCTMuonTra/${maCTMuonTra}`,{});
  }
  updateMuonTra(maMuonTra: number | undefined): Observable<any> {
    return this.http.put(`${this.apiUrl}/updatePhieuMuon/${maMuonTra}`,{});
  }
  // countMuonTra(maMuonTra: number | undefined): Observable<any>{
  //   return this.http.get(`${this.apiUrl}/countMuonTra/${maMuonTra}`);
  // }
  countChiTietMuonTra(maMuonTra: number): Observable<number> {
    const params = new HttpParams().set('maMuonTra', maMuonTra.toString());
    return this.http.get<number>(`${this.apiUrl}/countChiTietMuonTra`, { params });
  }
}
