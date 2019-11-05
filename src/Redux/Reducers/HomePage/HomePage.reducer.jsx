import * as types from '../../Constants/HomePage/HomePage.constant';

let stateHomePage = {
    DanhSachDanhMuc : [],
    DanhSachKhoaHocTheoDanhMuc : [],
    DanhSachKhoaHocMoiNhat : [],
    DanhSacKhoaHocTieuBieu : [],
    DanhSachTimKiem : [],
    KhoaHocChiTiet : {}
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

        case types.LAY_DANH_SACH_KHOA_HOC_MOI_NHAT : {
            let dsKhoaHocMoiNhat = action.DanhSachKhoaHocMoiNhat;
            state.DanhSachKhoaHocMoiNhat = dsKhoaHocMoiNhat;
            return {...state}
        }

        case types.LAY_DANH_SACH_KHOA_HOC_TIEU_BIEU : {
            state.DanhSacKhoaHocTieuBieu = action.DanhSachKhoaHocTieuBieu;
            return {...state};
        }

        case types.LAY_CHI_TIET_KHOA_HOC : {
            state.KhoaHocChiTiet = action.KhoaHocChiTiet
            return {...state};
        }
        default: {
            return { ...state };
        }
    }
}

export default HomePageReducer;