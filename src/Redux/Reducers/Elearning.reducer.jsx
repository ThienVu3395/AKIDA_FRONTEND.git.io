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
        // ------------------------------- KHÓA HỌC -------------------------------------
        //Lấy danh sách khóa hoc
        case types.LAY_DANH_SACH_KHOA_HOC: {
            state.danhSachKhoaHoc = action.dsKhoaHoc;
            state.danhSachKhoaHocTheoDanhMuc = action.dsKhoaHoc
            return { ...state }
        }

        //Tìm kiếm khóa học
        case types.TIM_KIEM_KHOA_HOC: {
            state.danhSachTimKiem = action.dsTimKiem;
            state.TuKhoa = action.tuKhoa;
            state.danhSachKhoaHocTheoDanhMuc = action.dsTimKiem;
            return { ...state }
        }

        //Lấy chi tiết khóa học
        case types.LAY_CHI_TIET_KHOA_HOC: {

            state.khoaHocChiTiet = action.chiTietKhoaHoc;
            let ds = [...state.DanhSachKhoaHocDaDangKy];
            let maKhoaHoc = state.khoaHocChiTiet.maKhoaHoc;
            for (let i = 0; i < ds.length; i++) {
                if (maKhoaHoc === ds[i].maKhoaHoc) {
                    let i = document.getElementById("dk");
                    i.innerHTML = "<b><i class='fas fa-check mr-2'></i>ĐÃ ĐĂNG KÝ</b>";
                    i.className = "btn container btn-success";
                }
            }
            return { ...state }
        }
        //Đăng ký học
        case types.DANG_KY_HOC: {
            var i = document.getElementById("dk");
            i.innerHTML = "<b><i class='fas fa-check mr-2'></i>ĐÃ ĐĂNG KÝ</b>";
            i.className = "btn container btn-success";
            return { ...state }
        }

        //Hủy đăng ký học
        case types.HUY_DANG_KY_HOC: {
            let ttdk = action.thongtindangky;
            let ds = [...state.DanhSachKhoaHocDaDangKy];
            for (let i = 0; i < ds.length; i++) {
                if (ttdk.maKhoaHoc === ds[i].maKhoaHoc) {
                    ds.splice(i, 1);
                }
            }
            state.DanhSachKhoaHocDaDangKy = ds;
            return { ...state };
        }

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

        // Xem thông tin cá nhân
        case types.XEM_THONG_TIN_CA_NHAN: {
            state.ThongTinCaNhan = action.thongTinCaNhan;
            state.DanhSachKhoaHocDaDangKy = action.thongTinCaNhan.chiTietKhoaHocGhiDanh;
            return { ...state }
        }

        // Sửa thông tin cá nhân
        case types.SUA_THONG_TIN_CA_NHAN: {
            state.ThongTinCaNhan = action.thongTinSua;
            state.ThongTinCaNhan.chiTietKhoaHocGhiDanh = state.DanhSachKhoaHocDaDangKy;
            return { ...state }
        }

        // Lấy danh sách khóa học đã xét duyệt 
        case types.LAY_DANH_SACH_KHOA_HOC_DA_XET_DUYET: {
            state.dsKhoaHocDaXetDuyet = action.danhSachKhoaHocDaXetDuyet;
            return { ...state }
        }

        // Lấy danh sách khóa học chờ xét duyệt 
        case types.LAY_DANH_SACH_KHOA_HOC_CHO_XET_DUYET: {
            state.dsKhoaHocChoXetDuyet = action.danhSachKhoaHocChoXetDuyet;
            return { ...state }
        }

        // Lấy danh sách khóa học chưa ghi danh
        case types.LAY_DANH_SACH_KHOA_HOC_CHUA_GHI_DANH: {
            state.dsKhoaHocChuaGhiDanh = action.danhSachKhoaHocChuaGhiDanh;
            return { ...state }
        }

        // ------------------------------------- QUẢN TRỊ --------------------------------

        case types.TIM_KIEM_NGUOI_DUNG: {
            state.DanhSachNguoiDung = action.KetQuaTimkiem;
            return { ...state }
        }

        case types.XEM_THONG_TIN_SUA: {
            state.ThongTinCanSua = action.thongTinCanSua;
            state.TrangThaiXuLyQLND = false;
            return { ...state }
        }

        case types.CAP_NHAT_NGUOI_DUNG: {
            let dsnd = [...state.DanhSachNguoiDung];
            let index = dsnd.findIndex(item => item.taiKhoan === action.UserSua.taiKhoan);
            if (index !== -1) {
                dsnd[index] = action.UserSua;
            }
            state.DanhSachNguoiDung = dsnd;
            document.getElementById('thoatne').click();
            return { ...state }
        }

        case types.DANG_KY_KHOA_HOC: {
            let ds = [...state.dsKhoaHocChuaGhiDanh];
            for (let i = 0; i < ds.length; i++) {
                if (ds[i].maKhoaHoc === action.maKH) {
                    ds.splice(i, 1);
                    break;
                }
            }
            state.dsKhoaHocChuaGhiDanh = ds;
            return { ...state }
        }



        //Quản trị Khóa học
        case types.THEM_KHOA_HOC: {
            let ds = [...state.danhSachKhoaHoc];
            let ds2 = [...state.danhSachKhoaHocTheoDanhMuc];
            ds.push(action.objThem);
            ds2.push(action.objThem)
            state.danhSachKhoaHoc = ds;
            state.danhSachKhoaHocTheoDanhMuc = ds2;
            document.getElementById('thoatne').click();
            return { ...state }
        }

        case types.SUA_KHOA_HOC: {
            state.TrangThaiXuLyQLKH = false;
            state.ThongTinKhoaHocCanSua = action.KhoaHocCanSua;
            return { ...state }
        }

        case types.CAP_NHAT_KHOA_HOC: {
            let dskh = [...state.danhSachKhoaHoc];
            let index = dskh.findIndex(item => item.maKhoaHoc === action.objCapNhat.maKhoaHoc);
            if (index !== -1) {
                dskh[index] = action.objCapNhat;
            }
            state.danhSachKhoaHoc = dskh;
            document.getElementById('thoatne').click();
            return { ...state }
        }

        case types.XOA_KHOA_HOC: {
            let ma = action.maKhoaHoc;
            let ds = [...state.danhSachKhoaHoc];
            for (let i = 0; i < ds.length; i++) {
                if (ds[i].maKhoaHoc === ma) {
                    ds.splice(i, 1);
                    break;
                }
            }

            let ds2 = [...state.danhSachKhoaHocTheoDanhMuc];
            for (let i = 0; i < ds2.length; i++) {
                if (ds2[i].maKhoaHoc === ma) {
                    ds2.splice(i, 1);
                    break;
                }
            }
            state.danhSachKhoaHoc = ds;
            state.danhSachKhoaHocTheoDanhMuc = ds2;
            return { ...state };
        }

        case types.LAY_DANH_SACH_NGUOI_DUNG_DA_XET_DUYET: {
            state.dsNguoiDungDaXetDuyet = action.dsNguoiDungDaDangKy;
            return { ...state }
        }

        case types.LAY_DANH_SACH_NGUOI_DUNG_CHO_XET_DUYET: {
            state.dsNguoiDungChoXetDuyet = action.dsNguoiDungChoXetDuyet;
            return { ...state }
        }

        case types.LAY_DANH_SACH_NGUOI_DUNG_CHUA_GHI_DANH: {
            state.dsNguoiDungChuaGhiDanh = action.dsNguoiDungChuaGhiDanh;
            return { ...state }
        }

        case types.GHI_DANH_NGUOI_DUNG: {
            let ds = [...state.dsNguoiDungChoXetDuyet];
            let ds2 = [...state.dsKhoaHocChoXetDuyet]
            for (let i = 0; i < ds.length; i++) {
                if (ds[i].taiKhoan === action.TaiKhoan) {
                    ds.splice(i, 1);
                    break;
                }
            }

            for (let i = 0; i < ds2.length; i++) {
                if (ds2[i].maKhoaHoc === action.MaKhoaHoc) {
                    ds2.splice(i, 1);
                    break;
                }
            }
            state.dsNguoiDungChoXetDuyet = ds;
            state.dsKhoaHocChoXetDuyet = ds2;
            return { ...state }
        }

        case types.HUY_GHI_DANH_NGUOI_DUNG: {
            let ds = [...state.dsNguoiDungChoXetDuyet];
            let ds2 = [...state.dsKhoaHocChoXetDuyet]
            for (let i = 0; i < ds.length; i++) {
                if (ds[i].taiKhoan === action.TaiKhoan) {
                    ds.splice(i, 1);
                    break;
                }
            }

            for (let i = 0; i < ds2.length; i++) {
                if (ds2[i].maKhoaHoc === action.MaKhoaHoc) {
                    ds2.splice(i, 1);
                    break;
                }
            }
            state.dsNguoiDungChoXetDuyet = ds;
            state.dsKhoaHocChoXetDuyet = ds2;
            return { ...state }
        }

        case types.DANG_KY_NGUOI_DUNG: {
            let ds = [...state.dsNguoiDungChuaGhiDanh];
            for (let i = 0; i < ds.length; i++) {
                if (ds[i].taiKhoan === action.TaiKhoan) {
                    ds.splice(i, 1);
                    break;
                }
            }
            state.dsNguoiDungChuaGhiDanh = ds;
            return { ...state }
        }

        // case 'NUT_SUA' : {
        //     state.TrangThaiXuLyQLKH = "sua";
        //     console.log(state.TrangThaiXuLyQLKH)
        //     return {...state}
        // }

        // case 'NUT_THEM' : {
        //     state.TrangThaiXuLyQLKH = "them";
        //     console.log(state.TrangThaiXuLyQLKH)
        //     return {...state}
        // }
        ////////////Mặc định
        default: {
            return { ...state };
        }
    }
}

export default ElearningReducer;