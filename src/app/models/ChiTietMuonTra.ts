import {MuonTra} from "./MuonTra";
import {ChiTietSach} from "./ChiTietSach";

export interface ChiTietMuonTra{
  maCTMuonTra?: number,
  tienPhat?: number,
  ghiChu?: string,
  tinhTrangTra?: string,
  muonTra?: MuonTra,
  chiTietSach?: ChiTietSach
}
