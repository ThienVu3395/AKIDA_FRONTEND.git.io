import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DangKyKhoaHoc , ghiDanhNguoiDung , huyGhiDanhNguoiDung } from '../Redux/Actions/Elearning.action';

class ModalDanhSachKhoaHoc extends Component {
    renderModal = (trangThai) => {
        if (trangThai === "daXD") {
            if (this.props.DanhSachKhoaHocDaXetDuyet.length !== 0) {
                let content = this.props.DanhSachKhoaHocDaXetDuyet.map((item, key) => {
                    return (
                        <div className=" mb-3" key={key}>
                            <div className="card p-3 container">
                                <img className="card-img-top" src="https://itzone.com.vn/wp-content/uploads/2018/09/tieng-viet-gioi-thieu-ve-lap-trinh-c-danh-cho-nguoi-moi-bat-dau.jpg" alt="Card" style={{ width: '100%' }} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.tenKhoaHoc}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })
                return content
            }
            else return (
                <p className="text-danger">Người dùng này chưa có khóa học nào đã được xét duyệt !!!</p>
            )
        }
        else if (trangThai === "choXD") {
            if (this.props.DanhSachKhoaHocChoXetDuyet.length !== 0) {
                let content = this.props.DanhSachKhoaHocChoXetDuyet.map((item, key) => {
                    return (
                        <div className="mb-3" key={key}>
                            <div className="card p-3 container">
                                <img className="card-img-top" src="https://itzone.com.vn/wp-content/uploads/2018/09/tieng-viet-gioi-thieu-ve-lap-trinh-c-danh-cho-nguoi-moi-bat-dau.jpg" alt="Card" style={{ width: '100%' }} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.tenKhoaHoc}</h4>
                                    <div className="row">
                                        <button type="button" className="btn btn-info col-lg-6" onClick={()=>this.props.GhiDanh(item.maKhoaHoc,this.props.taiKhoan)}>Duyệt</button>
                                        <button type="button" className="btn btn-danger col-lg-6" onClick={() => this.props.HuyGhiDanh(item.maKhoaHoc, this.props.taiKhoan)}>Hủy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                return content
            }
            else return (
                <p className="text-danger">Người dùng này chưa có khóa học nào đang chờ xét duyệt !!!</p>
            )

        }
        else if (trangThai === "chuaGD") {
            if (this.props.DanhSachKhoaHocChuaGhiDanh.length > 0) {
                let content = this.props.DanhSachKhoaHocChuaGhiDanh.map((item, key) => {
                    return (
                        <div className="mb-3" key={key}>
                            <div className="card p-3 container">
                                <img className="card-img-top" src="https://itzone.com.vn/wp-content/uploads/2018/09/tieng-viet-gioi-thieu-ve-lap-trinh-c-danh-cho-nguoi-moi-bat-dau.jpg" alt="Card" style={{ width: '100%' }} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.tenKhoaHoc}</h4>
                                </div>
                                <button type="button" className="btn btn-info mb-3" onClick={()=>this.props.DangKyKhoaHoc(item.maKhoaHoc,this.props.taiKhoan)}>Đăng Ký</button>
                            </div>
                        </div>
                    )
                })
                return content
            }
            else return (
                <p className="text-danger">Người dùng này đã trở thành đại gia vì đã ghi danh hết toàn bộ khóa học !!!</p>
            )
        }
    }
    render() {
        return (
            <div className="modal fade" id="ModalKhoaHoc">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h1 className="modal-title badge badge-pill badge-secondary">{this.props.tieuDe}</h1>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="container">
                                {this.renderModal(this.props.trangThai)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        DanhSachKhoaHocDaXetDuyet: state.ElearningReducer.dsKhoaHocDaXetDuyet,
        DanhSachKhoaHocChoXetDuyet: state.ElearningReducer.dsKhoaHocChoXetDuyet,
        DanhSachKhoaHocChuaGhiDanh: state.ElearningReducer.dsKhoaHocChuaGhiDanh
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DangKyKhoaHoc: (maKh, tk) => {
            let cf = window.confirm("Bạn có chắc đăng ký người dùng này vào khóa này chứ ?");
            if (cf) {
                dispatch(DangKyKhoaHoc(maKh, tk))
            }
        },

        GhiDanh : (maKH,tk) => {
            let cf = window.confirm("Bạn có chắc ghi danh người dùng này vào khóa này chứ ?");
            if (cf) {
                dispatch(ghiDanhNguoiDung(maKH, tk))
            }
        },

        HuyGhiDanh: (maKH, tk) => {
            let cf = window.confirm("Bạn có chắc hủy đăng ký người dùng này ở khóa này chứ ?");
            if (cf) {
                dispatch(huyGhiDanhNguoiDung(maKH, tk))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDanhSachKhoaHoc)
