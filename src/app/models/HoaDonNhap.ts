import {NhanVien} from "./NhanVien";
import {NhaCungCap} from "./NhaCungCap";

export interface HoaDonNhap{
  maHDN?: number,
  ngayNhap?: Date,
  tongTien?: number,
  trangThai?: string,
  nhanVien?: NhanVien,
  nhaCungCap?: NhaCungCap
}
