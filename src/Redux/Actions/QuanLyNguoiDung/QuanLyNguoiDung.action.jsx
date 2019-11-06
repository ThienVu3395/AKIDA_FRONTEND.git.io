import * as types from '../../Constants/QuanLyNguoiDung/QuanLyNguoiDung.constants';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as CauHinh from '../../../common/CauHinh';


export const LayDanhSachNguoiDung = () => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/QuanLyNguoiDung/LayDanhSachNguoiDung`,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_NGUOI_DUNG,
                DanhSachUser: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Có Lổi", "error");
        })
    }
}

export const TimKiemNguoiDung = (Role, Activated) => {
    return (dispatch) => {
        let API = "";
        if (Role === "0"  && Activated !== "-1") {
            API += `API/QuanLyNguoiDung/TimKiemNguoiDungTheoTrangThai?Activated=${Activated}`
        }
        else if (Role !== "0" && Activated === "-1") {
            API += `API/QuanLyNguoiDung/TimKiemNguoiDungTheoQuyen?Role=${Role}`
        }
        else if (Role === "0" && Activated === "-1") {
            API += `API/QuanLyNguoiDung/LayDanhSachNguoiDung`;
        }
        else API += `API/QuanLyNguoiDung/TimKiemNguoiDungTuyChon?Role=${Role}&Activated=${Activated}`;
        axios({
            url: CauHinh.domain + API,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.TIM_KIEM_NGUOI_DUNG_LOC,
                KetQuaTimDuoc: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Có Lổi", "error");
        })
    }
}


export const ThemNguoiDung = (objUser) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/QuanLyNguoiDung/ThemNguoiDung`,
            method: "POST",
            data: objUser,
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.THEM_NGUOI_DUNG,
                User: objUser
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const XoaNguoiDung = (idUser) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/QuanLyNguoiDung/XoaNguoiDung?idUser=${idUser}`,
            method: "DELETE",
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.XOA_NGUOI_DUNG,
                idUser: idUser
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}