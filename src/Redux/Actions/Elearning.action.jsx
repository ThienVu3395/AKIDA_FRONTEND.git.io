import * as types from '../Constants/Eleaning.constant';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as CauHinh from '../../common/CauHinh';

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
