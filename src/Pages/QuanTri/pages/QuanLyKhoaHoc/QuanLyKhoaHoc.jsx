import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalQLKH from '../../../../components/ModalQuanLyKhoaHoc';
import { layDanhSachKhoaHoc, layKhoaHocTheoDanhMuc, layDanhMucKhoaHoc, timKiemKhoaHoc, suaKhoaHoc, xoaKhoaHoc, layDanhSachNguoiDungDaDangKy, layDanhSachNguoiDungChoXetDuyet, layDanhSachNguoiDungChuaGhiDanh } from '../../../../Redux/Actions/Elearning.action';
import ModalLayDanhSach from '../../../../components/ModalLayDanhSachQLKH';
import { Table } from 'react-bootstrap';

class QuanLyKhoaHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: "",
            maKhoaHoc: "",
            tieuDe: "",
            maNhom: "GP01",
            maDanhMuc: "all"
        }
    }

    componentDidMount() {
        this.props.layDanhSachKhoaHoc(this.state.maNhom)
        this.props.layDanhMuc();
    }

    chonNhom = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    }

    renderDanhMuc = () => {
        let content = this.props.danhSachDanhMuc.map((item, key) => {
            return (
                <option value={item.maDanhMuc} key={key}>{item.tenDanhMuc}</option>
            )
        })
        return content;
    }

    them = () => {
        this.setState({
            tieuDe: "Thêm Khóa Học Mới"
        })
    }

    sua = (maKH) => {
        this.setState({
            tieuDe: "Sửa Thông Tin Khóa Học"
        })
        this.props.xemThongTinKhoaHocCanSua(maKH);
    }

    daGD = (maKH) => {
        this.setState({
            trangThai: "daGD",
            tieuDe: "Danh Sách Người Đã Đăng Ký"
        })
        this.props.layDanhSachNguoiDungDaDangKy(maKH)
    }

    choXD = (maKH) => {
        this.setState({
            trangThai: "choXD",
            tieuDe: "Danh Sách Người Dùng Chờ Xét Duyệt",
            maKhoaHoc: maKH
        })
        this.props.layDanhSachNguoiDungChoXetDuyet(maKH)
    }

    chuaGD = (maKH) => {
        this.setState({
            trangThai: "chuaGD",
            tieuDe: "Danh Sách Người Dùng Chưa Ghi Danh"
        })
        this.props.layDanhSachNguoiDungChuaGhiDanh(maKH)
    }

    timKiem = (event) => {
        const input = event.target;
        this.setState({
            tuKhoa: input.value
        })

        if (this.state.tuKhoa === "") {
            this.props.layDanhSachKhoaHoc(this.state.maNhom);
        }
    }

    renderKhoaHoc = () => {
        let content = this.props.danhSachKhoaHoc.map((item, key) => {
            return (
                <tr key={key}>
                    <td>
                        <img src="https://codegym.vn/wp-content/uploads/2018/12/lap-trinh-c-la-gi-8.jpg" alt="Card" style={{ width: '100%', height: "150px" }} />
                    </td>
                    <td>
                        <div class="alert alert-primary">
                            <strong>Tên Khóa Học : </strong>{item.tenKhoaHoc}
                        </div>

                        <div class="alert alert-primary">
                            <strong>Giảng Viên : </strong>{item.tenKhoaHoc}
                        </div>
                    </td>
                    <td>
                        <button type="button" className="btn btn-info mb-3 col-lg-12" data-toggle="modal" data-target="#ModalLayDanhSachQLKH" onClick={() => this.daGD(item.maKhoaHoc)}>Đã Mua</button>
                        <button type="button" className="btn btn-info mb-3 col-lg-12" data-toggle="modal" data-target="#ModalLayDanhSachQLKH" onClick={() => this.choXD(item.maKhoaHoc)}>Chờ Duyệt</button>
                        {/* <button type="button" className="btn btn-info col-lg-12" data-toggle="modal" data-target="#ModalLayDanhSachQLKH" onClick={() => this.chuaGD(item.maKhoaHoc)}>Chưa Mua</button> */}

                    </td>

                    <td>
                        <div className="form-group">
                            <select className="form-control" id="sel1">
                                <option>--Trạng Thái--</option>
                                <option>Ẩn</option>
                                <option>Hiển Thị</option>
                            </select>
                        </div>
                        <button className="btn btn-primary mb-3 col-lg-12" data-toggle="modal" data-target="#ModalQLKH" onClick={() => this.sua(item.maKhoaHoc)}><i className="fas fa-edit mr-2"></i>Sửa</button>
                        <button className="btn btn-danger col-lg-12" onClick={() => this.props.xoaKhoaHoc(item.maKhoaHoc)}><i className="fas fa-trash-alt mr-2"></i>Xóa</button>
                    </td>
                    <ModalLayDanhSach trangThai={this.state.trangThai} tieuDe={this.state.tieuDe} maKhoaHoc={this.state.maKhoaHoc} />
                </tr>
            )
        })
        return content;
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Trang Quản Lý Khóa Học</h2>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="tuKhoa" placeholder="Tìm khóa học theo tên..." onKeyUp={this.timKiem} />
                    <div className="input-group-append">
                        <button className="btn btn-success" onClick={() => this.props.timKiemKhoaHoc(this.state.maNhom, this.state.tuKhoa)}><i className="fas fa-search"></i></button>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-lg-3">
                        <select className="form-control" name="maNhom" onChange={this.chonNhom}>
                            <option value="GP01">GP01</option>
                            <option value="GP02">GP02</option>
                        </select>
                    </div>

                    <div className="form-group col-lg-3">
                        <select className="form-control" name="maDanhMuc" onChange={this.chonNhom}>
                            <option value="all">---Tất Cả---</option>
                            {this.renderDanhMuc()}
                        </select>
                    </div>

                    <div className="form-group col-lg-2">
                        <button className="form-control btn btn-success" onClick={() => this.props.layKhoaHocTheoDanhMuc(this.state.maDanhMuc, this.state.maNhom)}><i className="fas fa-sort mr-2"></i>Lọc</button>
                    </div>
                </div>

                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th>Hình Ảnh</th>
                            <th>Thông Tin Khóa Học</th>
                            <th>Danh Sách Người Dùng</th>
                            <th><button className="form-control btn btn-success" data-toggle="modal" data-target="#ModalQLKH" onClick={() => this.them()}><i className="fas fa-calendar-plus mr-2"></i>Thêm</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderKhoaHoc()}
                    </tbody>
                </Table>

                <ul className="pagination pagination-lg justify-content-center">
                    <li className="page-item"><a className="page-link" href="a">1</a></li>
                    <li className="page-item"><a className="page-link" href="a">2</a></li>
                    <li className="page-item"><a className="page-link" href="a">3</a></li>
                </ul>

                <ModalQLKH tieuDe={this.state.tieuDe} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        danhSachKhoaHoc: state.ElearningReducer.danhSachKhoaHocTheoDanhMuc,
        danhSachDanhMuc: state.ElearningReducer.danhSachDanhMuc
    }
}

