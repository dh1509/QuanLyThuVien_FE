import {NhaXuatBan} from "./NhaXuatBan";
import {NgonNgu} from "./NgonNgu";
import {TacGia} from "./TacGia";
import {TheLoai} from "./TheLoai";

export interface Sach{
  maSach?: number,
  tenSach?: string,
  anhBia?: string,
  tinhTrang?: string,
  giaBia?: number,
  namXuatBan?: number,
  nhaXuatBan?: NhaXuatBan,
  ngonNgu?: NgonNgu,
  tacGia?: TacGia,
  theLoai?: TheLoai

}
