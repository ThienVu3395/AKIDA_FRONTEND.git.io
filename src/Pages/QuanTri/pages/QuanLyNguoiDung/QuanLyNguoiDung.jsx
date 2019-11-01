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
        this.props.layDanhSachNguoiDung();
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
                        <button type="button" className="btn btn-info col-lg-12 mb-3" data-toggle="modal" data-target="#ModalDanhSachNguoiDung">Đã Mua</button>
                        <button type="button" className="btn btn-info col-lg-12 mb-3" data-toggle="modal" data-target="#ModalDanhSachNguoiDung">Chờ Duyệt</button>
                    </td>
                    <td>
                        <button className="btn btn-danger col-lg-12 mb-3" onClick={() => this.props.xoaUser(item.ID_User)}><i className="fas fa-trash-alt mr-2"></i>Xóa</button>
                        {this.state.trangThaiSua === "0" ?
                            <button className="btn btn-primary col-lg-12" onClick={()=>this.setState({trangThaiSua : "1"})}><i className="fas fa-edit mr-2"></i>Tùy Chỉnh</button> :
                            <div className="container">
                                <div className="row">
                                    <button className="btn btn-info col-lg-6"><i className="fas fa-edit mr-2"></i>Cập Nhật</button>
                                    <button className="btn btn-primary col-lg-6" onClick={()=>this.setState({trangThaiSua : "0"})}><i class="fas fa-window-close mr-2"></i>Hủy</button>
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
            <div className="container">
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
                            <option>---Trạng Thái---</option>
                            <option value="GP01">GP01</option>
                            <option value="GP02">GP02</option>
                        </select>
                    </div>

                    <div className="form-group col-lg-3">
                        <select className="form-control" name="maNhom" onChange={this.chonNhom}>
                            <option>---Quyền---</option>
                            <option value="GP01">TeamMember</option>
                            <option value="GP02">User</option>
                        </select>
                    </div>

                    <div className="form-group col-lg-3">
                        <button className="form-control btn btn-success"><i className="fas fa-sort mr-2"></i>Lọc</button>
                    </div>
                </div>

                <Table striped bordered hover responsive="md">
                    <thead>
                        <tr>
                            <th>Hình Ảnh</th>
                            <th>Thông Tin Người Dùng</th>
                            <th>Danh Sách Khóa Học</th>
                            <th><button className="btn btn-success container mb-3" data-toggle="modal" data-target="#myModal"><i className="fas fa-calendar-plus mr-2"></i>Thêm</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUsers()}
                    </tbody>
                    <ModalThem tieuDe={"Thêm Người Dùng Mới"} />
                    <ModalDanhSach/>
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
