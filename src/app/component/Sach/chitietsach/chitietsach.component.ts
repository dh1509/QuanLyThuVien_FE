import {Component, Input, OnInit} from '@angular/core';
import {ChiTietHDN} from "../../../models/ChiTietHDN";
import {HoadonnhapService} from "../../../services/HoaDonNhapService/hoadonnhap.service";
import {ActivatedRoute} from "@angular/router";
import {ChiTietSach} from "../../../models/ChiTietSach";
import {SachService} from "../../../services/SachService/sach.service";

@Component({
  selector: 'app-chitietsach',
  templateUrl: './chitietsach.component.html',
  styleUrls: ['./chitietsach.component.css']
})
export class ChitietsachComponent implements OnInit {
  ctsachs: ChiTietSach[] = [];
  @Input() maSach!: number;
  constructor(private sachService: SachService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.loadCTHDN();
  }
  loadCTHDN(){
    this.maSach = +this.route.snapshot.paramMap.get('maSach')!;
    this.sachService.getCTSachById(this.maSach).subscribe(
      (ctsach) =>{
        this.ctsachs = ctsach;
        console.log(ctsach)
      },
      (error) => {
        console.error('Lỗi tải danh sách chi tiết sách: ', error);
      }
    );
  }
}
