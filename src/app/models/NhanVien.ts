import {PhongBan} from "./PhongBan";
import {VaiTro} from "./VaiTro";

export interface NhanVien{
  maNV?: number,
  tenNV?: string,
  gioiTinh?: string,
  soDienThoai?: string,
  namSinh?: Date,
  email?: string,
  userName?: string,
  passWord?: string,
  trangThaiHoatDong?: number,
  phongBan?: PhongBan,
  vaiTro?: VaiTro
}
