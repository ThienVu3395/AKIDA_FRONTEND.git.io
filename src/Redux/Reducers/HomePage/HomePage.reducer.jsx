import * as types from '../../Constants/HomePage/HomePage.constant';

let stateHomePage = {
    DanhSachDanhMuc : [],
    DanhSachKhoaHocTheoDanhMuc : [],
}

const HomePageReducer = (state = stateHomePage, action) => {
    switch (action.type) {
        case types.LAY_DANH_SACH_DANH_MUC : {
            let dsDanhMuc = action.DanhSachDanhMuc;
            state.DanhSachDanhMuc = dsDanhMuc;
            return {...state};
        }

        case types.LAY_DANH_SACH_KHOA_HOC_THEO_DANH_MUC : {
            let dsKhoaHocTheoDanhMuc = action.DanhSachKhoaHocTheoDanhMuc;
            state.DanhSachKhoaHocTheoDanhMuc = dsKhoaHocTheoDanhMuc;
            return {...state};
        }
        default: {
            return { ...state };
        }
    }
}

export default HomePageReducer;