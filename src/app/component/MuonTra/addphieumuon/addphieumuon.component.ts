import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DocGia} from "../../../models/DocGia";
import {NhanVien} from "../../../models/NhanVien";
import {Sach} from "../../../models/Sach";
import {MuontraService} from "../../../services/MuonTraService/muontra.service";
import {DocgiaService} from "../../../services/DocGiaService/docgia.service";
import {NhanvienService} from "../../../services/NhanVienService/nhanvien.service";
import {SachService} from "../../../services/SachService/sach.service";
import {TheloaiService} from "../../../services/TheLoaiService/theloai.service";
import {TheLoai} from "../../../models/TheLoai";
import {ActivatedRoute} from "@angular/router";
import {ChiTietSach} from "../../../models/ChiTietSach";
import {ChiTietMuonTra} from "../../../models/ChiTietMuonTra";


@Component({
  selector: 'app-addphieumuon',
  templateUrl: './addphieumuon.component.html',
  styleUrls: ['./addphieumuon.component.css']
})
export class AddphieumuonComponent implements OnInit {
  muonTraForm!: FormGroup;
  chiTietMuonTraForm!: FormGroup;
  docgias: DocGia[] = [];
  nhanviens: NhanVien[] = [];
  sachs: Sach[] = [];
  sachTL: Sach[] = [];
  ctSach: ChiTietSach[] = [];
  theloais: TheLoai[] = [];
  tenNV: string | undefined = '';
  tenDocGia: string | undefined = '';




  @Input() maTheLoai!: number;

  constructor(private formBuilder: FormBuilder,
              private muonTraService: MuontraService,
              private docGiaService: DocgiaService,
              private nhanVienService: NhanvienService,
              private sachService: SachService,
              private theLoaiService: TheloaiService,
              private route: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.muonTraForm = this.formBuilder.group({
      muonTraDTO: this.formBuilder.group({
        ngayMuon: ["", Validators.required],
        ngayTraDuKien: ["", Validators.required],
        ngayTraThucTe: ["", Validators.required],
        tongTienPhat: ["", Validators.required],
        maDocGia: ["", Validators.required],
        maNV: ["", Validators.required],
        tenNV: ["", Validators.required],
        tenDocGia: ["", Validators.required],
      }),
      chiTietMuonTraDTOList: this.formBuilder.array([])


    });


    this.loadNV();
    this.loadDocGia();
    this.loadTheLoai();

  }


  loadNV() {
    this.nhanVienService.getNV().subscribe(
      (nhanvien) => {
        this.nhanviens = nhanvien;
        console.log(nhanvien);
      }
    );
  }

  loadDocGia() {
    this.docGiaService.getDocGia().subscribe(
      (docgia) => {
        this.docgias = docgia;
        console.log(docgia);
      }
    );
  }

  loadTheLoai() {
    this.theLoaiService.getTheLoai().subscribe(
      (theloai) => {
        this.theloais = theloai;
        console.log(this.theloais);
      }
    )
  }

  get chiTietMuonTraControls() {
    return (this.muonTraForm.get('chiTietMuonTraDTOList') as FormArray).controls;

  }

  removeChiTietMuonTra(index: number) {
    (this.muonTraForm.get('chiTietMuonTraDTOList') as FormArray).removeAt(index);
  }


  addChiTietMuonTra() {
    this.loadTheLoai();
    const chiTietMuonTra = this.formBuilder.group({
      maTheLoai: ['', Validators.required],
      maSach: ['', Validators.required],
      maChiTietSach: ['', Validators.required]
    });
    (this.muonTraForm.get('chiTietMuonTraDTOList') as FormArray).push(chiTietMuonTra);
  }


  // createChiTietMuonTraFormGroup(): FormGroup {
  //   return this.formBuilder.group({
  //     maTheLoai: ['', Validators.required],
  //     maSach: ['', Validators.required],
  //     maChiTietSach: ['', Validators.required]
  //   });
  // }

  onMaNVChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedMaNV = Number(selectElement.value);
    const selectedNhanVien = this.nhanviens.find(nv => nv.maNV === selectedMaNV);
    this.tenNV = selectedNhanVien ? selectedNhanVien.tenNV : '';
  }

  onMaDocGiaChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedMaDocGia = Number(selectElement.value);
    const selectedDocGia = this.docgias.find(docgia => docgia.maDocGia === selectedMaDocGia);
    this.tenDocGia = selectedDocGia ? selectedDocGia.tenDocGia : '';
  }

  onTheLoaiChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedMaTheLoai = Number(selectElement.value);


    // Gọi hàm để lấy danh sách sách dựa trên mã độc giả
    this.sachService.getSachByTheLoai(selectedMaTheLoai).subscribe(
      (sachList: Sach[]) => {
        // Xử lý kết quả trả về, ở đây ta chỉ lưu danh sách sách vào một biến
        this.sachTL = sachList;
        console.log(this.sachTL);
      },
      (error) => {
        // Xử lý lỗi nếu có
        console.error('Error fetching sách:', error);
      }
    );


  }




  onSachChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedMaSach = Number(selectElement.value);

    // Gọi hàm để lấy danh sách sách dựa trên mã độc giả
    this.sachService.getCTSachBySach(selectedMaSach).subscribe(
      (ctSachList: ChiTietSach[]) => {
        // Xử lý kết quả trả về, ở đây ta chỉ lưu danh sách sách vào một biến
        this.ctSach = ctSachList;
        console.log(this.ctSach);
      },
      (error) => {
        // Xử lý lỗi nếu có
        console.error('Error fetching sách:', error);
      }
    );

  }


  addPhieuMuonVaChiTiet(){
    if(this.muonTraForm.valid){
      return;
    }
    const muontra = this.muonTraForm.value;
    console.log(muontra);
    this.muonTraService.addPhieuMuon(muontra).subscribe(
      response =>{

        this.muonTraForm.reset();
    },
      error => {
        console.error('Mượn thất bại: ', error);
      }
    );
  }




}
