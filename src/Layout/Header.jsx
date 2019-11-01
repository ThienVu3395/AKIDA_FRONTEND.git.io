import React, { Component } from 'react';
import './Header.css';
import { DangNhap } from '../Redux/Actions/Elearning.action';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maNhom: "GP01",
            timKiem: ""
        }
    }

    layThongTinInput = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    }

    hienThiDangNhap = () => {
        if (this.props.trangThaiDangNhap === 0) {
            return <div className="regis pl-2 pr-2" data-toggle="modal" data-target="#dangNhap"><i className="fas fa-users mr-2"></i>Đăng Ký / Đăng Nhập</div>;
        }
        else {
            let User = JSON.parse(localStorage.getItem('userLogin'));
            return (
                <div className="nav-item dropdown regis pl-2 pr-2">
                    <a className="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="asdasd"><i className="fas fa-user-cog mr-2"></i>Chào <span className="text-danger text-uppercase"><b>{User.hoTen}</b></span></a>
                    <div className="dropdown-menu">
                        <NavLink className="dropdown-item" to='/vao-hoc'><i className="fa fa-list-alt mr-2" aria-hidden="true"></i>Vào Học</NavLink>
                        <NavLink className="dropdown-item" to='/thong-tin-ca-nhan'><i className="fas fa-user mr-2"></i>Thông Tin Cá Nhân</NavLink>
                        <NavLink className="dropdown-item" to='/kich-hoat-khoa-hoc'><i className="fas fa-key mr-2"></i>Kích Hoạt Khóa Học</NavLink>
                        <NavLink className="dropdown-item" to='/nap-the'><i className="fa fa-credit-card mr-2" aria-hidden="true"></i>Nạp Thẻ</NavLink>
                        <hr />
                        <button className="dropdown-item"><i className="fas fa-sign-out-alt mr-2"></i>Đăng Xuất</button>
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
                                                <input type="text" className="form-control form-search" name="timKiem" placeholder="Nhập Tên Khóa Học..." onChange={this.layThongTinInput} />
                                                <div className="input-group-prepend input-search">
                                                    <NavLink to='/ket-qua' className="input-group-text"><i className="fas fa-search"></i></NavLink>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <div className="cart mr-2 pt-1" data-toggle="modal" data-target="#giohang"><i className="fas fa-shopping-cart"></i><span className="cart-quantity"><sup>{this.props.soLuongGioHang}</sup></span></div> */}
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

                {/* Modal Đăng Nhập - Đăng Ký */}
                <div className="modal fade" id="dangNhap">
                    <div className="modal-dialog">
                        <div className="modal-content container">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#home">Đăng Nhập</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#menu1">Đăng Ký</a>
                                    </li>
                                </ul>
                                <button type="button" className="close" id="close" data-dismiss="modal">×</button>
                            </div>

                            {/* Modal Body */}
                            <div className="modal-body">
                                <div className="tab-content">
                                    {/* Form Đăng Nhập */}
                                    <div id="home" className="container tab-pane active"><br />
                                        <input type="text" className="form-control mb-3" name="tkDN" placeholder="Nhập Email Hoặc Số Điện Thoại" onChange={this.layThongTinInput} />

                                        <input type="password" className="form-control mb-3" name="mkDN" placeholder="Mật Khẩu Từ 6-32 Ký Tự" onChange={this.layThongTinInput} />

                                        <p className="text-center">Bạn Quên Mật Khẩu ? Nhấn Vào <a href="asdas.html">Đây</a></p>

                                        <button className="btn btn-success container" onClick={() => this.props.dangNhap(this.state.tkDN, this.state.mkDN)} data-dismiss="modal">Đăng Nhập</button>
                                        <hr />
                                        <button className="btn fb container fb mb-3"><i className="fab fa-facebook-f mr-2"></i>Đăng Nhập Bằng Facebook</button>

                                        <button className="btn gg container gg"><i className="fab fa-google mr-2"></i>Đăng Nhập Bằng Google</button>
                                    </div>

                                    {/* Form Đăng Ký */}
                                    <div id="menu1" className="container tab-pane fade"><br />
                                        <div className="row">
                                            <div className="form-group col-12">
                                                <label>Mã Nhóm :</label>
                                                <select className="form-control" name="maNhom" defaultValue={this.state.maNhom} onChange={this.layThongTinInput}>
                                                    <option value="GP01">GP01</option>
                                                    <option value="GP02">GP02</option>
                                                </select>
                                            </div>
                                        </div>

                                        <input type="text" className="form-control mb-3" name="taiKhoan" placeholder="Tài Khoản ( Bắt Buộc )" required onChange={this.layThongTinInput} />

                                        <input type="password" className="form-control mb-3" name="matKhau" placeholder="Mật Khẩu Từ 6-32 Ký Tự ( Bắt Buộc ) " required onChange={this.layThongTinInput} />

                                        <input type="text" className="form-control mb-3" name="hoTen" placeholder="Nhập Họ Tên ( Bắt Buộc )" required onChange={this.layThongTinInput} />

                                        <input type="text" className="form-control mb-3" name="soDT" placeholder="Nhập Số Điện Thoại ( Bắt Buộc ) " required onChange={this.layThongTinInput} />

                                        <input type="email" className="form-control mb-3" name="email" placeholder="Nhập Email ( Tùy Chọn ) " onChange={this.layThongTinInput} />

                                        <span className="container btn btn-success mb-1 mt-2" onClick={() => this.props.dangKy(this.state.taiKhoan, this.state.matKhau, this.state.hoTen, this.state.soDT, this.state.maNhom, this.state.email)}>Đăng Ký</span>
                                        <hr />
                                        <button className="btn fb container fb mb-3"><i className="fab fa-facebook-f mr-2"></i>Đăng Ký Bằng Facebook</button>
                                        <button className="btn gg container gg"><i className="fab fa-google mr-2"></i>Đăng Ký Bằng Google</button>
                                    </div>
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
        trangThaiDangNhap: state.ElearningReducer.trangThaiDangNhap,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dangNhap: (taiKhoan, matKhau) => {
            dispatch(DangNhap(taiKhoan, matKhau))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)