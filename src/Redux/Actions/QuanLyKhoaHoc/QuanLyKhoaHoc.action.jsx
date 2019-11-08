import * as types from '../../Constants/QuanLyKhoaHoc/QuanLyKhoaHoc.constants';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as CauHinh from '../../../common/CauHinh';

export const LayDanhSachKhoaHoc = () => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/QuanLyKhoaHoc/LayDanhSachKhoaHoc`,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC,
                dsKhoaHoc : result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.message.data , "error");
        })
    }
}

export const ThemKhoaHoc = (objThem) => {
    return (dispatch) => {
        console.log(objThem);
        axios({
            url: CauHinh.domain + `API/QuanLyKhoaHoc/ThemKhoaHoc`,
            method: "POST",
            data : objThem
        }).then((result) => {
            Swal.fire("Thông Báo", result.data , "success");
            dispatch({
                type: types.THEM_KHOA_HOC,
                ObjThem : objThem
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.message.data , "error");
        })
    }
}

export const XoaKhoaHoc = (idKhoaHoc) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/QuanLyKhoaHoc/XoaKhoaHoc?idKhoaHoc=${idKhoaHoc}`,
            method: "DELETE",
        }).then((result) => {
            Swal.fire("Thông Báo", result.data , "success");
            dispatch({
                type: types.XOA_KHOA_HOC,
                idKhoaHoc : idKhoaHoc
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error, "error");
        })
    }
}

export const SuaKhoaHoc = (objSua) => {
    return (dispatch) => {
        console.log(objSua)
        // axios({
        //     url: CauHinh.domain + `API/QuanLyKhoaHoc/XoaKhoaHoc?idKhoaHoc=${idKhoaHoc}`,
        //     method: "DELETE",
        // }).then((result) => {
        //     Swal.fire("Thông Báo", result.data , "success");
        //     dispatch({
        //         type: types.XOA_KHOA_HOC,
        //         idKhoaHoc : idKhoaHoc
        //     })
        // }).catch((error) => {
        //     Swal.fire("Thông Báo", error, "error");
        // })
    }
}

export const XemThongTinKhoaHoc = (idKH) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/QuanLyKhoaHoc/XemThongTinKhoaHoc?idKH=${idKH}`,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.XEM_CHI_TIET_KHOA_HOC,
                cctk : result.data
            })
        }).catch((error) => {
            alert("sai")
            Swal.fire("Thông Báo", error.message.data , "error");
        })
    }
}