import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { DoiThongTinCaNhan, KiemTraThongTinCaNhan, DoiMatKhau } from '../Redux/Actions/HomePage/HomePage.action';

class ThongTinCaNhanContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DoiMatKhau: 0,
            ID_User: JSON.parse(localStorage.getItem("UserLogin")).ID_User,
            oldPass: "",
            newPass: "",
            reNewPass: ""
        }
    }

    layThongTinInput = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    }

    renderRoleName = () => {
        let RoleName = "";
        if (this.props.TrangThaiDangNhap !== 0) {
            let tk = JSON.parse(localStorage.getItem("UserLogin"));
            if(tk.Role_ID === 3){
                RoleName = "User"
            }
            else if(tk.Role_ID === 2){
                RoleName = "TeamMember"
            }
            return RoleName;
        }
    }

    componentDidMount() {
        this.props.KiemTraThongTinCaNhan();
        if (this.props.TrangThaiDangNhap !== 0) {
            let tk = JSON.parse(localStorage.getItem("UserLogin"));
            this.setState({
                Name: tk.Name,
                Email: tk.Email,
                Phone: tk.Phone
            })
        }
    }

    DoiMatKhau = (objUser) => {
        let cf = window.confirm("Bạn có chắc đổi mật khẩu như vầy không ?");
        if (cf) {
            if (objUser.oldPass === objUser.newPass) {
                Swal.fire("Thông Báo", "Mật Khẩu Cũ Và Mật Khẩu Mới Phải Khác Nhau", "error");
                return;
            }
            else {
                if (objUser.newPass !== objUser.reNewPass) {
                    Swal.fire("Thông Báo", "Vui lòng nhập nội dung ở ô mật khẩu mới và ô nhập lại mật khẩu mới phải khớp nhau", "error");
                    return;
                }
                else {
                    this.props.DoiMatKhau(objUser);
                }
            }
        }
        else return;
    }

    renderThongTin = () => {
        if (this.props.TrangThaiDangNhap !== 0) {
            return (
                <>
                    <div className="alert alert-success">
                        <strong>Bạn Đang Là {this.renderRoleName()} Của AKIDA</strong>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="usr">Email</label>
                                <input type="text" className="form-control" name="Email" onChange={this.layThongTinInput} defaultValue={this.props.ThongTinCaNhan.Email} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="usr">Họ Tên</label>
                                <input type="text" className="form-control" defaultValue={this.props.ThongTinCaNhan.Name} name="Name" onChange={this.layThongTinInput} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="usr">Số Điện Thoại</label>
                                <input type="text" className="form-control" defaultValue={this.props.ThongTinCaNhan.Phone} name="Phone" onChange={this.layThongTinInput} />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="usr">Ngày Tạo</label>
                                <input type="text" className="form-control" defaultValue={this.props.ThongTinCaNhan.Created_Time} name="Created_Time" disabled />
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn btn-success container mb-2" onClick={() => this.props.DoiThongTinCaNhan(this.state)}><i className="fas fa-save mr-2"></i>Lưu Thông Tin</button>
                    {this.state.DoiMatKhau === 0 ?
                        <button type="button" className="btn btn-info container" onClick={() => this.setState({ DoiMatKhau: 1 })}><i className="fas fa-key mr-2"></i>Đổi Mật Khẩu</button> :
                        <div>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="usr">Mật Khẩu Cũ:</label>
                                    <input type="password" className="form-control" name="oldPass" onChange={this.layThongTinInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">Mật Khẩu Mới:</label>
                                    <input type="password" className="form-control" name="newPass" onChange={this.layThongTinInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pwd">Nhập Lại Mật Khẩu Mới:</label>
                                    <input type="password" className="form-control" name="reNewPass" onChange={this.layThongTinInput} />
                                </div>
                                <button className="btn btn-info container mb-2" onClick={() => this.DoiMatKhau(this.state)}><i className="fas fa-key mr-2"></i>Đổi Mật Khẩu</button>
                                <button className="btn btn-danger container" onClick={() => this.setState({ DoiMatKhau: 0 })}><i className="fas fa-window-close mr-2"></i>Hủy</button>
                            </div>
                        </div>
                    }
                </>
            )
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm="6">
                        <Card body>
                            {this.renderThongTin()}
                        </Card>
                        {/* <div>
                            <img src="https://thehappypuppysite.com/wp-content/uploads/2018/10/miniature-pug-long.jpg" alt="asda" style={{ height: "283px", width: "100%" }} />
                        </div>

                        <div className="form-group mt-2">
                            <input type="file" className="form-control p-1" />
                        </div> */}
                    </Col>

                    <Col sm="6">
                        <Card body>
                            <div className="container text-center">
                                <div>
                                    <i className="fa fa-bookmark mr-2"></i>Thông Tin MemberShip
                                </div>

                                <hr />

                                <div>
                                    <p>Bạn chưa sở hữu thẻ Membership</p>
                                    <button type="button" className="btn btn-primary">Đăng Ký Ngay</button>
                                </div>
                            </div>
                        </Card>
                        {/* <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="sel1">Loại Người Dùng</label>
                                    <select className="form-control" name="maLoaiNguoiDung" onChange={this.layThongTinInput}>
                                        <option value="GV">Giáo Viên</option>
                                        <option value="HV">Học Viên</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="sel1">Mã Nhóm</label>
                                    <select className="form-control" name="maNhom" onChange={this.layThongTinInput}>
                                        <option value="GP01">GP01</option>
                                        <option value="GP02">GP02</option>
                                    </select>
                                </div>
                            </div>
                        </div> */}
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ThongTinCaNhan: state.HomePageReducer.ThongTinCaNhan,
        TrangThaiDangNhap: state.HomePageReducer.TrangThaiDangNhap
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DoiThongTinCaNhan: (objUser) => {
            let cf = window.confirm("Bạn chắc chắn đổi thông tin như vầy chứ ?");
            if (cf) {
                dispatch(DoiThongTinCaNhan(objUser))
            }
            return;
        },

        DoiMatKhau: (objUser) => {
            dispatch(DoiMatKhau(objUser))
        },

        KiemTraThongTinCaNhan: () => {
            dispatch(KiemTraThongTinCaNhan())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinCaNhanContent)
