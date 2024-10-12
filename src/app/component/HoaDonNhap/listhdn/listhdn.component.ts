import { Component, OnInit } from '@angular/core';
import {HoadonnhapService} from "../../../services/HoaDonNhapService/hoadonnhap.service";
import {HoaDonNhap} from "../../../models/HoaDonNhap";

@Component({
  selector: 'app-listhdn',
  templateUrl: './listhdn.component.html',
  styleUrls: ['./listhdn.component.css']
})
export class ListhdnComponent implements OnInit {
  hdns: HoaDonNhap[] = [];
  constructor(private hoaDonNhapService: HoadonnhapService) { }

  ngOnInit(): void {
    this.loadHDN();
  }
  loadHDN(){
    this.hoaDonNhapService.getHDN().subscribe(
      (hdn) =>{
        this.hdns = hdn;
        console.log(hdn)
      },
      (error) => {
        console.error('Lỗi tải danh sách hóa đơn nhập: ', error);
      }
    );
  }

}
