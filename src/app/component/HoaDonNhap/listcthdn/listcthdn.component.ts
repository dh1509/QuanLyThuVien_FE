import {Component, Input, OnInit} from '@angular/core';
import {HoaDonNhap} from "../../../models/HoaDonNhap";
import {HoadonnhapService} from "../../../services/HoaDonNhapService/hoadonnhap.service";
import {ChiTietHDN} from "../../../models/ChiTietHDN";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-listcthdn',
  templateUrl: './listcthdn.component.html',
  styleUrls: ['./listcthdn.component.css']
})
export class ListcthdnComponent implements OnInit {
  cthdns: ChiTietHDN[] = [];
  @Input() maHDN!: number;
  constructor(private hoaDonNhapService: HoadonnhapService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCTHDN();
  }
  loadCTHDN(){
    this.maHDN = +this.route.snapshot.paramMap.get('maHDN')!;
    this.hoaDonNhapService.getCTHDNById(this.maHDN).subscribe(
      (cthdn) =>{
        this.cthdns = cthdn;
        console.log(cthdn);
      },
      (error) => {
        console.error('Lỗi tải danh sách chi tiết hóa đơn nhập: ', error);
      }
    );
  }

}
