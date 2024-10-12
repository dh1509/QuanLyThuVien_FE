import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HoadonnhapService} from "../../../services/HoaDonNhapService/hoadonnhap.service";
import {NhanvienService} from "../../../services/NhanVienService/nhanvien.service";
import {NhacungcapService} from "../../../services/NhaCungCapService/nhacungcap.service";
import {NhaCungCap} from "../../../models/NhaCungCap";
import {NhanVien} from "../../../models/NhanVien";
import {SachService} from "../../../services/SachService/sach.service";
import {Sach} from "../../../models/Sach";

@Component({
  selector: 'app-addhoadonnhap',
  templateUrl: './addhoadonnhap.component.html',
  styleUrls: ['./addhoadonnhap.component.css']
})
export class AddhoadonnhapComponent implements OnInit {
  hoaDonNhapForm!: FormGroup;
  nccs: NhaCungCap[] = [];
  nhanviens: NhanVien[] = [];
  sachs: Sach[] = [];
  findNV: NhanVien[] = [];
  tenNV: string | undefined = '';
  constructor(private formBuilder: FormBuilder,
              private hoaDonNhapService: HoadonnhapService,
              private nhanVienService: NhanvienService,
              private nhaCungCapService: NhacungcapService,
              private sachService: SachService) {

  }

  ngOnInit(): void {
    this.hoaDonNhapForm = this.formBuilder.group({
      hoaDonNhapDTO: this.formBuilder.group({
        maNV: ["", Validators.required],
        tenNV: ["", Validators.required],
        maNcc: ["", Validators.required],
        tongTien: ['', Validators.required]
      }),
      chiTietHDNDTOList: this.formBuilder.array([])

    });
    this.loadNCC();
    this.loadNV();
    this.loadSach();

  }

  loadNCC() {
    this.nhaCungCapService.getNCC().subscribe(
      (ncc) => {
        this.nccs = ncc;
        console.log(ncc);
      }
    );
  }

  loadNV() {
    this.nhanVienService.getNV().subscribe(
      (nhanvien) => {
        this.nhanviens = nhanvien;
        console.log(nhanvien);
      }
    );
  }

  loadSach() {
    this.sachService.getSach().subscribe(
      (sach) => {
        this.sachs = sach;
        console.log(sach);
      }
    );
  }
  findNVById(maNV: any){
    this.nhanVienService.getNhanVienById(maNV).subscribe(
      (nhanvien) =>{
        this.findNV = nhanvien;
      }
    )
  }

  get chiTietHDNControls() {
    return (this.hoaDonNhapForm.get('chiTietHDNDTOList') as FormArray).controls;
  }

  removeChiTietHDN(index: number) {
    (this.hoaDonNhapForm.get('chiTietHDNDTOList') as FormArray).removeAt(index);
  }

  addChiTietHDN() {
    const chiTietHDN = this.formBuilder.group({
      maSach: ['', Validators.required],
      soLuong: ['', Validators.required]
    });

    (this.hoaDonNhapForm.get('chiTietHDNDTOList') as FormArray).push(chiTietHDN);
  }

  addHoaDonNhapAndChiTietHDN() {
    if (this.hoaDonNhapForm.valid) {
      return;
    }
    const hoadonnhap = this.hoaDonNhapForm.value;
    console.log(hoadonnhap);
    this.hoaDonNhapService.addHoaDonNhap(hoadonnhap).subscribe(
      response => {
        // Xử lý kết quả trả về từ backend sau khi thêm thành công
        this.hoaDonNhapForm.reset();
      },
      error => {
        // Xử lý lỗi khi có lỗi xảy ra trong quá trình thêm
        console.error('Nhập thất bại: ', error);
      }
    );

  }
  onMaNVChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedMaNV = Number(selectElement.value);
    const selectedNhanVien = this.nhanviens.find(nv => nv.maNV === selectedMaNV);
    this.tenNV = selectedNhanVien ? selectedNhanVien.tenNV : '';
  }


}
