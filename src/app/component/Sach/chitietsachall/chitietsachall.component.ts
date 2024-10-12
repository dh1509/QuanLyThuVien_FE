import { Component, OnInit } from '@angular/core';
import {Sach} from "../../../models/Sach";
import {SachService} from "../../../services/SachService/sach.service";
import {ChiTietSach} from "../../../models/ChiTietSach";

@Component({
  selector: 'app-chitietsachall',
  templateUrl: './chitietsachall.component.html',
  styleUrls: ['./chitietsachall.component.css']
})
export class ChitietsachallComponent implements OnInit {
  ctsachs: ChiTietSach[] = [];
  constructor(
    private sachService: SachService,
  ) { }

  ngOnInit(): void {
    this.loadSach();
  }
  loadSach() {
    this.sachService.getCTSachAll().subscribe(
      (ctsach) => {
        this.ctsachs = ctsach;
        console.log(ctsach);
      },
      (error) => {
        console.error('Lỗi khi tải danh sách chi tiết sách:', error);
      }

    );

  }

}
