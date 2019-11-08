import * as types from '../../Constants/QuanLyKhoaHoc/QuanLyKhoaHoc.constants';
// import Swal from 'sweetalert2';

let stateQuanLyKhoaHoc = {
    DanhSachKhoaHoc : [],
    ChiTietKhoaHoc : {}
}

const QuanLyKhoaHocReducer = (state = stateQuanLyKhoaHoc, action) => {
    switch (action.type) {
        case types.LAY_DANH_SACH_KHOA_HOC : {
            state.DanhSachKhoaHoc = action.dsKhoaHoc;
            return {...state}
        }

        case types.THEM_KHOA_HOC : {
            let ds = [...state.DanhSachKhoaHoc,action.ObjThem];
            state.DanhSachKhoaHoc = ds;
            document.getElementById("thoatne").click();
            return {...state}
        }

        case types.XEM_CHI_TIET_KHOA_HOC : {
            state.ChiTietKhoaHoc = action.cctk;
            return {...state}
        }
        default: {
            return { ...state };
        }
    }
}

export default QuanLyKhoaHocReducer;