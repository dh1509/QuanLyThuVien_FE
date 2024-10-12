import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChiTietMuonTra} from "../../../models/ChiTietMuonTra";
import {MuontraService} from "../../../services/MuonTraService/muontra.service";
import {MuonTra} from "../../../models/MuonTra";

@Component({
  selector: 'app-listctphieumuon',
  templateUrl: './listctphieumuon.component.html',
  styleUrls: ['./listctphieumuon.component.css']
})
export class ListctphieumuonComponent implements OnInit {
  ctphieumuons: ChiTietMuonTra[] = [];
  @Input() maMuonTra!: number;
  updatedMaCTMuonTra: number | undefined;
  count!: number;
  updatedChiTietCount: number = 0;
  constructor(private muonTraService: MuontraService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.loadCTMuonTra();
  }
  loadCTMuonTra(){
    this.maMuonTra = +this.route.snapshot.paramMap.get('maMuonTra')!;
    // this.updatedChiTietCount = this.muonTraService.countMuonTra(this.maMuonTra);
    this.muonTraService.countChiTietMuonTra(this.maMuonTra).subscribe(
      (count: number) => {
        this.count = count;
        this.updatedChiTietCount = this.count;
        // Gọi hàm kiểm tra và cập nhật phiếu mượn trả tại đây nếu cần
        console.log(count);
      },

      (error) => {
        console.error('Có lỗi xảy ra khi lấy số lượng mượn trả:', error);
        // Xử lý lỗi nếu có
      }
    );

    this.muonTraService.getCTMuonTraById(this.maMuonTra).subscribe(
      (ctphieumuon) =>{
        this.ctphieumuons = ctphieumuon;
        console.log(ctphieumuon);
      },
      (error) => {
        console.error('Lỗi tải danh sách chi tiết mượn trả: ', error);
      }
    );
  }



  updateChiTiet(maCTMuonTra: number|undefined): void {

    console.log(this.maMuonTra);
    this.muonTraService.updateCTMuonTra(maCTMuonTra).subscribe(
      (updatedChiTiet: ChiTietMuonTra) => {
        console.log('Chi tiết mượn trả đã được cập nhật:', updatedChiTiet);
        this.loadCTMuonTra();
        this.checkAndUpdatePhieuMuon();
        console.log(this.updatedChiTietCount);
      },

      (error) => {
        console.error('Có lỗi xảy ra khi cập nhật chi tiết mượn trả:', error);
        // Xử lý lỗi nếu có
      }
    );
  }


  checkAndUpdatePhieuMuon(): void {

    // Tăng biến trạng thái
    this.updatedChiTietCount--;

    // Kiểm tra nếu tất cả các chi tiết đã được cập nhật
    if (this.updatedChiTietCount === 0) {
      this.updatePhieuMuon(this.maMuonTra);
    }
    console.log(this.maMuonTra);
    console.log(this.updatedChiTietCount);

  }
  updatePhieuMuon(maMuonTra: number|undefined): void {
    this.muonTraService.updateMuonTra(maMuonTra).subscribe(
      (updatePhieuMuon: MuonTra) => {
        console.log('Phiếu mượn trả đã được cập nhật:', updatePhieuMuon);
        // Xử lý kết quả trả về
      },
      (error) => {
        console.error('Có lỗi xảy ra khi cập nhật phiếu mượn trả:', error);
        // Xử lý lỗi nếu có
      }
    );
  }

}
