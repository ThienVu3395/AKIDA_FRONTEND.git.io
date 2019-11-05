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