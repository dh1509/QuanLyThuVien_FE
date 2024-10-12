import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SachService} from "../../../services/SachService/sach.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TacgiaService} from "../../../services/TacGiaService/tacgia.service";
import {NgonnguService} from "../../../services/NgonNguService/ngonngu.service";
import {NhaxuatbanService} from "../../../services/NhaXuatBanService/nhaxuatban.service";
import {TheloaiService} from "../../../services/TheLoaiService/theloai.service";
import {NhaXuatBan} from "../../../models/NhaXuatBan";
import {TacGia} from "../../../models/TacGia";
import {NgonNgu} from "../../../models/NgonNgu";
import {TheLoai} from "../../../models/TheLoai";

@Component({
  selector: 'app-updatesach',
  templateUrl: './updatesach.component.html',
  styleUrls: ['./updatesach.component.css']
})
export class UpdatesachComponent implements OnInit {
  sachForm!: FormGroup;
  nxbs: NhaXuatBan[] = [];
  tacgias: TacGia[] = [];
  ngonngus: NgonNgu[] = [];
  theloais: TheLoai[] = [];
  @Input() maSach!: number;
  selectedFile: File | null = null;
  anhBiaUrl!: string;


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

  // ngOnInit(): void {
  //   this.sachForm = this.formBuilder.group({
  //     tenSach: ['', [Validators.required]],
  //     // anhBia: ['', Validators.required],
  //     tinhTrang: ['', [Validators.required]],
  //     giaBia: ['', [Validators.required]],
  //     namXuatBan: ['', [Validators.required]],
  //     maNxb: ['', [Validators.required]],
  //     maNgonNgu: ['', [Validators.required]],
  //     maTacGia: ['', [Validators.required]],
  //     maTheLoai: ['', [Validators.required]],
  //
  //   });
  //   this.route.params.subscribe(params => {
  //     this.maSach = +params['maSach'];
  //     this.sachService.getSachById(this.maSach).subscribe(
  //       (sach) => {
  //         this.sachForm.patchValue({
  //           tenSach: sach.tenSach,
  //           anhBia: sach.anhBia,
  //           tinhTrang: sach.tinhTrang,
  //           giaBia: sach.giaBia,
  //           namXuatBan: sach.namXuatBan,
  //           maNxb: sach.maNxb,
  //           maNgonNgu: sach.maNgonNgu,
  //           maTacGia: sach.maTacGia,
  //           maTheLoai: sach.maTheLoai,
  //
  //         });
  //         console.log(sach);
  //       },
  //       (error) =>{
  //         console.error('Lỗi lấy thông tin sách ', error);
  //       }
  //     );
  //   });
  //   this.loadCategories();
  //   this.loadNgonNgu();
  //   this.loadTacGia();
  //   this.loadNXB();
  // }
  // onSubmit(): void {
  //   if (this.sachForm.invalid) {
  //     return;
  //   }
  //   const sach = this.sachForm.value;
  //   console.log(sach);
  //   if (this.maSach) {
  //     this.sachService.updateSach(this.maSach, sach).subscribe(
  //       () => {
  //         this.router.navigate(['/listsach']);
  //       },
  //       (error) => {
  //         console.error('Cập nhật sách thất bại: ', error);
  //       }
  //     );
  //   }
  // }
  // onFileChange(event: any) {
  //   const file = event.target.files[0];
  //   this.sachForm.patchValue({
  //     anhBia: file
  //   });
  // }


  ngOnInit(): void {
    this.maSach = +this.route.snapshot.paramMap.get('maSach')!;
    this.sachForm = this.formBuilder.group({
      tenSach: ['', Validators.required],
      tinhTrang: ['', Validators.required],
      giaBia: ['', Validators.required],
      namXuatBan: ['', Validators.required],
      maNxb: ['', Validators.required],
      maNgonNgu: ['', Validators.required],
      maTacGia: ['', Validators.required],
      maTheLoai: ['', Validators.required],
      anhBia: [''] // Không cần validators
    });
    console.log(this.sachForm);
    this.loadSachDetails();
    this.loadNXB();
    this.loadNgonNgu();
    this.loadTacGia();
    this.loadCategories();
  }

  loadSachDetails() {
    this.sachService.getSachById(this.maSach).subscribe(
      sach => {
        this.sachForm.patchValue({
          tenSach: sach.tenSach,
          tinhTrang: sach.tinhTrang,
          giaBia: sach.giaBia,
          namXuatBan: sach.namXuatBan,
          maNxb: sach.nhaXuatBan.maNxb,
          maNgonNgu: sach.ngonNgu.maNgonNgu,
          maTacGia: sach.tacGia.maTacGia,
          maTheLoai: sach.theLoai.maTheLoai
        });
        this.anhBiaUrl = sach.anhBia; // Gán đường dẫn ảnh bìa
      },
      error => {
        console.error('Lỗi lấy thông tin sách ', error);
      }
    );
  }

  onSubmit(): void {
    if (this.sachForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('tenSach', this.sachForm.value.tenSach);
    formData.append('tinhTrang', this.sachForm.value.tinhTrang);
    formData.append('giaBia', this.sachForm.value.giaBia);
    formData.append('namXuatBan', this.sachForm.value.namXuatBan);
    formData.append('maNxb', this.sachForm.value.maNxb);
    formData.append('maNgonNgu', this.sachForm.value.maNgonNgu);
    formData.append('maTacGia', this.sachForm.value.maTacGia);
    formData.append('maTheLoai', this.sachForm.value.maTheLoai);
    if (this.sachForm.value.anhBia instanceof File) {
      formData.append('anhBia', this.sachForm.value.anhBia);
    }

    this.sachService.updateSach(this.maSach, formData).subscribe(
      () => {
        this.router.navigate(['/listsach']);
      },
      error => {
        console.error('Cập nhật sách thất bại: ', error);
      }
    );
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
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
