import React, { Component, Fragment } from 'react';
import Swal from 'sweetalert2';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import { Redirect } from 'react-router-dom';
import TrangChu from './../Main/main';
import { connect } from 'react-redux';
import QuanLyKhoaHoc from './pages/QuanLyKhoaHoc/QuanLyKhoaHoc';
import QuanLyNguoiDung from './pages/QuanLyNguoiDung/QuanLyNguoiDung';

class index extends Component {
    render() {
        if (localStorage.length === 0) {
            Swal.fire("Xin Lỗi", "Bạn Chưa Đăng Nhập Để Truy Cập Vào Trang Này", "error");
            return <Redirect to={TrangChu}/>
        }
        else {
            let tk = JSON.parse(localStorage.getItem('userLogin'));
            if(tk.maLoaiNguoiDung !== "GV"){
                Swal.fire("Xin Lỗi", "Bạn Không Có Quyền Để Truy Cập Vào Trang Này", "error");
                return <Redirect to={TrangChu}/>
            }
        }
        return (
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Switch>
                        <Route exact path='/courses' component={QuanLyKhoaHoc} />
                        <Route exact path='/users' component={QuanLyNguoiDung} />
                        <Route path='/' component={QuanLyKhoaHoc} />
                    </Switch>
                </Fragment>
            </BrowserRouter >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trangThaiDangNhap: state.ElearningReducer.trangThaiDangNhap
    }
}

export default connect(mapStateToProps, null)(index)
