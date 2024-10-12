import { Component, OnInit } from '@angular/core';
import {HoaDonNhap} from "../../../models/HoaDonNhap";
import {HoadonnhapService} from "../../../services/HoaDonNhapService/hoadonnhap.service";
import {MuonTra} from "../../../models/MuonTra";
import {MuontraService} from "../../../services/MuonTraService/muontra.service";

@Component({
  selector: 'app-listphieumuon',
  templateUrl: './listphieumuon.component.html',
  styleUrls: ['./listphieumuon.component.css']
})
export class ListphieumuonComponent implements OnInit {
  muontras: MuonTra[] = [];
  constructor(private muonTraService: MuontraService) { }

  ngOnInit(): void {
    this.loadMuonTra();
  }
  loadMuonTra(){
    this.muonTraService.getMuonTra().subscribe(
      (muontra) =>{
        this.muontras = muontra;
        console.log(muontra)
      },
      (error) => {
        console.error('Lỗi tải danh sách mượn trả: ', error);
      }
    );
  }

}
