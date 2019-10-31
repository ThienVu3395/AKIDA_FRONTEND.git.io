import * as types from '../../Constants/QuanLyNguoiDung/QuanLyNguoiDung.constants';
import Swal from 'sweetalert2';

let stateQuanLyNguoiDung = {
    DanhSachNguoiDung : []
}

const QuanLyNguoiDungReducer = (state = stateQuanLyNguoiDung, action) => {
    switch (action.type) {
        case types.LAY_DANH_SACH_NGUOI_DUNG :{
            let DanhSachUser = action.DanhSachUser;
            state.DanhSachNguoiDung = DanhSachUser;
            return {...state}
        }

        case types.THEM_NGUOI_DUNG : {
            let User = action.User;
            let DanhSachUser = [...state.DanhSachNguoiDung,User];
            state.DanhSachNguoiDung = DanhSachUser;
            document.getElementById('thoatne').click();
            return {...state};
        }

        case types.XOA_NGUOI_DUNG : {
            return {...state};
        }
        
        default: {
            return { ...state };
        }
    }
}

export default QuanLyNguoiDungReducer;