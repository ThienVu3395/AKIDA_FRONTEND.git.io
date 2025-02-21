import { combineReducers } from 'redux';
import HomePageReducer from './Reducers/HomePage/HomePage.reducer';
import QuanLyKhoaHocReducer from './Reducers/QuanLyKhoaHoc/QuanLyKhoaHoc.reducer';
import QuanLyNguoiDungReducer from './Reducers/QuanLyNguoiDung/QuanLyNguoiDung.reducer';

const rootReducer = combineReducers({
    HomePageReducer,
    QuanLyKhoaHocReducer,
    QuanLyNguoiDungReducer
 })
export default rootReducer;