import { Component, OnInit } from '@angular/core';
import {TheloaiService} from "../../../services/TheLoaiService/theloai.service";
import {TheLoai} from "../../../models/TheLoai";
import {Router} from "@angular/router";


@Component({
  selector: 'app-addtheloai',
  templateUrl: './addtheloai.component.html',
  styleUrls: ['./addtheloai.component.css']
})
export class AddtheloaiComponent implements OnInit {
  theloais: TheLoai[] =[];
  newTL: TheLoai = {tenTheLoai: ''}

  constructor(
    private theloaiService: TheloaiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(form: any): void {
    this.theloaiService.addTheLoai(this.newTL).subscribe(theloai =>{
      this.theloais.push(theloai);
      this.newTL = {tenTheLoai: ''};
      form.resetForm();
      alert('Thêm thể loại thành công!');
      this.router.navigate(['/listtheloai']);
    })
  }

}
