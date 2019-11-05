import * as types from '../../Constants/QuanLyKhoaHoc/QuanLyKhoaHoc.constants';
// import Swal from 'sweetalert2';

let stateQuanLyKhoaHoc = {
    DanhSachKhoaHoc : [],
}

const QuanLyKhoaHocReducer = (state = stateQuanLyKhoaHoc, action) => {
    switch (action.type) {
        case types.LAY_DANH_SACH_KHOA_HOC : {
            state.DanhSachKhoaHoc = action.dsKhoaHoc;
            return {...state}
        }
        default: {
            return { ...state };
        }
    }
}

export default QuanLyKhoaHocReducer;