import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemNguoiDung , CapNhatThongTin } from './../Redux/Actions/Elearning.action';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "123",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
            email: ""
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState(nextProps.ThongTinCanSua)
    }

    layThongTinInput = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    }

    render() {
        return (
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.tieuDe}</h4>
                            <button type="button" className="close" data-dismiss="modal" id="thoatne">×</button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                {/* <div className="form-group">
                                <label htmlFor="sel1">Loại Người Dùng :</label>
                                <select className="form-control" defaultValue={this.state.maLoaiNguoiDung} name="maLoaiNguoiDung" onChange={this.layThongTinInput} >
                                    <option value="HV">Học Viên</option>
                                    <option value="GV">Giáo Vụ</option>
                                </select>
                            </div> */}

                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label>Tài Khoản</label>
                                        <input type="text" className="form-control" name="taiKhoan" onChange={this.layThongTinInput} defaultValue={this.state.taiKhoan}/>
                                    </div>

                                    <div className="form-group col-lg-6">
                                        <label>Họ Tên</label>
                                        <input type="text" className="form-control" name="hoTen" onChange={this.layThongTinInput} defaultValue={this.state.hoTen}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label>Email</label>
                                        <input type="text" className="form-control" name="email" onChange={this.layThongTinInput} defaultValue={this.state.email}/>
                                    </div>

                                    <div className="form-group col-lg-6">
                                        <label>Số Điện Thoại</label>
                                        <input type="text" className="form-control" name="soDT" onChange={this.layThongTinInput} defaultValue={this.state.soDT}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            {
                                this.props.TrangThaiXuLyQLND ? 
                                <button type="button" className="btn btn-info container" onClick={() => this.props.themNguoiDung(this.state)}>Xác Nhận Thêm</button> :
                                <button type="button" className="btn btn-info container" onClick={() => this.props.capNhatNguoiDung(this.state)}>Xác Nhận Sửa</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ThongTinCanSua: state.ElearningReducer.ThongTinCanSua,
        TrangThaiXuLyQLND : state.ElearningReducer.TrangThaiXuLyQLND
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themNguoiDung: (objThem) => {
            let cf = window.confirm('Bạn chắc chắn thêm 1 người dùng mới với thông tin bên dưới chứ ?')
            if (cf) {
                dispatch(ThemNguoiDung(objThem))
            }
            return;
        },

        capNhatNguoiDung: (objSua) => {
            let cf = window.confirm('Bạn chắc chắn sửa người dùng này với thông tin bên dưới chứ ?')
            if (cf) {
                dispatch(CapNhatThongTin(objSua))
            }
            return;
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
