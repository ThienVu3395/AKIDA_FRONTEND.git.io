import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalThem from '../../../../components/QuanLyKhoaHoc/ModalThem';
import ModalSua from '../../../../components/QuanLyKhoaHoc/ModalSua';
import ModalDanhSach from '../../../../components/QuanLyKhoaHoc/ModalDanhSach';
import { Table, Pagination } from 'react-bootstrap';
import { LayDanhSachKhoaHocTheoTuyChon, XemThongTinKhoaHoc, XoaKhoaHoc, PhanTrangKhoaHoc } from '../../../../Redux/Actions/QuanLyKhoaHoc/QuanLyKhoaHoc.action';
import { LayDanhSachDanhMuc } from '../../../../Redux/Actions/HomePage/HomePage.action';

class QuanLyKhoaHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: "",
            Category_ID: "all",
            Enabled: "-1",
            PageSelected : 1
        }
    }

    componentDidMount() {
        this.props.LayDanhSachKhoaHocTheoTuyChon(this.state.Category_ID, this.state.Enabled);
        this.props.LayDanhSachDanhMuc();
    }

    XemThongTin = (idKH) => {
        this.setState({
            ID: idKH
        })
        this.props.XemThongTinKhoaHoc(idKH);
    }

    chonNhom = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    }

    PhanTrangKhoaHoc = (page,IdCategory,status) => {
        this.setState({
            PageSelected : page
        })
        this.props.PhanTrangKhoaHoc(page,IdCategory,status)
    }

    renderKhoaHoc = () => {
        let length = this.props.dsKhoaHoc.length;
        let content;
        if (length === 0) {
            return content = (
                <div className="col-12 text-center">
                    <img src="http://tatnhapkhau.com/images/page_not_found.jpg" alt="imgs" />
                </div>
            )
        }
        content = this.props.dsKhoaHoc.map((item, key) => {
            return (
                <tr key={key}>
                    <td>
                        {/* <img src={item.Image !== null ? window.location.origin + '/Img/KhoaHoc/' + item.Image : "http://tatnhapkhau.com/images/page_not_found.jpg"} alt="Card" style={{ width: '100%', height: "200px" }} /> */}
                        <img src={item.Image !== null ? item.Image : "http://tatnhapkhau.com/images/page_not_found.jpg"} alt="Card" style={{ width: '100%', height: "200px" }} />
                        {/* <div className="alert alert-danger text-center mt-2">
                            <strong>{key + 1}</strong>
                        </div> */}
                    </td>

                    <td>
                        <div className="alert alert-primary">
                            <p><strong>Tên Khóa Học : </strong>{item.Name}</p>
                            <p><strong>Giảng Viên : </strong>{item.Author}</p>
                            <p><strong>Danh Mục : </strong>{item.Category_Name}</p>
                            <p><strong>Số Người Học : </strong>{item.Number_Of_Participants}</p>

                        </div>
                    </td>

                    <td>
                        <button className="form-control btn btn-primary mb-3" data-toggle="tooltip" title="Xem Danh Sách" data-toggle="modal" data-target="#ModalDanhSachKhoaHoc"><i className="fas fa-list"></i></button>

                        <button className="form-control btn btn-info mb-3" data-toggle="tooltip" title="Sửa Thông Tin Khóa Học" data-toggle="modal" data-target="#ModalSua" onClick={() => this.XemThongTin(item.ID)}><i className="fas fa-edit"></i></button>
                        <button className="form-control btn btn-danger" data-toggle="tooltip" title="Xóa Khóa Học Này" onClick={() => this.props.XoaKhoaHoc(item.ID)}><i className="fas fa-trash-alt"></i></button>
                    </td>
                </tr>
            )
        })
        return content
    }

    renderSoTrang = () => {
        let row = [];
        for (let i = 1; i <= this.props.tongSoTrang; i++) {
            row.push(i)
        }
        return row;
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
                        <select className="form-control" name="Category_ID" defaultValue={this.state.Category_ID} onChange={this.chonNhom}>
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
                        <select className="form-control" name="Enabled" defaultValue={this.state.Enabled} onChange={this.chonNhom}>
                            <option value="-1">-- Trạng Thái --</option>
                            <option value="1">Hiện</option>
                            <option value="0">Ẩn</option>
                        </select>
                    </div>


                    <div className="form-group col-lg-3">
                        <button className="form-control btn btn-success" onClick={() => this.props.LayDanhSachKhoaHocTheoTuyChon(this.state.Category_ID, this.state.Enabled)}><i className="fas fa-sort mr-2"></i>Lọc</button>
                    </div>

                    <div className="form-group col-lg-3">
                        <button className="form-control btn btn-success" data-toggle="tooltip" title="Thêm Khóa Học Mới" data-toggle="modal" data-target="#ModalThem"><i className="fas fa-plus"></i></button>
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
                        <ModalDanhSach />
                        <ModalSua tieuDe={"Sửa Khóa Học"} idKH={this.state.ID} />
                    </tbody>
                </Table>

                <Pagination className="pagination justify-content-center">
                    { 
                        this.renderSoTrang().map((item, key) => {
                            return (
                                <Pagination.Item onClick={()=>this.PhanTrangKhoaHoc(key+1,this.state.Category_ID,this.state.Enabled)} key={key} active={key+1 === this.state.PageSelected}>{key+1}</Pagination.Item>
                            )
                        })
                    }
                </Pagination>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        dsKhoaHoc: state.QuanLyKhoaHocReducer.DanhSachKhoaHoc,
        tongSoTrang : state.QuanLyKhoaHocReducer.TongSoTrang,
        dsDanhMuc: state.HomePageReducer.DanhSachDanhMuc
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        LayDanhSachKhoaHocTheoTuyChon: (idDanhMuc, TrangThai) => {
            dispatch(LayDanhSachKhoaHocTheoTuyChon(idDanhMuc, TrangThai))
        },

        LayDanhSachDanhMuc: () => {
            dispatch(LayDanhSachDanhMuc())
        },

        XemThongTinKhoaHoc: (idKH) => {
            dispatch(XemThongTinKhoaHoc(idKH))
        },

        XoaKhoaHoc: (idKH) => {
            let cf = window.confirm("Bạn chắc xóa khóa học này không ?");
            if (cf) {
                dispatch(XoaKhoaHoc(idKH))
            }
            return;
        },

        PhanTrangKhoaHoc: (page, idDanhMuc, trangThai) => {
            dispatch(PhanTrangKhoaHoc(page, idDanhMuc, trangThai))
        }
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(QuanLyKhoaHoc)
