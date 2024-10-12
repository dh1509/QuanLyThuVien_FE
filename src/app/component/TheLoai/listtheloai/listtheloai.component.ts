import { Component, OnInit } from '@angular/core';
import {TheloaiService} from "../../../services/TheLoaiService/theloai.service";
import {TheLoai} from "../../../models/TheLoai";
import {UpdateTheLoaiComponent} from "../update-the-loai/update-the-loai.component";

@Component({
  selector: 'app-listtheloai',
  templateUrl: './listtheloai.component.html',
  styleUrls: ['./listtheloai.component.css']
})
export class ListtheloaiComponent implements OnInit {
  theloais: TheLoai[] = [];
  constructor(private theloaiService: TheloaiService) { }

  ngOnInit(): void {
    this.loadCategories();

  }
  loadCategories() {
    this.theloaiService.getTheLoai().subscribe(
      (theloai) => {
        this.theloais = theloai;
        console.log(theloai);
      },
      (error) => {
        console.error('Lỗi khi tải danh sách thể loại:', error);
      }
    );
  }
  deleteTheLoai(maTheLoai: number) {
    if (confirm('Bạn có chắc chắn muốn xóa thể loại này không?')) {
      this.theloaiService.deleteTheLoai(maTheLoai).subscribe(
        () => {
          // Xóa phần tử khỏi danh sách
          // this.theloais = this.theloais.filter(theloai => theloai.maTheLoai !== maTheLoai)
          this.loadCategories();
          alert('Xóa thể loại thành công!')

        },
        (error) => {
          console.error('Lỗi khi xóa thể loại:', error);
        }
      );
    }
  }


}
