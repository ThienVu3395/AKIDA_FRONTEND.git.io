import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalThem from '../../../../components/QuanLyKhoaHoc/ModalThem';
import ModalSua from '../../../../components/QuanLyKhoaHoc/ModalSua';
import ModalDanhSach from '../../../../components/QuanLyKhoaHoc/ModalDanhSach';
import { Table } from 'react-bootstrap';
import { LayDanhSachKhoaHoc } from '../../../../Redux/Actions/QuanLyKhoaHoc/QuanLyKhoaHoc.action';
import { LayDanhSachDanhMuc } from '../../../../Redux/Actions/HomePage/HomePage.action';

class QuanLyKhoaHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.LayDanhSachKhoaHoc();
        this.props.LayDanhSachDanhMuc()
    }

    renderKhoaHoc = () => {
        return this.props.dsKhoaHoc.map((item, key) => {
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
                            <strong>Tên Khóa Học : </strong>{item.Name}
                        </div>

                        <div className="alert alert-primary">
                            <strong>Giảng Viên : </strong>{item.Author}
                        </div>

                        <div className="alert alert-primary">
                            <strong>Danh Mục : </strong>{item.Category_ID}
                        </div>

                        <div className="alert alert-primary">
                            <strong>Số Người Học : </strong>{item.Number_Of_Participants}
                        </div>
                    </td>

                    <td>
                        <button className="form-control btn btn-primary mb-3" data-toggle="modal" data-target="#ModalDanhSachKhoaHoc"><i className="fas fa-list"></i></button>
                        <ModalDanhSach />
                        <button className="form-control btn btn-info mb-3" data-toggle="modal" data-target="#ModalSua"><i className="fas fa-calendar-plus"></i></button>
                        <button className="form-control btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                    </td>
                </tr>
            )
        })
    }

    // timKiem = (event) => {
    //     const input = event.target;
    //     this.setState({
    //         tuKhoa: input.value
    //     })

    //     if (this.state.tuKhoa === "") {
    //         this.props.layDanhSachKhoaHoc(this.state.maNhom);
    //     }
    // }
    render() {
        return (
            <div style={{ width: "70%", margin: "0 auto" }}>
                <h2 className="text-center mb-4">Trang Quản Lý Khóa Học</h2>
                {/* <div className="input-group mb-3">
                    <input type="text" className="form-control" name="tuKhoa" placeholder="Tìm khóa học theo tên..." onKeyUp={this.timKiem} />
                    <div className="input-group-append">
                        <button className="btn btn-success"><i className="fas fa-search"></i></button>
                    </div>
                </div> */}
                <div className="row">
                    <div className="form-group col-lg-3">
                        <select className="form-control" name="maDanhMuc">
                            <option value="all">-- Danh Mục --</option>
                            {
                                this.props.dsDanhMuc.map((item, key) => {
                                    return (
                                        <option key={key} value={item.ID_Category}>{item.Name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group col-lg-3">
                        <select className="form-control" name="maNhom">
                            <option>-- Trạng Thái --</option>
                            <option value="GP01">Hiện</option>
                            <option value="GP02">Ẩn</option>
                        </select>
                    </div>


                    <div className="form-group col-lg-3">
                        <button className="form-control btn btn-success"><i className="fas fa-sort mr-2"></i>Lọc</button>
                    </div>

                    <div className="form-group col-lg-3">
                        <button className="form-control btn btn-success" data-toggle="modal" data-target="#ModalThem"><i className="fas fa-calendar-plus"></i></button>
                        <ModalThem tieuDe={"Thêm Khóa Học Mới"} />
                    </div>
                </div>

                <Table striped bordered hover responsive="md" size="sm">
                    <thead>
                        <tr>
                            <th>Hình Ảnh</th>
                            <th>Thông Tin Khóa Học</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderKhoaHoc()}
                        <ModalSua tieuDe={"Sửa Khóa Học"} />
                    </tbody>
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
        dsKhoaHoc: state.QuanLyKhoaHocReducer.DanhSachKhoaHoc,
        dsDanhMuc: state.HomePageReducer.DanhSachDanhMuc
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        LayDanhSachKhoaHoc: () => {
            dispatch(LayDanhSachKhoaHoc())
        },

        LayDanhSachDanhMuc: () => {
            dispatch(LayDanhSachDanhMuc())
        }
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(QuanLyKhoaHoc)
