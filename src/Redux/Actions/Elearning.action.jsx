import * as types from '../Constants/Eleaning.constant';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as CauHinh from '../../common/CauHinh';

export const layDanhSachKhoaHoc = (maNhom) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`,
            method: "GET"
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC,
                dsKhoaHoc: result.data,
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const timKiemKhoaHoc = (maNhom, tuKhoa) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tuKhoa}&MaNhom=${maNhom}`,
            method: "GET"
        }).then((result) => {
            dispatch({
                type: types.TIM_KIEM_KHOA_HOC,
                dsTimKiem: result.data,
                tuKhoa: tuKhoa
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, 'error');
        })
    }
}

export const layChiTietKhoaHoc = (maKhoaHoc) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
            method: "GET"
        }).then((result) => {
            dispatch({
                type: types.LAY_CHI_TIET_KHOA_HOC,
                chiTietKhoaHoc: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        });
    }
}

export const layDanhMucKhoaHoc = () => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
            method: "GET"
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_MUC_KHOA_HOC,
                danhMucKhoaHoc: result.data
            })
        }).catch((error) => {
            console.log("haha");
        })
    }
}

export const layKhoaHocTheoDanhMuc =  (maDanhMuc, maNhom) => {
    return (dispatch) => {
        if (maDanhMuc === "all") {
            axios({
                url: CauHinh.domain + `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`,
                method: "GET"
            }).then((result) => {
                dispatch({
                    type: types.LAY_KHOA_HOC_THEO_DANH_MUC,
                    khoaHocDanhMuc: result.data
                })
            }).catch((error) => {
                Swal.fire("Thông Báo", error.response.data, 'error');
            })
        }

        else {
            axios({
                url: CauHinh.domain + `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`,
                method: "GET"
            }).then((result) => {
                dispatch({
                    type: types.LAY_KHOA_HOC_THEO_DANH_MUC,
                    khoaHocDanhMuc: result.data
                })
            }).catch((error) => {
                Swal.fire("Thông Báo", error.response.data, 'error');
            })
        }
    }
}

export const dangKyHoc = (idKH) => {
    return (dispatch) => {
        let taiKhoan = JSON.parse(localStorage.getItem(CauHinh.userLogin));
        let ThongTinDangKy = {
            maKhoaHoc: idKH,
            taiKhoan: taiKhoan.taiKhoan
        }
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/DangKyKhoaHoc`,
            method: "POST",
            data: ThongTinDangKy,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, 'success');
            dispatch({
                type: types.DANG_KY_HOC,
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, 'error');
        })
    }
}

export const huyDangKy = (idKH, tk) => {
    return (dispatch) => {
        let thongTin = {
            maKhoaHoc: idKH,
            taiKhoan: tk
        }
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/HuyGhiDanh`,
            method: "POST",
            data: thongTin,
            headers: { "Authorization": "Bearer " + localStorage.getItem(CauHinh.token) }
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.HUY_DANG_KY_HOC,
                thongtindangky: thongTin
            })
        }).catch((error) => {
            alert(error.response.data);
        })
    }
}


export const themVaoGioHang = () => {
    return (dispatch) => {
        dispatch({
            type: types.THEM_VAO_GIO_HANG,
        })
    }
}

