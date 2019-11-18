import * as types from '../../Constants/HomePage/HomePage.constant';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as CauHinh from '../../../common/CauHinh';


export const TimKiemKhoaHoc = (tuKhoa) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/TimKiemKhoaHoc?tenKhoaHoc=${tuKhoa}`,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.TIM_KIEM_KHOA_HOC,
                DanhSachTimKiem: result.data,
                TuKhoaTimKiem: tuKhoa
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Có Lổi", "error");
        })
    }
}

export const LayDanhSachDanhMuc = () => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/LayDanhSachDanhMuc`,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_DANH_MUC,
                DanhSachDanhMuc: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Có Lổi", "error");
        })
    }
}

export const LayDanhSachKhoaHocTheoDanhMuc = (idCategory) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/LayDanhSachKhoaHocTheoDanhMuc?CategoryID=${idCategory}`,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC_THEO_DANH_MUC,
                DanhSachKhoaHocTheoDanhMuc: result.data
            });
        }).catch((error) => {
            Swal.fire("Thông Báo", "Có Lổi", "error");
        })
    }
}

export const LayDanhSachKhoaHocMoiNhat = () => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/LayDanhSachKhoaHocMoiNhat`,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC_MOI_NHAT,
                DanhSachKhoaHocMoiNhat: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Có Lổi", "error");
        })
    }
}

export const LayDanhSachKhoaHocTieuBieu = () => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/LayDanhSachKhoaHocTieuBieu`,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC_TIEU_BIEU,
                DanhSachKhoaHocTieuBieu: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Có Lổi", "error");
        })
    }
}

export const LayDanhSachGiaoVien = () => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/LayDanhSachGiaoVien`,
            method: "GET",
        }).then((result) => {
            dispatch({
                type : types.LAY_DANH_SACH_GIAO_VIEN,
                dsGiaoVien : result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Có Lổi", "error");
        })
    }
}

export const LayChiTietKhoaHoc = (idKhoaHoc) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/LayChiTietKhoaHoc?idKhoaHoc=${idKhoaHoc}`,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.LAY_CHI_TIET_KHOA_HOC,
                KhoaHocChiTiet: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const DangNhap = (Email,Password) => {
    return (dispatch) => {
        let objDangNhap = {
            Email : Email,
            Password : Password
        }
        axios({
            url: CauHinh.domain + `API/DangNhap`,
            method: "POST",
            data : objDangNhap,
        }).then((result) => {
            // result.data.Role = "1";
            Swal.fire("Thông Báo", "Đăng Nhập Thành Công", "success");
            dispatch({
                type: types.DANG_NHAP,
                UserDangNhap: result.data
            })
        }).catch(() => {
            Swal.fire("Thông Báo", "Sai Tên Đăng Nhập Hoặc Mật Khẩu", "error");
        })
    }
}

export const DangKy = (objUser) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/DangKy`,
            method: "POST",
            data: objUser,
        }).then((result) => {
            Swal.fire("Thông Báo", result.data , "success");
            dispatch({
                type: types.DANG_KY
            })
        }).catch(() => {
            Swal.fire("Thông Báo", "Có lỗi" , "error");
        })
    }
}

export const DangXuat = () => {
    return (dispatch) => {
        dispatch({
            type: types.DANG_XUAT
        })
    }
}

export const DoiThongTinCaNhan = (objUser) => {
    return (dispatch) => {
        let objSuaThongTin = {
            ID_User : objUser.ID_User,
            Name : objUser.Name,
            Email : objUser.Email,
            Phone : objUser.Phone
        }
        axios({
            url: CauHinh.domain + `API/DoiThongTinCaNhan`,
            method: "PUT",
            data: objSuaThongTin,
        }).then((result) => {
            Swal.fire("Thông Báo", result.data , "success");
            dispatch({
                type: types.DOI_THONG_TIN_CA_NHAN,
                objSuaThongTin : objSuaThongTin
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Có Lỗi", "error");
        })
    }
}

export const KiemTraThongTinCaNhan = () => {
    return (dispatch) => {
        dispatch({
            type: types.KIEM_TRA_THONG_TIN_CA_NHAN
        })
    }
}

export const DoiMatKhau = (objUser) => {
    return (dispatch) => {
        let objDoiMatKhau = {
            ID_User : objUser.ID_User,
            Password : objUser.oldPass,
            NewPassword : objUser.newPass,
        }
        axios({
            url: CauHinh.domain + `API/DoiMatKhau`,
            method: "PUT",
            data: objDoiMatKhau,
        }).then((result) => {
            Swal.fire("Thông Báo", result.data , "success");
            dispatch({
                type: types.DOI_MAT_KHAU,
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Mật Khẩu Cũ Không Đúng,Xin Vui Lòng Nhập Lại", "error");
        })
    }
}