import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { LayDanhSachNguoiDung, XoaNguoiDung } from '../../../../Redux/Actions/QuanLyNguoiDung/QuanLyNguoiDung.action';
import ModalThem from './../../../../components/QuanLyNguoiDung/ModalThem';
import ModalDanhSach from './../../../../components/QuanLyNguoiDung/ModalDanhSach';

class QuanLyNguoiDung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tuKhoa: "",
            trangThaiSua: "0"
        }
    }

    componentDidMount() {
        this.props.LayDanhSachNguoiDung();
    }

    chonNhom = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    }

    renderUsers = () => {
        let content = this.props.DanhSachNguoiDung.map((item, key) => {
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

                        <button type="button" className="form-control btn btn-primary mb-3" data-toggle="modal" data-target="#ModalDanhSachNguoiDung"><i className="fas fa-list"></i></button>
                        <button className="form-control btn btn-danger mb-3" onClick={() => this.props.xoaUser(item.ID_User)}><i className="fas fa-trash-alt"></i></button>
                        {this.state.trangThaiSua === "0" ?
                            <button className="form-control btn btn-primary" onClick={() => this.setState({ trangThaiSua: "1" })}><i className="fas fa-user-cog"></i></button> :
                            <div className="container">
                                <div className="row">
                                    <button className="btn btn-info col-lg-6"><i className="fas fa-edit"></i></button>
                                    <button className="btn btn-primary col-lg-6" onClick={() => this.setState({ trangThaiSua: "0" })}><i className="fas fa-window-close"></i></button>
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
            <div style={{width:"70%",margin:"0 auto"}}>
                <h2 className="text-center">Trang Quản Lý Người Dùng</h2>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="tuKhoa" placeholder="Tìm người dùng theo tài khoản hoặc họ tên..." onKeyUp={this.timKiem} />
                    <div className="input-group-append">
                        <button className="btn btn-success"><i className="fas fa-search"></i></button>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-lg-3">
                        <select className="form-control" name="maNhom" onChange={this.chonNhom}>
                            <option>-- Quyền --</option>
                            <option value="GP01">TeamMember</option>
                            <option value="GP02">User</option>
                        </select>
                    </div>

                    <div className="form-group col-lg-3">
                        <select className="form-control" name="maNhom" onChange={this.chonNhom}>
                            <option>-- Trạng Thái --</option>
                            <option value="GP01">Hiển Thị</option>
                            <option value="GP02">Ẩn</option>
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
                            <th>Thông Tin Người Dùng</th>
                            <th><button className="btn btn-success container mb-3" data-toggle="modal" data-target="#myModal"><i className="fas fa-calendar-plus mr-2"></i></button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>
                    <ModalThem tieuDe={"Thêm Người Dùng Mới"} />
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
        LayDanhSachNguoiDung: () => {
            dispatch(LayDanhSachNguoiDung())
        },

        xoaUser: (idUser) => {
            let cf = window.confirm('Bạn chắc chắn xoá người dùng này chứ ?')
            if (cf) {
                dispatch(XoaNguoiDung(idUser))
            }
            return;
        },
    }
}

export default connect(MapStateToProps, DispatchStateToProps)(QuanLyNguoiDung)
