import * as types from '../../Constants/QuanLyKhoaHoc/QuanLyKhoaHoc.constants';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as CauHinh from '../../../common/CauHinh';

export const LayDanhSachKhoaHocTheoTuyChon = (idDanhMuc, trangThai) => {
    return (dispatch) => {
        let API = "";
        if (idDanhMuc === "all" && trangThai !== "-1") {
            API += `API/QuanLyKhoaHoc/LayDanhSachKhoaHocTheoTrangThai?trangThai=${trangThai}`
        }
        else if (idDanhMuc !== "all" && trangThai === "-1") {
            API += `API/QuanLyKhoaHoc/LayDanhSachKhoaHocTheoDanhMuc?idDanhMuc=${idDanhMuc}`
        }
        else if (idDanhMuc === "all" && trangThai === "-1") {
            API += `API/QuanLyKhoaHoc/LayToanBoDanhSachKhoaHoc`;
        }
        else API += `API/QuanLyKhoaHoc/LayDanhSachKhoaHocTheoTuyChon?idDanhMuc=${idDanhMuc}&trangThai=${trangThai}`;
        axios({
            url: CauHinh.domain + API,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC,
                dsKhoaHoc: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo","Không Tìm Thấy", "error");
        })
    }
}

export const PhanTrangKhoaHoc = (soTrang, idDanhMuc, trangThai) => {
    return (dispatch) => {
        let offset = 5;
        let API = "";
        if (idDanhMuc === "all" && trangThai !== "-1") {
            API += `API/QuanLyKhoaHoc/LayDanhSachKhoaHocTheoTrangThai_PhanTrang?page=${soTrang}&offset=${offset}&trangThai=${trangThai}`
        }
        else if (idDanhMuc !== "all" && trangThai === "-1") {
            API += `API/QuanLyKhoaHoc/LayDanhSachKhoaHocTheoDanhMuc_PhanTrang?page=${soTrang}&offset=${offset}&idDanhMuc=${idDanhMuc}`
        }
        else if (idDanhMuc === "all" && trangThai === "-1") {
            API += `API/QuanLyKhoaHoc/LayToanBoDanhSachKhoaHoc_PhanTrang?page=${soTrang}&offset=${offset}`;
        }
        else API += `API/QuanLyKhoaHoc/LayDanhSachKhoaHocTheoTuyChon_PhanTrang?page=${soTrang}&offset=${offset}&idDanhMuc=${idDanhMuc}&trangThai=${trangThai}`;
        axios({
            url: CauHinh.domain + API,
            method: "GET",
        }).then((result) => {
            dispatch({
                type: types.PHAN_TRANG_KHOA_HOC,
                dsKhoaHoc: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "sai", "error");
        })
    }
}

export const ThemKhoaHoc = (objThem) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/QuanLyKhoaHoc/ThemKhoaHoc`,
            method: "POST",
            data: objThem
        }).then((result) => {
            let file = objThem.File;
            let formData = new FormData();
            formData.append("Hinh", file);
            axios({
                url: CauHinh.domain + `API/QuanLyKhoaHoc/UpLoadHinh`,
                method: "POST",
                data: formData
            }).then((result) => {
                Swal.fire("Thông Báo", "Thêm Khóa Học Thành Công", "success");
                let file = objThem.File;
                let formData = new FormData();
                formData.append("Hinh", file);
                dispatch({
                    type: types.THEM_KHOA_HOC,
                    ObjThem: objThem
                })
            }).catch((error) => {
                Swal.fire("Thông Báo", "Có lỗi xảy ra", "error");
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.message.data, "error");
        })
    }
}


export const UploadHinh = (objHinh) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/QuanLyKhoaHoc/UpLoadHinh`,
            method: "POST",
            data: objHinh
        }).then((result) => {
            alert("ok");
            // dispatch({
            //     type: types.XEM_CHI_TIET_KHOA_HOC,
            //     ctkh : result.data
            // })
        }).catch((error) => {
            alert("not ok")
            // Swal.fire("Thông Báo", error.message.data , "error");
        })
    }
}

export const XoaKhoaHoc = (idKhoaHoc) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `API/QuanLyKhoaHoc/XoaKhoaHoc?idKhoaHoc=${idKhoaHoc}`,
            method: "DELETE",
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.XOA_KHOA_HOC,
                idKhoaHoc: idKhoaHoc
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error, "error");
        })
    }
}

export const SuaKhoaHoc = (objSua, idKH) => {
    return (dispatch) => {
        objSua.ID = idKH;
        axios({
            url: CauHinh.domain + `API/QuanLyKhoaHoc/SuaKhoaHoc`,
            method: "PUT",
            data: objSua
        }).then((result) => {
            Swal.fire("Thông Báo", "Cập Nhật Thông Tin Khóa Học Thành Công", "success");
            dispatch({
                type: types.SUA_KHOA_HOC,
                objSua: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", "Có Lỗi", "error");
        })
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
                ctkh: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.message.data, "error");
        })
    }
}