import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from './../../../../components/Modal';
import ModalKhoaHoc from './../../../../components/ModalDanhSachKhoaHoc';
import { LayDanhSachNguoiDung, TimKiemNguoiDung, XoaNguoiDung, XemThongTin, LayDanhSachKhoaHocChuaGhiDanh, layDanhSachKhoaHocDaXetDuyet, layDanhSachKhoaHocChoXetDuyet } from '../../../../Redux/Actions/Elearning.action';

class QuanLyNguoiDung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: "",
            tieuDe: "",
            tuKhoa: "",
            maNhom : "GP01"
        }
    }

    componentDidMount() {
        this.props.layDanhSachNguoiDung(this.state.maNhom);
    }

    chonNhom = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    }

    sua = (taiKhoan) => {
        this.setState({
            tieuDe: "Sửa Người Dùng",
        })
        this.props.XemThongTinCanSua(taiKhoan)
    }

    them = () => {
        this.setState({
            tieuDe: "Thêm Người Dùng Mới",
        })
    }

    daXetDuyet = (tk) => {
        this.setState({
            tieuDe: "Danh Sách Đã Xét Duyệt",
            trangThai: "daXD",
            taiKhoan: tk
        })
        this.props.layDanhSachKhoaHocDaXetDuyet(tk)
    }

    choXetDuyet = (tk) => {
        this.setState({
            tieuDe: "Danh Sách Chờ Xét Duyệt",
            trangThai: "choXD",
            taiKhoan: tk
        })
        this.props.layDanhSachKhoaHocChoXetDuyet(tk)
    }

    chuaGhiDanh = (tk) => {
        this.setState({
            tieuDe: "Danh Sách Chưa Ghi Danh",
            trangThai: "chuaGD",
            taiKhoan: tk
        })
        this.props.LayDanhSachKhoaHocChuaGhiDanh(tk)
    }

    timKiem = (event) => {
        const input = event.target;
        this.setState({
            tuKhoa: input.value
        })
        if (this.state.tuKhoa === "") {
            this.props.layDanhSachNguoiDung();
        }
    }

    renderUsers = () => {
        let content = this.props.DanhSachNguoiDung.map((item, key) => {
            return (
                <div className="col-lg-4 mb-3" key={key}>
                    <div className="card p-3">
                        <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png" alt="Card" style={{ width: '100%' }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-info">{item.hoTen}</h4>
                            <h4 className="card-title text-info">{item.taiKhoan}</h4>
                            <p className="card-text" style={{ minWidth: "300px" }}><i className="fas fa-envelope mr-2"></i><a href="mailto:{item.email}" className="text-success">{item.email}</a></p>
                            <p className="card-text"><i className="fas fa-phone mr-2"></i><a href="tel:{item.soDt}" className="text-success">{item.soDt}</a></p>
                            <button type="button" className="btn btn-success mb-3" data-toggle="modal" data-target="#ModalKhoaHoc" onClick={() => this.daXetDuyet(item.taiKhoan)}>Khóa Học Đã Xét Duyệt</button>
                            <button type="button" className="btn btn-success mb-3" data-toggle="modal" data-target="#ModalKhoaHoc" onClick={() => this.choXetDuyet(item.taiKhoan)}>Khóa Học Chờ Xét Duyệt</button>
                            <button type="button" className="btn btn-success mb-3" data-toggle="modal" data-target="#ModalKhoaHoc" onClick={() => this.chuaGhiDanh(item.taiKhoan)}>Khóa Học Chưa Đăng Ký</button>
                            <ModalKhoaHoc tieuDe={this.state.tieuDe} trangThai={this.state.trangThai} taiKhoan={this.state.taiKhoan} />
                            <div className="row">
                                <button className="btn btn-info col-lg-6" data-toggle="modal" data-target="#myModal" onClick={() => this.sua(item.taiKhoan)}>Sửa</button>
                                <button className="btn btn-danger col-lg-6" onClick={() => this.props.xoaUser(item.taiKhoan)}>Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return content;
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Trang Quản Lý Người Dùng</h2>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="tuKhoa" placeholder="Tìm người dùng theo tài khoản hoặc họ tên..." onKeyUp={this.timKiem} />
                    <div className="input-group-append">
                        <button className="btn btn-success" onClick={() => this.props.TimKiemNguoiDung(this.state.tuKhoa)}>Tìm Kiếm</button>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-lg-3">
                        <select className="form-control" name="maNhom" onChange={this.chonNhom}>
                            <option value="GP01">GP01</option>
                            <option value="GP02">GP02</option>
                        </select>
                    </div>

                    <div className="form-group col-lg-2">
                        <button className="form-control btn btn-success" onClick={() => this.props.layDanhSachNguoiDung(this.state.maNhom)}>Lọc Người Dùng</button>
                    </div>

                    <div className="col-lg-3">
                        <button className="btn btn-success mb-3" data-toggle="modal" data-target="#myModal" onClick={() => this.them()}>Thêm Người Dùng</button>
                    </div>
                </div>
                <div className="row">
                    {this.renderUsers()}
                </div>
                <Modal tieuDe={this.state.tieuDe} />
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        DanhSachNguoiDung: state.ElearningReducer.DanhSachNguoiDung
    }
}

const DispatchStateToProps = (dispatch) => {
    return {
        layDanhSachNguoiDung: (maNhom) => {
            dispatch(LayDanhSachNguoiDung(maNhom))
        },

        TimKiemNguoiDung: (tuKhoa) => {
            dispatch(TimKiemNguoiDung(tuKhoa))
        },

        xoaUser: (tk) => {
            let cf = window.confirm('Bạn chắc chắn xoá người dùng này chứ ?')
            if (cf) {
                dispatch(XoaNguoiDung(tk))
            }
            return;
        },

        XemThongTinCanSua: (taiKhoan) => {
            dispatch(XemThongTin(taiKhoan))
        },

        layDanhSachKhoaHocDaXetDuyet: (taiKhoan) => {
            dispatch(layDanhSachKhoaHocDaXetDuyet(taiKhoan))
        },

        layDanhSachKhoaHocChoXetDuyet: (taiKhoan) => {
            dispatch(layDanhSachKhoaHocChoXetDuyet(taiKhoan))
        },

        LayDanhSachKhoaHocChuaGhiDanh: (taiKhoan) => {
            dispatch(LayDanhSachKhoaHocChuaGhiDanh(taiKhoan))
        }
    }
}

export default connect(MapStateToProps, DispatchStateToProps)(QuanLyNguoiDung)
