import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ghiDanhNguoiDung , huyGhiDanhNguoiDung , dangKyNguoiDung } from '../Redux/Actions/Elearning.action';

class ModalLayDanhSachQLKH extends Component {
    renderModal = (trangThai) => {
        if (trangThai === "daGD") {
            if (this.props.DanhSachNguoiDungDaXetDuyet.length !== 0) {
                let content = this.props.DanhSachNguoiDungDaXetDuyet.map((item, key) => {
                    return (
                        <div className="mb-3" key={key}>
                            <div className="card p-3 container">
                                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png" alt="Card" style={{ width: '100%' }} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.hoTen}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })
                return content
            }
            else return (
                <p className="text-danger">Khóa Học này chưa có người dùng nào ghi danh !!!</p>
            )
        }
        else if (trangThai === "choXD") {
            if (this.props.DanhSachNguoiDungChoXetDuyet.length > 0) {
                let content = this.props.DanhSachNguoiDungChoXetDuyet.map((item, key) => {
                    return (
                        <div className="mb-3" key={key}>
                            <div className="card p-3 container">
                                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png" alt="Card" style={{ width: '100%' }} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.hoTen}</h4>
                                    <div className="row">
                                        <button type="button" className="btn btn-info col-lg-6" onClick={()=>this.props.ghiDanhNguoiDung(this.props.maKhoaHoc,item.taiKhoan)}>Xác Thực</button>
                                        <button type="button" className="btn btn-danger col-lg-6" onClick={()=>this.props.huyGhiDanhNguoiDung(this.props.maKhoaHoc,item.taiKhoan)}>Hủy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                return content
            }
            else return (
                <p className="text-danger">Khóa Học này chưa có người dùng nào đã ghi danh !!!!</p>
            )

        }
        else if (trangThai === "chuaGD") {
            if (this.props.DanhSachNguoiDungChuaGhiDanh.length > 0) {
                let content = this.props.DanhSachNguoiDungChuaGhiDanh.map((item, key) => {
                    return (
                        <div className="mb-3" key={key}>
                            <div className="card p-3 container">
                                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_960_720.png" alt="Card" style={{ width: '100%' }} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.hoTen}</h4>
                                </div>
                                <button type="button" className="btn btn-info mb-3" onClick={()=>this.props.dangKyNguoiDung(this.props.maKhoaHoc,item.taiKhoan)}>Đăng Ký</button>
                            </div>
                        </div>
                    )
                })
                return content
            }
            else return (
                <p className="text-danger">Người dùng này chưa được ai đăng ký !!!</p>
            )
        }
    }
    render() {
        return (
            <div className="modal fade" id="ModalLayDanhSachQLKH">
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
        DanhSachNguoiDungDaXetDuyet: state.ElearningReducer.dsNguoiDungDaXetDuyet,
        DanhSachNguoiDungChoXetDuyet: state.ElearningReducer.dsNguoiDungChoXetDuyet,
        DanhSachNguoiDungChuaGhiDanh: state.ElearningReducer.dsNguoiDungChuaGhiDanh
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ghiDanhNguoiDung : (maKhoaHoc,taiKhoan) => {
            let cf = window.confirm("Bạn chắc chắn xác thực người dùng này vào khóa học chứ ? ");
            if(cf){
                dispatch(ghiDanhNguoiDung(maKhoaHoc,taiKhoan))
            }
            return
        },

        huyGhiDanhNguoiDung : (maKhoaHoc,taiKhoan) => {
            let cf = window.confirm("Bạn chắc chắn xóa người dùng này khỏi khóa học chứ ? ");
            if(cf){
                dispatch(huyGhiDanhNguoiDung(maKhoaHoc,taiKhoan))
            }
            return
        },

        dangKyNguoiDung : (maKhoaHoc,taiKhoan) => {
            let cf = window.confirm("Bạn chắc chắn đăng ký cho người dùng này chứ ? ");
            if(cf){
                dispatch(dangKyNguoiDung(maKhoaHoc,taiKhoan))
            }
            return
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalLayDanhSachQLKH)
