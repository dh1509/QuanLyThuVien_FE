import { Component, OnInit } from '@angular/core';
import {TheloaiService} from "../../../services/TheLoaiService/theloai.service";
import {SachService} from "../../../services/SachService/sach.service";
import {TheLoai} from "../../../models/TheLoai";
import {Sach} from "../../../models/Sach";
import {NhaXuatBan} from "../../../models/NhaXuatBan";

@Component({
  selector: 'app-listsach',
  templateUrl: './listsach.component.html',
  styleUrls: ['./listsach.component.css']
})
export class ListsachComponent implements OnInit {
  sachs: Sach[] = [];
  constructor(
    private sachService: SachService,
  ) { }

  ngOnInit(): void {
    this.loadSach();
  }
  loadSach() {
    this.sachService.getSach().subscribe(
      (sach) => {
        this.sachs = sach;
        console.log(sach);
      },
      (error) => {
        console.error('Lỗi khi tải danh sách sách:', error);
      }

    );

  }


}
