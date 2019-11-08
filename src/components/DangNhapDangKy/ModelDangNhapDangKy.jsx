import React, { Component } from 'react';
import './../../Layout/Header.css';
import { connect } from 'react-redux';
import { DangNhap, DangKy } from '../../Redux/Actions/HomePage/HomePage.action';

class ModelDangNhapDangKy extends Component {
    constructor(props) {
        super(props);
        var date = new Date()
        this.state = {
            Activated: "1",
            Name : "",
            Email : "",
            Phone : "",
            Password:"",
            AKIDA_Number : 0,
            Created_Time : "2019-11-07",
        }
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
                {/* Modal Đăng Nhập - Đăng Ký */}
                <div className="modal fade" id="dangNhap">
                    <div className="modal-dialog">
                        <div className="modal-content container">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#home">Đăng Nhập</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#menu1">Đăng Ký</a>
                                    </li>
                                </ul>
                                <button type="button" className="close" id="close" data-dismiss="modal">×</button>
                            </div>
                            {/* close Modal Header */}

                            {/* Modal Body */}
                            <div className="modal-body">
                                <div className="tab-content">
                                    {/* Form Đăng Nhập */}
                                    <div id="home" className="container tab-pane active"><br />
                                        <input type="text" className="form-control mb-3" name="Email" placeholder="Nhập Email" onChange={this.layThongTinInput} />

                                        <input type="password" className="form-control mb-3" name="Password" placeholder="Mật Khẩu Từ 6-32 Ký Tự" onChange={this.layThongTinInput} />

                                        {/* <p className="text-center">Bạn Quên Mật Khẩu ? Nhấn Vào <a href="asdas.html">Đây</a></p> */}

                                        <button className="btn btn-success container" onClick={() => this.props.DangNhap(this.state)} data-dismiss="modal">Đăng Nhập</button>
                                        <hr />
                                        {/* <button className="btn fb container fb mb-3"><i className="fab fa-facebook-f mr-2"></i>Đăng Nhập Bằng Facebook</button>

                                        <button className="btn gg container gg"><i className="fab fa-google mr-2"></i>Đăng Nhập Bằng Google</button> */}
                                    </div>
                                    {/* Close Form Đăng Nhập */}

                                    {/* Form Đăng Ký */}
                                    <div id="menu1" className="container tab-pane fade"><br />
                                        <div className="form-group">
                                            <label>Trạng Thái :</label>
                                            <select className="form-control" name="Activated" defaultValue={this.state.Activated} onChange={this.layThongTinInput}>
                                                <option value="1">Hiện</option>
                                                <option value="0">Ẩn</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Name:</label>
                                            <input type="text" name="Name" className="form-control" onChange={this.layThongTinInput} />
                                        </div>

                                        <div className="form-group">
                                            <label>Email:</label>
                                            <input type="text" name="Email" className="form-control" onChange={this.layThongTinInput} />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Password:</label>
                                            <input type="password" name="Password" className="form-control" onChange={this.layThongTinInput}/>
                                        </div>

                                        <div className="form-group">
                                            <label>Phone:</label>
                                            <input type="text" name="Phone" className="form-control" onChange={this.layThongTinInput}/>
                                        </div>

                                        <button className="container btn btn-success mb-1 mt-2" onClick={() => this.props.DangKy(this.state)}>Đăng Ký</button>
                                        <hr />
                                        {/* <button className="btn fb container fb mb-3"><i className="fab fa-facebook-f mr-2"></i>Đăng Ký Bằng Facebook</button>
                                        <button className="btn gg container gg"><i className="fab fa-google mr-2"></i>Đăng Ký Bằng Google</button> */}
                                    </div>
                                </div>
                            </div>
                            {/* Modal Body */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DangNhap: (objDangNhap) => {
            dispatch(DangNhap(objDangNhap))
        },

        DangKy: (objDangKy) => {
            dispatch(DangKy(objDangKy))
        },
    }
}

export default connect(null, mapDispatchToProps)(ModelDangNhapDangKy)
