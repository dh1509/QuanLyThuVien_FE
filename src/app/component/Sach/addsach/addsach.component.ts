import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SachService} from "../../../services/SachService/sach.service";
import {TacgiaService} from "../../../services/TacGiaService/tacgia.service";
import {NgonnguService} from "../../../services/NgonNguService/ngonngu.service";
import {NhaxuatbanService} from "../../../services/NhaXuatBanService/nhaxuatban.service";
import {TheLoai} from "../../../models/TheLoai";
import {NhaXuatBan} from "../../../models/NhaXuatBan";
import {TacGia} from "../../../models/TacGia";
import {NgonNgu} from "../../../models/NgonNgu";
import {TheloaiService} from "../../../services/TheLoaiService/theloai.service";

@Component({
  selector: 'app-addsach',
  templateUrl: './addsach.component.html',
  styleUrls: ['./addsach.component.css']
})
export class AddsachComponent implements OnInit {
  sachForm!: FormGroup;
  nxbs: NhaXuatBan[] = [];
  tacgias: TacGia[] = [];
  ngonngus: NgonNgu[] = [];
  theloais: TheLoai[] = [];

  anhBiaUrl!: string;
  selectedFile: File | null = null;
  constructor(
    private formBuilder: FormBuilder,
    private sachService: SachService,
    private route: ActivatedRoute,
    private router: Router,
    private tacGiaService: TacgiaService,
    private ngonNguService: NgonnguService,
    private nhaXuatBanService: NhaxuatbanService,
    private theLoaiService: TheloaiService
  ) { }

  ngOnInit(): void {
    this.sachForm = this.formBuilder.group({
      tenSach: ['', [Validators.required]],
      // anhBia: ['', Validators.required],
      tinhTrang: ['', [Validators.required]],
      giaBia: ['', [Validators.required]],
      namXuatBan: ['', [Validators.required]],
      maNxb: ['', [Validators.required]],
      maNgonNgu: ['', [Validators.required]],
      maTacGia: ['', [Validators.required]],
      maTheLoai: ['', [Validators.required]],

    });


    this.loadCategories();
    this.loadNgonNgu();
    this.loadTacGia();
    this.loadNXB();
  }


  // onSubmit(): void {
  //   if(this.sachForm.invalid){
  //     return;
  //   }
  //   const sach = this.sachForm.value;
  //   console.log(sach);
  //     this.sachService.addSach(sach).subscribe(
  //       () => {
  //         this.sachForm.reset();
  //         this.router.navigate(['/listsach']);
  //       },
  //       (error) => {
  //         console.error('Thêm sách thất bại: ', error);
  //       }
  //     );
  // }
  addSach() {
    if (!this.sachForm.valid || !this.selectedFile) {
      console.error('Vui lòng điền đầy đủ thông tin và chọn ảnh bìa sách');
      return;
    }

    const formData = new FormData();
    formData.append('tenSach', this.sachForm.value.tenSach);
    formData.append('anhBia', this.selectedFile);
    formData.append('tinhTrang', this.sachForm.value.tinhTrang);
    formData.append('giaBia', this.sachForm.value.giaBia);
    formData.append('namXuatBan', this.sachForm.value.namXuatBan);
    formData.append('maNxb', this.sachForm.value.maNxb);
    formData.append('maNgonNgu', this.sachForm.value.maNgonNgu);
    formData.append('maTacGia', this.sachForm.value.maTacGia);
    formData.append('maTheLoai', this.sachForm.value.maTheLoai);

    this.sachService.addSach(formData).subscribe(
      response => {
        console.log('Sách đã được thêm thành công:', response);
        // Xử lý khi thêm sách thành công
        this.sachForm.reset();

        this.router.navigate(['/listsach']);
      },
      error => {
        console.error('Lỗi khi thêm sách:', error);
        // Xử lý khi có lỗi xảy ra khi thêm sách
      }
    );
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.sachForm.patchValue({
        anhBia: file
      });
      // Hiển thị ảnh bìa người dùng vừa chọn
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.anhBiaUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }


  loadNXB() {
    this.nhaXuatBanService.getNxb().subscribe(
      (nxb) => {
        this.nxbs = nxb;
        console.log(nxb);
      },
      (error) => {
        console.error('Lỗi khi tải danh sách nhà xuất bản:', error);
      }
    );
  }

  loadCategories() {
    this.theLoaiService.getTheLoai().subscribe(
      (theloai) => {
        this.theloais = theloai;
        console.log(theloai);
      },
      (error) => {
        console.error('Lỗi khi tải danh sách thể loại:', error);
      }
    );
  }
  loadTacGia() {
    this.tacGiaService.getTacGia().subscribe(
      (tacgia) => {
        this.tacgias = tacgia;
        console.log(tacgia);
      },
      (error) => {
        console.error('Lỗi khi tải danh sách tác giả:', error);
      }
    );
  }
  loadNgonNgu() {
    this.ngonNguService.getNgonNgu().subscribe(
      (ngonngu) => {
        this.ngonngus = ngonngu;
        console.log(ngonngu);
      },
      (error) => {
        console.error('Lỗi khi tải danh sách ngôn ngữ:', error);
      }
    );
  }


}
