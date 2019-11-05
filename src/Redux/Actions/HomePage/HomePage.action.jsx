import * as types from '../../Constants/HomePage/HomePage.constant';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as CauHinh from '../../../common/CauHinh';


export const TimKiemKhoaHoc = (tuKhoa) => {
    return (dispatch) => {
        alert(tuKhoa)
        axios({
            url: CauHinh.domain + `API/TimKiemKhoaHoc?tenKhoaHoc=${tuKhoa}`,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_DANH_MUC,
                DanhSachDanhMuc : result.data
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
                DanhSachDanhMuc : result.data
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
                DanhSachKhoaHocTheoDanhMuc : result.data
            })
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
                DanhSachKhoaHocMoiNhat : result.data
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
                DanhSachKhoaHocTieuBieu : result.data
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
                KhoaHocChiTiet : result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}