import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NhanvienService} from "../../../services/NhanVienService/nhanvien.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PhongbanService} from "../../../services/PhongBanService/phongban.service";
import {VaitroService} from "../../../services/VaiTroService/vaitro.service";
import {PhongBan} from "../../../models/PhongBan";
import {VaiTro} from "../../../models/VaiTro";

@Component({
  selector: 'app-updatenhanvien',
  templateUrl: './updatenhanvien.component.html',
  styleUrls: ['./updatenhanvien.component.css']
})
export class UpdatenhanvienComponent implements OnInit {
  nhanvienForm!: FormGroup;
  phongbans: PhongBan[] = [];
  vaitros: VaiTro[] = [];
  @Input() maNV?: number;
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
    this.route.params.subscribe(params => {
      this.maNV = +params['maNV'];
      this.nhanVienService.getNhanVienById(this.maNV).subscribe(
        (nhanvien) => {
          this.nhanvienForm.patchValue({
            maNV: nhanvien.maNV,
            tenNV: nhanvien.tenNV,
            gioiTinh: nhanvien.gioiTinh,
            soDienThoai: nhanvien.soDienThoai,
            namSinh: nhanvien.namSinh,
            email: nhanvien.email,
            trangThaiHoatDong: nhanvien.trangThaiHoatDong,
            maPhongBan: nhanvien.maPhongBan,
            maVaiTro: nhanvien.maVaiTro,


          });
          console.log(nhanvien);
        },
        (error) =>{
          console.error('Lỗi lấy thông tin nhân viên: ', error);
        }
      );
      this.loadPhongBan();
      this.loadVaiTro();
    });
  }
  onSubmit(): void {
    if (this.nhanvienForm.invalid) {
      return;
    }
    const nhanvien = this.nhanvienForm.value;
    console.log(nhanvien);
    if (this.maNV) {
      this.nhanVienService.updateNhanVien(this.maNV, nhanvien).subscribe(
        () => {
          this.router.navigate(['/listNhanVien']);
        },
        (error) => {
          console.error('Cập nhật nhân viên thất bại: ', error);
        }
      );
    }
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
