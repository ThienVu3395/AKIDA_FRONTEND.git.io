import React, { Component } from 'react';
import './Header.css';
import { TimKiemKhoaHoc, DangXuat , KiemTraThongTinCaNhan } from '../Redux/Actions/HomePage/HomePage.action';
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

    componentDidMount() {
        this.props.KiemTraThongTinCaNhan()
    }

    hienThiDangNhap = () => {
        if (this.props.TrangThaiDangNhap === 0) {
            return (
                <>
                    <button className="loginbtn" data-toggle="modal" data-target="#dangNhap"><i className="fas fa-users mr-2"></i>Đăng Ký / Đăng Nhập</button>
                    <ModalDangNhapDangKy />
                </>
            );
        }
        else {
            return (
                <div className="nav-item dropdown button button__login">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="asdasd"><span className="text-danger text-uppercase"><i className="fas fa-user-cog mr-2"></i><b>{this.props.ThongTinCaNhan.Name}</b></span></a>
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
                {/* <div className="header-top">
                    <div className="header-top-content container p-2">
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className="list-menu row justify-content-between align-items-center">
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

                            <div className="col-lg-5 col-md-2 form formdangnhap">
                                <div className="row pt-1">
                                  
                                    {this.hienThiDangNhap()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <!-- header --> */}
                <nav className="navbar navbar-expand-md navbar-light myNavBar">
                    <div className="col-xl-6 col-lg-9 col-md-8 col-sm-6">
                        <div className="row myNavBar__left">
                            <NavLink to="/trang-chu" className="navbar-brand">
                                <img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" alt="Logo" />
                            </NavLink>
                            {/* <div className="categories">
                                <i className="fa fa-th" />
                                <span>Categories</span>
                            </div> */}
                            <form className="form_search">
                                <div className="input-group">
                                    <input type="text" className="form-control" name="tuKhoa" placeholder="Nhập Tên Khóa Học..." onChange={this.layThongTinInput} />
                                    <div className="input-group-append">
                                        <span className="input-group-text" onClick={() => this.props.TimKiemKhoaHoc(this.state.tuKhoa)}>
                                            <NavLink to='/ket-qua'><i className="fa fa-search" /></NavLink>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#myNavBarID" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="col-xl-6 col-lg-3 col-md-4 col-sm-6">
                        <div className="collapse navbar-collapse" id="myNavBarID">
                            <ul className="navbar-nav w-100 d-flex text-center">
                                <li className="nav-item bussiness">
                                    <a className="nav-link" href="a">Udemy for Business</a>
                                    <div className="overlay">
                                        <p>Get your team access to Udemy’s top 2,500 courses anytime, anywhere.</p>
                                        <a href="a">Try Udemy For Bussiness</a>
                                    </div>
                                </li>
                                <li className="nav-item instructor">
                                    <a className="nav-link" href="abv">Become an Instructor</a>
                                    <div className="overlay">
                                        <p>Get your team access to Udemy’s top 2,500 courses anytime, anywhere.</p>
                                        <a href="a">Try Udemy For Bussiness</a>
                                    </div>
                                </li>
                                <li className="nav-item icon_cart">
                                    <a className="nav-link " href="abc"><i className="fa fa-shopping-cart" /></a>
                                </li>
                                <li className="nav-item nav__button">
                                    {this.hienThiDangNhap()}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* /Header-Top */}
                {/* <div className="header-bottom">
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
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ThongTinCaNhan : state.HomePageReducer.ThongTinCaNhan,
        TrangThaiDangNhap : state.HomePageReducer.TrangThaiDangNhap
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        TimKiemKhoaHoc: (tuKhoa) => {
            dispatch(TimKiemKhoaHoc(tuKhoa))
        },

        DangXuat: () => {
            let cf = window.confirm("Bạn Chắc Chắn Muốn Đăng Xuất Chứ ?");
            if (cf) {
                dispatch(DangXuat())
            }
            return;
        },

        KiemTraThongTinCaNhan: () => {
            dispatch(KiemTraThongTinCaNhan())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)