import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import { ListtheloaiComponent } from './component/TheLoai/listtheloai/listtheloai.component';
import {AppRoutingModule} from "./app-routing.module";
import { TrangchuComponent } from './component/trangchu/trangchu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddtheloaiComponent } from './component/TheLoai/addtheloai/addtheloai.component';
import { UpdateTheLoaiComponent } from './component/TheLoai/update-the-loai/update-the-loai.component';
import { ListsachComponent } from './component/Sach/listsach/listsach.component';
import { AddsachComponent } from './component/Sach/addsach/addsach.component';
import { UpdatesachComponent } from './component/Sach/updatesach/updatesach.component';
import { AddnhanvienComponent } from './component/NhanVien/addnhanvien/addnhanvien.component';
import { ListnhanvienComponent } from './component/NhanVien/listnhanvien/listnhanvien.component';
import { UpdatenhanvienComponent } from './component/NhanVien/updatenhanvien/updatenhanvien.component';
import { AddhoadonnhapComponent } from './component/HoaDonNhap/addhoadonnhap/addhoadonnhap.component';
import { ListhdnComponent } from './component/HoaDonNhap/listhdn/listhdn.component';
import { ListcthdnComponent } from './component/HoaDonNhap/listcthdn/listcthdn.component';
import { ChitietsachComponent } from './component/Sach/chitietsach/chitietsach.component';
import { ChitietsachallComponent } from './component/Sach/chitietsachall/chitietsachall.component';
import { AddphieumuonComponent } from './component/MuonTra/addphieumuon/addphieumuon.component';
import { ListphieumuonComponent } from './component/MuonTra/listphieumuon/listphieumuon.component';
import { ListctphieumuonComponent } from './component/MuonTra/listctphieumuon/listctphieumuon.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ListtheloaiComponent,
    TrangchuComponent,
    AddtheloaiComponent,
    UpdateTheLoaiComponent,
    ListsachComponent,
    AddsachComponent,
    UpdatesachComponent,
    AddnhanvienComponent,
    ListnhanvienComponent,
    UpdatenhanvienComponent,
    AddhoadonnhapComponent,
    ListhdnComponent,
    ListcthdnComponent,
    ChitietsachComponent,
    ChitietsachallComponent,
    AddphieumuonComponent,
    ListphieumuonComponent,
    ListctphieumuonComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
