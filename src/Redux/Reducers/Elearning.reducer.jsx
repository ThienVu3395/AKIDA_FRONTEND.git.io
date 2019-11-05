import * as types from '../Constants/Eleaning.constant';
import Swal from 'sweetalert2';

let stateElearning = {
    TuKhoa: "",
    danhSachKhoaHoc: [],
    danhSachTimKiem: [],
    khoaHocChiTiet: {},
    danhSachDanhMuc: [],
    danhSachKhoaHocTheoDanhMuc: [],
    ThongTinCaNhan:  {},
    trangThaiDangNhap: localStorage.length,
    DanhSachKhoaHocDaDangKy: [],
    DanhSachNguoiDung: [],
    ThongTinCanSua: {},

    DanhSachTimKiem: [],

    TrangThaiXuLyQLKH: true,
    TrangThaiXuLyQLND: true,
    ThongTinKhoaHocCanSua: {},

    dsKhoaHocDaXetDuyet: [],
    dsKhoaHocChoXetDuyet: [],
    dsKhoaHocChuaGhiDanh: [],

    dsNguoiDungDaXetDuyet: [],
    dsNguoiDungChoXetDuyet: [],
    dsNguoiDungChuaGhiDanh: [],
}

const ElearningReducer = (state = stateElearning, action) => {
    switch (action.type) {
        // ------------------------------ NGƯỜI DÙNG --------------------------
        //Đăng ký
        case types.DANG_KY: {
            document.getElementById('close').click();
            return { ...state }
        }

        // Đăng Nhập
        case types.DANG_NHAP: {
            state.trangThaiDangNhap = localStorage.length;
            state.ThongTinCaNhan = action.thongTinCaNhan;
            return { ...state }
        }

        // Đăng Xuất
        case types.DANG_XUAT: {
            let cf = window.confirm("Bạn Chắc Chắn Muốn Đăng Xuất Chứ ?");
            if (cf) {
                localStorage.clear();
                state.trangThaiDangNhap = localStorage.length;
                Swal.fire("Đăng Xuất Thành Công", "Bạn Sẽ Được Điều Hướng Về Trang Chủ", 'success');
            }
            return { ...state }
        }
        default: {
            return { ...state };
        }
    }
}

export default ElearningReducer;