// Người dùng
export const DangKy = (tk, mk, ht, sdt, mn, mail) => {
    return (dispatch) => {
        let nd = {
            taiKhoan: tk,
            matKhau: mk,
            hoTen: ht,
            soDT: sdt,
            maNhom: mn,
            maLoaiNguoiDung: "HV",
            email: mail
        }
        axios({
            url: CauHinh.domain + 'QuanLyNguoiDung/DangKy',
            method: "POST",
            data: nd,
        }).then((result) => {
            Swal.fire("Thông Báo", "Đăng Ký Thành Viên " + result.data.taiKhoan + " Thành Công", 'success');
            dispatch({
                type: types.DANG_KY,
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const DangNhap = (taiKhoan, matKhau) => {
    return (dispatch) => {
        let objDN = {
            taiKhoan: taiKhoan,
            matKhau: matKhau
        }
        axios({
            url: CauHinh.domain2 + `QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data: objDN,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", "Đăng Nhập Thành Công", 'success');
            localStorage.setItem(CauHinh.userLogin, JSON.stringify(result.data));
            localStorage.setItem(CauHinh.token, result.data.accessToken);
            dispatch({
                type: types.DANG_NHAP,
                thongTinCaNhan: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, 'error');
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

export const XemThongTinCaNhan = () => {
    return (dispatch) => {
        let taiKhoan = JSON.parse(localStorage.getItem(CauHinh.userLogin));
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: "POST",
            data: { "Taikhoan": taiKhoan.taiKhoan },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            dispatch({
                type: types.XEM_THONG_TIN_CA_NHAN,
                thongTinCaNhan: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export const SuaThongTinCaNhan = (objSua) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: "PUT",
            data: objSua,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", "Cập Nhật Thông Tin Thành Công", "success");
            dispatch({
                type: types.SUA_THONG_TIN_CA_NHAN,
                thongTinSua: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

////////////////////////////////////////////// Quản Trị 
// =========================================================== Quản Trị người dùng ======================================================
export const TimKiemNguoiDung = (tuKhoa) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa=${tuKhoa}&MaNhom=GP01`,
            method: "GET"
        }).then((result) => {
            let ketQua = [...result.data];
            if (ketQua.length > 0) {
                dispatch({
                    type: types.TIM_KIEM_NGUOI_DUNG,
                    KetQuaTimkiem: ketQua
                })
            }
            else {
                Swal.fire("Thông Báo", "Không Tìm Thấy Người Dùng Này", "error");
            }
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export const XemThongTin = (tk) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: "POST",
            data: { "Taikhoan": tk },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            dispatch({
                type: types.XEM_THONG_TIN_SUA,
                thongTinCanSua: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export const CapNhatThongTin = (objSua) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: "PUT",
            data: objSua,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", "Cập Nhật Thông Tin Thành Công", "success");
            dispatch({
                type: types.CAP_NHAT_NGUOI_DUNG,
                UserSua: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export const DangKyKhoaHoc = (maKH, tk) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/DangKyKhoaHoc`,
            method: "POST",
            data: { "maKhoaHoc": maKH, "taiKhoan": tk },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.DANG_KY_KHOA_HOC,
                maKH: maKH
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const layDanhSachKhoaHocDaXetDuyet = (tk) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
            method: "POST",
            data: { "taiKhoan": tk },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC_DA_XET_DUYET,
                danhSachKhoaHocDaXetDuyet: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export const layDanhSachKhoaHocChoXetDuyet = (tk) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
            method: "POST",
            data: { "taiKhoan": tk },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC_CHO_XET_DUYET,
                danhSachKhoaHocChoXetDuyet: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export const LayDanhSachKhoaHocChuaGhiDanh = (tk) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh`,
            method: "POST",
            data: { "TaiKhoan": tk },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC_CHUA_GHI_DANH,
                danhSachKhoaHocChuaGhiDanh: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}


// --------------------------------------------------------------- Quản trị khóa học ------------------------------------------------------
export const themKhoaHoc = (objThem) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/ThemKhoaHoc`,
            method: "POST",
            data: objThem,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        })
        .then((result) => {
            Swal.fire("Thông Báo", "Thêm Khóa Học Thành Công", "success");
            let thoat = document.getElementById("thoatne");
            thoat.click();
            dispatch({
                type: types.THEM_KHOA_HOC,
                objThem: result.data
            })
        })
        .catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const xoaKhoaHoc = (maKH) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKH}`,
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.XOA_KHOA_HOC,
                maKhoaHoc: maKH
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const suaKhoaHoc = (maKhoaHoc) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
            method: "GET"
        }).then((result) => {
            dispatch({
                type: types.SUA_KHOA_HOC,
                KhoaHocCanSua: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        });
    }
}

export const capNhatKhoaHoc = (objSua) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/CapNhatKhoaHoc`,
            method: "PUT",
            data: objSua,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", "Cập Nhật Thông Tin Khóa Học Thành Công", "success");
            dispatch({
                type: types.CAP_NHAT_KHOA_HOC,
                objCapNhat: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const layDanhSachNguoiDungDaDangKy = (maKH) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`,
            method: "POST",
            data: { "MaKhoaHoc": maKH },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_NGUOI_DUNG_DA_XET_DUYET,
                dsNguoiDungDaDangKy: result.data
            })
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
}

export const layDanhSachNguoiDungChoXetDuyet = (maKH) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,
            method: "POST",
            data: { "MaKhoaHoc": maKH },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_NGUOI_DUNG_CHO_XET_DUYET,
                dsNguoiDungChoXetDuyet: result.data
            })
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
}

export const layDanhSachNguoiDungChuaGhiDanh = (maKH) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh`,
            method: "POST",
            data: { "MaKhoaHoc": maKH },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_NGUOI_DUNG_CHUA_GHI_DANH,
                dsNguoiDungChuaGhiDanh: result.data
            })
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
}

export const ghiDanhNguoiDung = (maKH, taiKhoan) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/GhiDanhKhoaHoc`,
            method: "POST",
            data: { "maKhoaHoc": maKH, "taiKhoan": taiKhoan },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.GHI_DANH_NGUOI_DUNG,
                TaiKhoan: taiKhoan,
                MaKhoaHoc: maKH
            })
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
}

export const huyGhiDanhNguoiDung = (maKH, taiKhoan) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/HuyGhiDanh`,
            method: "POST",
            data: { "maKhoaHoc": maKH, "taiKhoan": taiKhoan },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.HUY_GHI_DANH_NGUOI_DUNG,
                TaiKhoan: taiKhoan,
                MaKhoaHoc: maKH
            })
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
}

export const dangKyNguoiDung = (maKH, taiKhoan) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/DangKyKhoaHoc`,
            method: "POST",
            data: { "maKhoaHoc": maKH, "taiKhoan": taiKhoan },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.DANG_KY_NGUOI_DUNG,
                TaiKhoan: taiKhoan
            })
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
}



