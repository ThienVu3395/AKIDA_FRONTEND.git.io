import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { XoaNguoiDung, TimKiemNguoiDung } from '../../../../Redux/Actions/QuanLyNguoiDung/QuanLyNguoiDung.action';
import ModalThem from './../../../../components/QuanLyNguoiDung/ModalThem';
import ModalDanhSach from './../../../../components/QuanLyNguoiDung/ModalDanhSach';

class QuanLyNguoiDung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tuKhoa: "",
            trangThaiSua: "0",
            Role: "0",
            Activated: "-1"
        }
    }

    componentDidMount() {
        this.props.TimKiemNguoiDung(this.state.Role,this.state.Activated);
    }

    chonNhom = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    }


    renderUsers = () => {
        let length = this.props.DanhSachNguoiDung.length;
        let content;
        if (length === 0) {
            return content = (
                <div className="col-12 text-center">
                    <img src="http://tatnhapkhau.com/images/page_not_found.jpg" alt="imgs"/>
                </div>
            )
        }
        content = this.props.DanhSachNguoiDung.map((item, key) => {
            return (
                <tr key={key}>
                    <td>
                        <img src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png" alt="Card" style={{ width: '100%', height: "200px" }} />
                        <div className="alert alert-danger text-center mt-2">
                            <strong>{key + 1}</strong>
                        </div>
                    </td>
                    <td>
                        <div className="alert alert-primary">
                            <strong>Họ Tên : </strong>{item.Name}
                            <strong> ( TeamMember )</strong>
                        </div>

                        <div className="alert alert-primary">
                            <strong>Email : </strong>{item.Email}
                        </div>

                        <div className="alert alert-primary">
                            <strong>Số Điện Thoại : </strong>{item.Phone}
                        </div>

                        <div className="alert alert-primary">
                            <strong>AKIDA Coins : </strong>{item.AKIDA_Number}
                        </div>
                    </td>
                    <td>
                        <button className="form-control btn btn-primary mb-3" data-toggle="tooltip" title="Xem Danh Sách" data-toggle="modal" data-target="#ModalDanhSachNguoiDung"><i className="fas fa-list"></i></button>
                        <button className="form-control btn btn-danger mb-3" onClick={() => this.props.XoaUser(item.ID_User)} data-toggle="tooltip" title="Xóa User Này"><i className="fas fa-trash-alt"></i></button>
                        {this.state.trangThaiSua === "0" ?
                            <button className="form-control btn btn-primary" onClick={() => this.setState({ trangThaiSua: "1" })} data-toggle="tooltip" title="Tùy Chỉnh"><i className="fas fa-user-cog"></i></button> :
                            <div className="container">
                                <div className="row">
                                    <button className="btn btn-info col-lg-6" data-toggle="tooltip" title="Cập Nhật!"><i className="fas fa-edit"></i></button>
                                    <button className="btn btn-primary col-lg-6" onClick={() => this.setState({ trangThaiSua: "0" })} data-toggle="tooltip" title="Hủy Tùy Chỉnh"><i className="fas fa-window-close"></i></button>
                                </div>
                                <div className="form-group mt-3">
                                    <label>Trạng Thái</label>
                                    <select className="form-control">
                                        <option>Ẩn</option>
                                        <option>Hiển Thị</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Phân Quyền</label>
                                    <select className="form-control">
                                        <option>Giảng Viên</option>
                                        <option>Admin</option>
                                    </select>
                                </div>
                            </div>
                        }
                    </td>
                </tr>
            )
        })
        return content;
    }
    render() {
        return (
            <div style={{ width: "70%", margin: "0 auto" }}>
                <h2 className="text-center mb-4">Trang Quản Lý Người Dùng</h2>
                {/* <div className="input-group mb-3">
                    <input type="text" className="form-control" name="tuKhoa" placeholder="Tìm người dùng theo tài khoản hoặc họ tên..." onKeyUp={this.timKiem} />
                    <div className="input-group-append">
                        <button className="btn btn-success"><i className="fas fa-search"></i></button>
                    </div>
                </div> */}

                <div className="row">
                    <div className="form-group col-lg-3">
                        <select className="form-control" name="Role" defaultValue={this.state.Role} onChange={this.chonNhom}>
                            <option value="0">-- Quyền --</option>
                            <option value="2">TeamMember</option>
                            <option value="3">User</option>
                        </select>
                    </div>

                    <div className="form-group col-lg-3">
                        <select className="form-control" name="Activated" defaultValue={this.state.Activated} onChange={this.chonNhom}>
                            <option value="-1">-- Trạng Thái --</option>
                            <option value="1">Hiển Thị</option>
                            <option value="0">Ẩn</option>
                        </select>
                    </div>

                    <div className="form-group col-lg-3">
                        <button className="form-control btn btn-success" onClick={() => this.props.TimKiemNguoiDung(this.state.Role, this.state.Activated)}><i className="fas fa-sort mr-2"></i>Lọc</button>
                    </div>

                    <div className="form-group col-lg-3">
                        <button className="btn btn-success container mb-3" data-toggle="tooltip" title="Thêm User Mới" data-toggle="modal" data-target="#myModal"><i className="fas fa-calendar-plus mr-2"></i></button>
                        <ModalThem tieuDe={"Thêm Người Dùng Mới"} />
                    </div>
                </div>

                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th>Hình Ảnh</th>
                            <th>Thông Tin Người Dùng</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>
                    <ModalDanhSach />
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
        TimKiemNguoiDung: (Role, Activated) => {
            dispatch(TimKiemNguoiDung(Role, Activated))
        },

        XoaUser: (idUser) => {
            let cf = window.confirm('Bạn chắc chắn xoá người dùng này chứ ?')
            if (cf) {
                dispatch(XoaNguoiDung(idUser))
            }
            return;
        },
    }
}

export default connect(MapStateToProps, DispatchStateToProps)(QuanLyNguoiDung)
