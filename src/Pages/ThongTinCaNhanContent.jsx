import React, { Component } from 'react';
import { Row, Col , Card } from 'reactstrap';
import { connect } from 'react-redux';

class ThongTinCaNhanContent extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        //this.props.xemThongTin()
    }

    layThongTinInput = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm="7">
                        <div>
                            <img src="https://thehappypuppysite.com/wp-content/uploads/2018/10/miniature-pug-long.jpg" alt="asda" style={{ height: "283px", width: "100%" }} />
                        </div>

                        <div className="form-group mt-2">
                            <input type="file" className="form-control p-1" />
                        </div>

                        <Card body>
                            <div className="container text-center">
                                <div>
                                    <i className="fa fa-bookmark mr-2"></i>Thông Tin MemberShip
                                </div>

                                <hr />

                                <div>
                                    <p>Bạn chưa sở hữu thẻ Membership</p>
                                    <button type="button" className="btn btn-primary ">Đăng Ký Ngay</button>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col sm="5">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="usr">Tài Khoản</label>
                                    <input type="text" className="form-control" disabled />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="usr">Họ Tên</label>
                                    <input type="text" className="form-control"  name="hoTen" onChange={this.layThongTinInput}/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="usr">Email</label>
                                    <input type="text" className="form-control" name="email" onChange={this.layThongTinInput}/>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="usr">Số Điện Thoại</label>
                                    <input type="text" className="form-control" name="soDT" onChange={this.layThongTinInput}/>
                                </div>
                            </div>
                        </div>

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
                        <button type="button" className="btn btn-success container mb-2"><i className="fas fa-save mr-2"></i>Lưu Thông Tin</button>
                        <button type="button" className="btn btn-info container"><i className="fas fa-key mr-2"></i>Đổi Mật Khẩu</button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        thongTinCaNhan: state.ElearningReducer.ThongTinCaNhan
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinCaNhanContent)
