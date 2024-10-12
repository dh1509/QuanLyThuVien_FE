import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListtheloaiComponent} from "./component/TheLoai/listtheloai/listtheloai.component";
import {TrangchuComponent} from "./component/trangchu/trangchu.component";
import {AddtheloaiComponent} from "./component/TheLoai/addtheloai/addtheloai.component";
import {UpdateTheLoaiComponent} from "./component/TheLoai/update-the-loai/update-the-loai.component";
import {ListsachComponent} from "./component/Sach/listsach/listsach.component";
import {AddsachComponent} from "./component/Sach/addsach/addsach.component";
import {UpdatesachComponent} from "./component/Sach/updatesach/updatesach.component";
import {ListnhanvienComponent} from "./component/NhanVien/listnhanvien/listnhanvien.component";
import {AddnhanvienComponent} from "./component/NhanVien/addnhanvien/addnhanvien.component";
import {UpdatenhanvienComponent} from "./component/NhanVien/updatenhanvien/updatenhanvien.component";
import {AddhoadonnhapComponent} from "./component/HoaDonNhap/addhoadonnhap/addhoadonnhap.component";
import {ListhdnComponent} from "./component/HoaDonNhap/listhdn/listhdn.component";
import {ListcthdnComponent} from "./component/HoaDonNhap/listcthdn/listcthdn.component";
import {ChitietsachComponent} from "./component/Sach/chitietsach/chitietsach.component";
import {ChitietsachallComponent} from "./component/Sach/chitietsachall/chitietsachall.component";
import {AddphieumuonComponent} from "./component/MuonTra/addphieumuon/addphieumuon.component";
import {ListphieumuonComponent} from "./component/MuonTra/listphieumuon/listphieumuon.component";
import {ListctphieumuonComponent} from "./component/MuonTra/listctphieumuon/listctphieumuon.component";

const routes: Routes = [
  {path:'listtheloai', component: ListtheloaiComponent},
  {path:'', component: TrangchuComponent},
  {path:'addtheloai', component: AddtheloaiComponent},
  {path:'updateTheLoai/:maTheLoai', component: UpdateTheLoaiComponent},
  {path:'listsach', component:ListsachComponent},
  {path:'addsach', component:AddsachComponent},
  {path:'updateSach/:maSach', component:UpdatesachComponent},
  {path:'listNhanVien', component: ListnhanvienComponent},
  {path:'addNV', component:AddnhanvienComponent},
  {path:'updateNhanVien/:maNV', component: UpdatenhanvienComponent},
  {path:'addhoadonnhap', component: AddhoadonnhapComponent},
  {path:'listHDN', component: ListhdnComponent},
  {path:'listCTHDN/:maHDN', component: ListcthdnComponent},
  {path:'listCTSach/:maSach',component: ChitietsachComponent},
  {path:'allCTSach', component: ChitietsachallComponent},
  {path:'addPhieuMuon', component: AddphieumuonComponent},
  {path:'listMuonTra', component:ListphieumuonComponent},
  {path:'listctmuontra/:maMuonTra', component:ListctphieumuonComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
