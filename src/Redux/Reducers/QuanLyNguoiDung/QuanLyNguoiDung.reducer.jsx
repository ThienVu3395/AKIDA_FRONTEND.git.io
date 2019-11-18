import * as types from '../../Constants/QuanLyNguoiDung/QuanLyNguoiDung.constants';
// import Swal from 'sweetalert2';

let stateQuanLyNguoiDung = {
    DanhSachNguoiDung : [],
    TongSoTrang : 0,
    SanPhamMoiTrang : 5
}

const QuanLyNguoiDungReducer = (state = stateQuanLyNguoiDung, action) => {
    switch (action.type) {
        case types.LAY_DANH_SACH_NGUOI_DUNG_TUY_CHON :{
            state.DanhSachNguoiDung =  action.dsUser;
            let allPages = Math.ceil(action.dsUser.length/state.SanPhamMoiTrang);
            state.TongSoTrang = allPages;
            state.DanhSachNguoiDung.splice(state.SanPhamMoiTrang);
            return {...state}
        }

        case types.PHAN_TRANG_NGUOI_DUNG : {
            state.DanhSachNguoiDung = action.dsUser;
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

        case types.TUY_CHINH_NGUOI_DUNG : {
            return {...state};
        }
        
        default: {
            return { ...state };
        }
    }
}

export default QuanLyNguoiDungReducer;