import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TheloaiService} from "../../../services/TheLoaiService/theloai.service";
import {TheLoai} from "../../../models/TheLoai";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-update-the-loai',
  templateUrl: './update-the-loai.component.html',
  styleUrls: ['./update-the-loai.component.css']
})
export class UpdateTheLoaiComponent implements OnInit {
  @Input() maTheLoai!: number;
  theLoaiForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private theloaiService: TheloaiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.theLoaiForm = this.formBuilder.group({
      tenTheLoai: ['', [Validators.required]],
    });
    this.route.params.subscribe(params => {
      this.maTheLoai = +params['maTheLoai'];
      this.theloaiService.getTheLoaiById(this.maTheLoai).subscribe(
        (category) => {
          this.theLoaiForm.patchValue({
            tenTheLoai: category.tenTheLoai,
          });
        },
        (error) =>{
          console.error('Lỗi lấy thông tin thể loại ', error);
        }
      );
    });
  }
  onSubmit(): void {
    if(this.theLoaiForm.invalid){
      return;
    }
    const theloai = this.theLoaiForm.value;
    console.log(theloai);
    if(this.maTheLoai){
      this.theloaiService.updateTheLoai(this.maTheLoai, theloai).subscribe(
        () => {
          this.router.navigate(['/listtheloai']);
        },
        (error) => {
          console.error('Cập nhật thể loại thất bại: ', error);
        }
      );
    }
  }





}
