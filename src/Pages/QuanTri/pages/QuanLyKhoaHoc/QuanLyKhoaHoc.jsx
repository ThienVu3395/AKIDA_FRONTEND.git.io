import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalThem from '../../../../components/QuanLyKhoaHoc/ModalThem';
import ModalSua from '../../../../components/QuanLyKhoaHoc/ModalSua';
import ModalDanhSach from '../../../../components/QuanLyKhoaHoc/ModalDanhSach';
import { Table } from 'react-bootstrap';

class QuanLyKhoaHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai: "",
            maKhoaHoc: "",
            maNhom: "GP01",
            maDanhMuc: "all"
        }
    }

    componentDidMount() {

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
                            {/* {this.renderDanhMuc()} */}
                        </select>
                    </div>

                    <div className="form-group col-lg-2">
                        <button className="form-control btn btn-success"><i className="fas fa-sort mr-2"></i>Lọc</button>
                    </div>
                </div>

                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th>Hình Ảnh</th>
                            <th>Thông Tin Khóa Học</th>
                            <th>Danh Sách Người Dùng</th>
                            <th><button className="form-control btn btn-success" data-toggle="modal" data-target="#ModalThem"><i className="fas fa-calendar-plus mr-2"></i>Thêm</button>
                            <button className="form-control btn btn-info" data-toggle="modal" data-target="#ModalSua"><i className="fas fa-calendar-plus mr-2"></i>Sửa</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.renderKhoaHoc()} */}
                    </tbody>
                    <ModalThem tieuDe={"Thêm Khóa Học Mới"} />
                    <ModalSua tieuDe={"Sửa Khóa Học"} />
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


const mapStateToProps = (state) => {
    return {

    }
}

const DispatchStateToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, DispatchStateToProps)(QuanLyKhoaHoc)
