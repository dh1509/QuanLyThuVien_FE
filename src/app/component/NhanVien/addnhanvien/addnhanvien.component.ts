import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhongBan} from "../../../models/PhongBan";
import {VaiTro} from "../../../models/VaiTro";
import {SachService} from "../../../services/SachService/sach.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TacgiaService} from "../../../services/TacGiaService/tacgia.service";
import {NgonnguService} from "../../../services/NgonNguService/ngonngu.service";
import {NhaxuatbanService} from "../../../services/NhaXuatBanService/nhaxuatban.service";
import {TheloaiService} from "../../../services/TheLoaiService/theloai.service";
import {PhongbanService} from "../../../services/PhongBanService/phongban.service";
import {VaitroService} from "../../../services/VaiTroService/vaitro.service";
import {NhanvienService} from "../../../services/NhanVienService/nhanvien.service";

@Component({
  selector: 'app-addnhanvien',
  templateUrl: './addnhanvien.component.html',
  styleUrls: ['./addnhanvien.component.css']
})
export class AddnhanvienComponent implements OnInit {
  nhanvienForm!: FormGroup;
  phongbans: PhongBan[] = [];
  vaitros: VaiTro[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private nhanVienService: NhanvienService,
    private route: ActivatedRoute,
    private router: Router,
    private phongBanService: PhongbanService,
    private vaiTroService: VaitroService
  ) { }

  ngOnInit(): void {
    this.nhanvienForm = this.formBuilder.group({
      maNV: ['', [Validators.required]],
      tenNV: ['', Validators.required],
      gioiTinh: ['', [Validators.required]],
      soDienThoai: ['', [Validators.required]],
      namSinh: ['', [Validators.required]],
      email: ['', [Validators.required]],
      trangThaiHoatDong: ['', [Validators.required]],
      maPhongBan: ['', [Validators.required]],
      maVaiTro: ['', [Validators.required]],

    });
    this.loadPhongBan();
    this.loadVaiTro();
  }
  onSubmit(): void {
    if(this.nhanvienForm.invalid){
      return;
    }
    const nhanvien = this.nhanvienForm.value;
    console.log(nhanvien);
    this.nhanVienService.addNV(nhanvien).subscribe(
      () => {
        this.nhanvienForm.reset();
        this.router.navigate(['/listNhanVien']);
      },
      (error) => {
        console.error('Thêm nhân viên thất bại: ', error);
      }
    );
  }
  loadPhongBan() {
    this.phongBanService.getPhongBan().subscribe(
      (phongban) => {
        this.phongbans = phongban;
        console.log(phongban);
      },
      (error) => {
        console.error('Lỗi khi tải danh sách phòng ban:', error);
      }
    );
  }
  loadVaiTro() {
    this.vaiTroService.getVaiTro().subscribe(
      (vaitro) => {
        this.vaitros = vaitro;
        console.log(vaitro);
      },
      (error) => {
        console.error('Lỗi khi tải danh sách vai trò: ', error);
      }
    );
  }

}
