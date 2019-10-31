import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { TimKiemNguoiDung, LayDanhSachKhoaHocChuaGhiDanh, layDanhSachKhoaHocDaXetDuyet, layDanhSachKhoaHocChoXetDuyet } from '../../../../Redux/Actions/Elearning.action';
import {LayDanhSachNguoiDung,XoaNguoiDung} from '../../../../Redux/Actions/QuanLyNguoiDung/QuanLyNguoiDung.action';
import ModalThem from './../../../../components/QuanLyNguoiDung/ModalThem';

class QuanLyNguoiDung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tieuDe: "",
            tuKhoa: ""
        }
    }

    componentDidMount() {
        this.props.layDanhSachNguoiDung();
    }

    chonNhom = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
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
                <tr key={key}>
                    <td>
                        <img src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png" alt="Card" style={{ width: '100%', height: "200px" }} />
                    </td>
                    <td>
                        <div class="alert alert-primary">
                            <strong>Họ Tên : </strong>{item.Name}
                        </div>

                        <div class="alert alert-primary">
                            <strong>Email : </strong>{item.Email}
                        </div>

                        <div class="alert alert-primary">
                            <strong>Số Điện Thoại : </strong>{item.Phone}
                        </div>
                    </td>
                    <td>
                        <button type="button" className="btn btn-info col-lg-12 mb-3" data-toggle="modal" data-target="#ModalKhoaHoc" onClick={() => this.daXetDuyet(item.taiKhoan)}>Đã Mua</button>
                        <button type="button" className="btn btn-info col-lg-12 mb-3" data-toggle="modal" data-target="#ModalKhoaHoc" onClick={() => this.choXetDuyet(item.taiKhoan)}>Chờ Duyệt</button>
                    </td>
                    <td>
                        <div className="form-group">
                            <select className="form-control">
                                <option>--Trạng Thái--</option>
                                <option>Ẩn</option>
                                <option>Hiển Thị</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option>--Phân Quyền--</option>
                                <option>Giảng Viên</option>
                                <option>Admin</option>
                            </select>
                        </div>

                        <button className="btn btn-danger col-lg-12" onClick={() => this.props.xoaUser(item.ID_User)}><i className="fas fa-trash-alt mr-2"></i>Xóa</button>
                    </td>
                </tr>
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
                        <button className="btn btn-success" onClick={() => this.props.TimKiemNguoiDung(this.state.tuKhoa)}><i className="fas fa-search"></i></button>
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
                        <button className="form-control btn btn-success" onClick={() => this.props.layDanhSachNguoiDung(this.state.maNhom)}><i className="fas fa-sort mr-2"></i>Lọc</button>
                    </div>
                </div>

                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th>Hình Ảnh</th>
                            <th>Thông Tin Người Dùng</th>
                            <th>Danh Sách Khóa Học</th>
                            <th><button className="btn btn-success container mb-3" data-toggle="modal" data-target="#myModal" onClick={() => this.them()}><i className="fas fa-calendar-plus mr-2"></i>Thêm</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>
                    <ModalThem tieuDe={this.state.tieuDe}/>
                </Table>

                <ul className="pagination pagination-lg justify-content-center">
                    <li className="page-item"><a className="page-link" href="a">1</a></li>
                    <li className="page-item"><a className="page-link" href="a">2</a></li>
                    <li className="page-item"><a className="page-link" href="a">3</a></li>
                </ul>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        DanhSachNguoiDung: state.QuanLyNguoiDungReducer.DanhSachNguoiDung
    }
}

const DispatchStateToProps = (dispatch) => {
    return {
        layDanhSachNguoiDung: () => {
            dispatch(LayDanhSachNguoiDung())
        },

        TimKiemNguoiDung: (tuKhoa) => {
            dispatch(TimKiemNguoiDung(tuKhoa))
        },

        xoaUser: (idUser) => {
            let cf = window.confirm('Bạn chắc chắn xoá người dùng này chứ ?')
            if (cf) {
                dispatch(XoaNguoiDung(idUser))
            }
            return;
        },

        layDanhSachKhoaHocDaXetDuyet: (taiKhoan) => {
            dispatch(layDanhSachKhoaHocDaXetDuyet(taiKhoan))
        },

        layDanhSachKhoaHocChoXetDuyet: (taiKhoan) => {
            dispatch(layDanhSachKhoaHocChoXetDuyet(taiKhoan))
        },
    }
}

export default connect(MapStateToProps, DispatchStateToProps)(QuanLyNguoiDung)
