import {VaiTro} from "./VaiTro";

export interface DocGia {
  maDocGia?: number,
  tenDocGia?: string,
  gioiTinh?: string,
  soDienThoai?: string,
  namSinh?: Date,
  email?: string,
  userName?: string,
  passWord?: string,
  trangThaiHoatDong?: number,
  vaiTro?: VaiTro
}
