import {DocGia} from "./DocGia";
import {NhanVien} from "./NhanVien";

export interface MuonTra{
  maMuonTra?: number,
  ngayMuon?: Date,
  ngayTraDuKien?: Date,
  ngayTraThucTe?: Date,
  tongTienPhat?: number,
  tinhTrang?: string,
  docGia?: DocGia,
  nhanVien?: NhanVien
}
