import { Component, OnInit } from '@angular/core';
import {NhanVien} from "../../../models/NhanVien";
import {NhanvienService} from "../../../services/NhanVienService/nhanvien.service";

@Component({
  selector: 'app-listnhanvien',
  templateUrl: './listnhanvien.component.html',
  styleUrls: ['./listnhanvien.component.css']
})
export class ListnhanvienComponent implements OnInit {
  nhanviens: NhanVien[] = [];
  constructor(
    private nhanVienService: NhanvienService
  ) { }

  ngOnInit(): void {
    this.loadNV();
  }

  loadNV(){
    this.nhanVienService.getNV().subscribe(
      (nhanvien) =>{
        this.nhanviens = nhanvien;
        console.log(nhanvien)
      },
      (error) => {
        console.error('Lỗi tải danh sách nhân viên: ', error);
      }
    );
  }

}
