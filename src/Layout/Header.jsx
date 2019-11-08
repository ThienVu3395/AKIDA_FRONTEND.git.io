import React, { Component } from 'react';
import './Header.css';
import { TimKiemKhoaHoc, DangXuat } from '../Redux/Actions/HomePage/HomePage.action';
import ModalDangNhapDangKy from '../components/DangNhapDangKy/ModelDangNhapDangKy';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tuKhoa: ""
        }
    }

    layThongTinInput = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    }

    hienThiDangNhap = () => {
        if (this.props.TrangThaiDangNhap === 0) {
            return (
                <>
                    <button className="btn btn-info pl-2 pr-2" data-toggle="modal" data-target="#dangNhap"><i className="fas fa-users mr-2"></i>Đăng Ký / Đăng Nhập</button>
                    <ModalDangNhapDangKy />
                </>
            );
        }
        else {
            let User = JSON.parse(localStorage.getItem('UserLogin'));
            return (
                <div className="nav-item dropdown btn btn-primary">
                    <a className="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="asdasd"><i className="fas fa-user-cog mr-2"></i>Chào <span className="text-danger text-uppercase"><b>{User.Name}</b></span></a>
                    <div className="dropdown-menu">
                        <NavLink className="dropdown-item" to='/thong-tin-cua-ban'><i className="fas fa-user mr-2"></i>Thông Tin Của Bạn</NavLink>
                        <NavLink className="dropdown-item" to='/kich-hoat-khoa-hoc'><i className="fas fa-key mr-2"></i>Kích Hoạt Khóa Học</NavLink>
                        <NavLink className="dropdown-item" to='/nap-the'><i className="fa fa-credit-card mr-2" aria-hidden="true"></i>Nạp Thẻ</NavLink>
                        <hr />
                        <button className="dropdown-item" onClick={() => this.props.DangXuat()}><i className="fas fa-sign-out-alt mr-2"></i>Đăng Xuất</button>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {/* Header-Top */}
                <div className="header-top">
                    <div className="header-top-content container p-2">
                        <div className="row">
                            <div className="col-lg-7 col-md-10">
                                <div className="list-menu row">
                                    <NavLink to="/trang-chu" className="logo mr-2"></NavLink>
                                    <div className="input-form col-6 pt-1">
                                        <form>
                                            <div className="input-group mb-3 input-group-sm">
                                                <input type="text" className="form-control form-search" name="tuKhoa" placeholder="Nhập Tên Khóa Học..." onChange={this.layThongTinInput} />
                                                <div className="input-group-prepend input-search" onClick={() => this.props.TimKiemKhoaHoc(this.state.tuKhoa)}>
                                                    <NavLink to='/ket-qua' className="input-group-text"><i className="fas fa-search"></i></NavLink>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="cart mr-2 pt-1"><i className="fas fa-shopping-cart"></i><span className="cart-quantity"><sup>0</sup></span></div>
                                    <div className="cart mr-2 pt-1"><i className="fas fa-bell"></i><span className="cart-quantity"><sup>0</sup></span></div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-2 form">
                                <div className="row pt-1">
                                    {/* <NavLink className="regis pl-2 pr-2 mr-3" to="/kich-hoat-khoa-hoc" style={{ textDecoration: "none" }}><i className="fas fa-unlock-alt mr-2"></i>Kích Hoạt Khóa Học</NavLink> */}
                                    {this.hienThiDangNhap()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* /Header-Top */}
                <div className="header-bottom">
                    <div className="header-bottom-content container p-2">
                        <div className="row">
                            <span className="header-bottom-item mr-3">
                                <i className="fas fa-plus-circle color-i mr-1"></i>
                                <span className="color-span">Đăng Yêu Cầu</span>
                            </span>

                            <span className="header-bottom-item mr-3">
                                <i className="fas fa-book-medical color-i mr-1"></i>
                                <span className="color-span">Sách Mới</span>
                            </span>

                            <span className="header-bottom-item mr-3">
                                <i className="fas fa-graduation-cap color-i mr-1"></i>
                                <span className="color-span">Trở Thành Gia Sư</span>
                            </span>

                            <span className="header-bottom-item mr-3">
                                <i className="fas fa-pen-square color-i mr-1"></i>
                                <span className="color-span">Bài Viết</span>
                            </span>

                            <span className="header-bottom-item">
                                <i className="fas fa-user-plus color-i mr-1"></i>
                                <span className="color-span">Thêm Bạn</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        TrangThaiDangNhap: state.HomePageReducer.TrangThaiDangNhap,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        TimKiemKhoaHoc: (tuKhoa) => {
            dispatch(TimKiemKhoaHoc(tuKhoa))
        },

        DangXuat: () => {
            let cf = window.confirm("Bạn Chắc Chắn Muốn Đăng Xuất Chứ ?");
            if(cf){
                dispatch(DangXuat())
            }
            return;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)