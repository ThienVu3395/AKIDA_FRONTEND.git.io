import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemNguoiDung } from '../../Redux/Actions/QuanLyNguoiDung/QuanLyNguoiDung.action';

class ModalThem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Password: "123",
            Email: "",
            Activated: "1",
            Created_Time: "2012/12/12",
            AKIDA_Number: 0,
            Phone: "",
            Role_ID: "3"
        }
    }


    layThongTinInput = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
            }
        )
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
                                <div className="form-group">
                                    <label>Họ Tên</label>
                                    <input type="text" className="form-control" name="Name" onChange={this.layThongTinInput} defaultValue={this.state.Name} />
                                </div>


                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" name="Email" onChange={this.layThongTinInput} defaultValue={this.state.Email} />
                                </div>

                                <div className="form-group">
                                    <label>Số Điện Thoại</label>
                                    <input type="text" className="form-control" name="Phone" onChange={this.layThongTinInput} defaultValue={this.state.Phone} />
                                </div>

                                {/* <div className="form-group">
                                    <label>Ảnh Đại Diện</label>
                                    <input type="file" className="form-control-file border"></input>
                                </div> */}

                                <div className="row">
                                    <div className="form-group col-lg-6">
                                        <label>Trạng Thái</label>
                                        <select className="form-control" defaultValue={this.state.Activated} onChange={this.layThongTinInput} name="Activated">
                                            <option value="1">Hiện</option>
                                            <option value="0">Ẩn</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-lg-6">
                                        <label>Quyền</label>
                                        <select className="form-control" defaultValue={this.state.Role_ID} onChange={this.layThongTinInput} name="Role_ID">
                                            <option value="2">Giảng Viên</option>
                                            <option value="3">User</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-info container" onClick={() => this.props.ThemNguoiDung(this.state)}><i className="fas fa-user-plus mr-2"></i>Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ThemNguoiDung: (objThem) => {
            let cf = window.confirm('Bạn chắc chắn thêm 1 người dùng mới với thông tin trên chứ ?')
            if (cf) {
                dispatch(ThemNguoiDung(objThem))
            }
            return;
        },
    }
}

export default connect(null, mapDispatchToProps)(ModalThem)
