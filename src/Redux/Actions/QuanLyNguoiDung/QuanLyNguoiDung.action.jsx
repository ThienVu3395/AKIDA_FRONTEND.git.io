import * as types from '../../Constants/QuanLyNguoiDung/QuanLyNguoiDung.constants';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as CauHinh from '../../../common/CauHinh';

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
                type: types.LAY_DANH_SACH_NGUOI_DUNG_TUY_CHON,
                dsUser: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Không Tìm Thấy", "error");
        })
    }
}

export const PhanTrangNguoiDung = (Page, Role, Activated) => {
    return (dispatch) => {
        let offset = 5;
        let API = "";
        if (Role === "0"  && Activated !== "-1") {
            API += `API/QuanLyNguoiDung/TimKiemNguoiDungTheoTrangThai_PhanTrang?page=${Page}&offset=${offset}&Activated=${Activated}`
        }
        else if (Role !== "0" && Activated === "-1") {
            API += `API/QuanLyNguoiDung/TimKiemNguoiDungTheoQuyen_PhanTrang?page=${Page}&offset=${offset}&Role=${Role}`
        }
        else if (Role === "0" && Activated === "-1") {
            API += `API/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?page=${Page}&offset=${offset}`;
        }
        else API += `API/QuanLyNguoiDung/TimKiemNguoiDungTuyChon_PhanTrang?page=${Page}&offset=${offset}&Role=${Role}&Activated=${Activated}`;
        axios({
            url: CauHinh.domain + API,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.PHAN_TRANG_NGUOI_DUNG,
                dsUser: result.data
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
            Swal.fire("Thông Báo", result.data , "success");
            dispatch({
                type: types.THEM_NGUOI_DUNG,
                User: objUser
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Email Đã Tồn Tại,Xin Thử Một Email Khác", "error");
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

export const TuyChinhNguoiDung = (idUser,Role,Activated) => {
    return (dispatch) => {
        let objTuyChinh = {
            ID_User : idUser,
            Role_ID : Role,
            Activated : Activated
        }
        axios({
            url: CauHinh.domain + `API/QuanLyNguoiDung/TuyChinhNguoiDung`,
            method: "PUT",
            data : objTuyChinh
        }).then((result) => {
            Swal.fire("Thông Báo", result.data , "success");
            dispatch({
                type: types.TUY_CHINH_NGUOI_DUNG,
                ObjTuyChinh : objTuyChinh
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}