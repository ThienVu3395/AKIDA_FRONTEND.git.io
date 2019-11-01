import * as types from '../../Constants/HomePage/HomePage.constant';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as CauHinh from '../../../common/CauHinh';

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