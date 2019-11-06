import React, { Component } from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class KichHoatKhoaHoc extends Component {
    render() {
        if (this.props.TrangThaiDangNhap === 0) {
            return <Redirect to='/trang-chu' />
        }
        return (
            <>
                <Header />
                <div className="container">
                    <div className="text-center">
                        <h3 className="p-3">KÍCH HOẠT KHÓA HỌC</h3>
                        <p>Lưu ý: Mỗi khoá học chỉ cần kích hoạt 1 lần duy nhất.</p>
                        <form action="" className="was-validated">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nhập Mã Kích Hoạt , Ví Dụ : 130E3157B8" name="uname" required />
                                <div className="invalid-feedback">Mã Coupon Không Được Trống</div>
                                <button className="btn btn-danger mt-3"><i className="fas fa-unlock-alt mr-2"></i>Kích Hoạt Ngay</button>
                            </div>
                        </form>
                        <p>Hỗ trợ: <a href="tel:12345">012345</a> - <a href="tel:12345">067896</a></p>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        TrangThaiDangNhap: state.HomePageReducer.TrangThaiDangNhap
    }
}


export default connect(mapStateToProps, null)(KichHoatKhoaHoc)