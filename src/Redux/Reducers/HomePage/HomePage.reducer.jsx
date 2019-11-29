import * as types from '../../Constants/HomePage/HomePage.constant';
import Swal from 'sweetalert2';

let stateHomePage = {
    DanhSachTimKiem: [],
    TrangThaiDangNhap: localStorage.length,
    ThongTinCaNhan: {},
    DanhSachDanhMuc: [],
    DanhSachKhoaHocTheoDanhMuc: [],
    DanhSachKhoaHocMoiNhat: [],
    DanhSacKhoaHocTieuBieu: [],
    DanhSachGiaoVien : [],
    KhoaHocChiTiet: {},
    DanhSachKhoaHocDaDangKy : [],
    SoLuongGioHang : 0
}

const HomePageReducer = (state = stateHomePage, action) => {
    switch (action.type) {
        case types.TIM_KIEM_KHOA_HOC: {
            let kqTimKiem = action.DanhSachTimKiem;
            kqTimKiem.MessageTimKiem = action.TuKhoaTimKiem;
            state.DanhSachTimKiem = kqTimKiem;
            return { ...state };
        }

        case types.LAY_DANH_SACH_DANH_MUC: {
            let dsDanhMuc = action.DanhSachDanhMuc;
            state.DanhSachDanhMuc = dsDanhMuc;
            return { ...state };
        }

        case types.LAY_DANH_SACH_KHOA_HOC_THEO_DANH_MUC: {
            let dsKhoaHocTheoDanhMuc = action.DanhSachKhoaHocTheoDanhMuc;
            dsKhoaHocTheoDanhMuc.blockUI = true;
            state.DanhSachKhoaHocTheoDanhMuc = dsKhoaHocTheoDanhMuc;
            return { ...state };
        }

        case types.LAY_DANH_SACH_KHOA_HOC_MOI_NHAT: {
            let dsKhoaHocMoiNhat = action.DanhSachKhoaHocMoiNhat;
            state.DanhSachKhoaHocMoiNhat = dsKhoaHocMoiNhat;
            return { ...state }
        }

        case types.LAY_DANH_SACH_KHOA_HOC_TIEU_BIEU: {
            state.DanhSacKhoaHocTieuBieu = action.DanhSachKhoaHocTieuBieu;
            return { ...state };
        }

        case types.LAY_DANH_SACH_GIAO_VIEN: {
            state.DanhSachGiaoVien = action.dsGiaoVien;
            return { ...state };
        }

        case types.LAY_CHI_TIET_KHOA_HOC: {
            state.KhoaHocChiTiet = action.KhoaHocChiTiet
            return { ...state };
        }

        case types.DANG_NHAP: {
            localStorage.setItem("UserLogin",JSON.stringify(action.UserDangNhap));
            state.TrangThaiDangNhap = localStorage.length;
            state.ThongTinCaNhan = JSON.parse(localStorage.getItem("UserLogin"));
            return { ...state }
        }

        case types.DANG_KY : {
            //let User = action.User;
            // let DanhSachUser = [...state.DanhSachNguoiDung,User];
            // state.DanhSachNguoiDung = DanhSachUser;
            document.getElementById('closediba').click();
            return {...state};
        }

        case types.DANG_XUAT: {
            localStorage.clear();
            state.TrangThaiDangNhap = localStorage.length;
            Swal.fire("Đăng Xuất Thành Công", "Bạn Sẽ Được Điều Hướng Về Trang Chủ", 'success');
            return { ...state }
        }

        case types.DOI_THONG_TIN_CA_NHAN : {
            let objSuaThongTin = action.objSuaThongTin;
            let tk = JSON.parse(localStorage.getItem("UserLogin"));
            tk.Name = objSuaThongTin.Name;
            tk.Email = objSuaThongTin.Email;
            tk.Phone = objSuaThongTin.Phone;
            state.ThongTinCaNhan = tk;
            localStorage.removeItem("UserLogin");
            localStorage.setItem("UserLogin",JSON.stringify(tk));
            return {...state}
        }

        case types.KIEM_TRA_THONG_TIN_CA_NHAN : {
            state.ThongTinCaNhan = JSON.parse(localStorage.getItem("UserLogin"));
            return {...state}
        }

        case types.DOI_MAT_KHAU : {
            return {...state }
        }
        
        default: {
            return { ...state };
        }
    }
}

export default HomePageReducer;