import * as types from '../../Constants/QuanLyNguoiDung/QuanLyNguoiDung.constants';
// import Swal from 'sweetalert2';

let stateQuanLyNguoiDung = {
    DanhSachNguoiDung : []
}

const QuanLyNguoiDungReducer = (state = stateQuanLyNguoiDung, action) => {
    switch (action.type) {
        case types.TIM_KIEM_NGUOI_DUNG_LOC :{
            let DanhSachUser = action.KetQuaTimDuoc;
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
            let idUser = action.idUser;
            let dsUser = [...state.DanhSachNguoiDung];
            let index = dsUser.findIndex(x => x.ID_User === idUser);
            if(index !== -1){
                dsUser.splice(index,1);
            }
            state.DanhSachNguoiDung = dsUser;
            return {...state};
        }
        
        default: {
            return { ...state };
        }
    }
}

export default QuanLyNguoiDungReducer;