const DispatchStateToProps = (dispatch) => {
    return {
        layDanhSachKhoaHoc: (maNhom) => {
            dispatch(layDanhSachKhoaHoc(maNhom))
        },

        layKhoaHocTheoDanhMuc: (maDanhMuc, maNhom) => {
            dispatch(layKhoaHocTheoDanhMuc(maDanhMuc, maNhom))
        },

        layDanhMuc: () => {
            dispatch(layDanhMucKhoaHoc())
        },

        timKiemKhoaHoc: (maNhom, tuKhoa) => {
            dispatch(timKiemKhoaHoc(maNhom, tuKhoa))
        },

        xemThongTinKhoaHocCanSua: (maKH) => {
            dispatch(suaKhoaHoc(maKH))
        },

        xoaKhoaHoc: (maKhoaHoc) => {
            let cf = window.confirm("Bạn Chắc Chắn Xóa Khóa Học Này Chứ ?");
            if (cf) {
                dispatch(xoaKhoaHoc(maKhoaHoc));
            }
            return;
        },

        layDanhSachNguoiDungDaDangKy: (maKH) => {
            dispatch(layDanhSachNguoiDungDaDangKy(maKH))
        },

        layDanhSachNguoiDungChoXetDuyet: (maKH) => {
            dispatch(layDanhSachNguoiDungChoXetDuyet(maKH))
        },

        layDanhSachNguoiDungChuaGhiDanh: (maKH) => {
            dispatch(layDanhSachNguoiDungChuaGhiDanh(maKH))
        },
    }
}

export default connect(mapStateToProps, DispatchStateToProps)(QuanLyKhoaHoc)
