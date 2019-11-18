import * as types from '../../Constants/QuanLyKhoaHoc/QuanLyKhoaHoc.constants';
// import Swal from 'sweetalert2';

let stateQuanLyKhoaHoc = {
    DanhSachKhoaHoc : [],
    ChiTietKhoaHoc : {},
    TongSoTrang : 0,
    SanPhamMoiTrang : 5
}

const QuanLyKhoaHocReducer = (state = stateQuanLyKhoaHoc, action) => {
    switch (action.type) {
        case types.LAY_DANH_SACH_KHOA_HOC : {
            state.DanhSachKhoaHoc = action.dsKhoaHoc;
            let allPages = Math.ceil(action.dsKhoaHoc.length/state.SanPhamMoiTrang);
            state.TongSoTrang = allPages;
            state.DanhSachKhoaHoc.splice(state.SanPhamMoiTrang);
            return {...state}
        }

        case types.PHAN_TRANG_KHOA_HOC : {
            state.DanhSachKhoaHoc = action.dsKhoaHoc;
            return {...state}
        }

        case types.THEM_KHOA_HOC : {
            let ds = [...state.DanhSachKhoaHoc,action.ObjThem];
            state.DanhSachKhoaHoc = ds;
            document.getElementById("thoatne").click();
            return {...state}
        }

        case types.XOA_KHOA_HOC : {
            let ds = [...state.DanhSachKhoaHoc];
            let index = ds.findIndex(x => x.ID === action.idKhoaHoc);
            if(index !== -1){
                ds.splice(index,1);
            }
            state.DanhSachKhoaHoc = ds;
            return {...state}
        }

        case types.SUA_KHOA_HOC : {
            let ds = [...state.DanhSachKhoaHoc];
            let index = ds.findIndex(x => x.ID === action.objSua.ID);
            if(index !== -1){
                ds[index].Name = action.objSua.Name;
                ds[index].Category_ID = action.objSua.Category_ID;
                ds[index].Short_Description = action.objSua.Short_Description;
                ds[index].Enabled = action.objSua.Enabled;
            }
            state.DanhSachKhoaHoc = ds;
            document.getElementById("thoatn").click();
            return {...state}
        }

        case types.XEM_CHI_TIET_KHOA_HOC : {
            state.ChiTietKhoaHoc = action.ctkh;
            return {...state}
        }
        default: {
            return { ...state };
        }
    }
}

export default QuanLyKhoaHocReducer;