import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ThemKhoaHoc} from '../../Redux/Actions/QuanLyKhoaHoc/QuanLyKhoaHoc.action';

class ModalThem extends Component {
    constructor(props) {
        super(props);
        let tk = JSON.parse(localStorage.getItem('UserLogin'));
        this.state = {
            Name : "",
            ID_Category : 3,
            Enabled : 1,
            Author : tk.Name,
            Created_Time : "2019-11-01",
            Short_Description : "",
            Number_Of_Participants : 0,
            Video_Info_ID : 1,
            Cost_Aki : 0
        }
    }

    layThongTinInput = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value,
        })
    }

    layHinhAnh = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.files[0].name,
        })
    }

    render() {
        return (
            <div className="modal fade" id="ModalThem">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.tieuDe}</h4>
                            <button type="button" className="close" data-dismiss="modal" id="thoatne">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="container">
                                <div className="form-group">
                                    <label htmlFor="tenKH">Tên Khóa Học :</label>
                                    <input type="text" className="form-control" name="Name" onChange={this.layThongTinInput} />
                                </div>

                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="sel1">Danh Mục :</label>
                                        <select className="form-control" name="ID_Category" onChange={this.layThongTinInput}>
                                            {
                                                this.props.dsDanhMuc.map((item, key) => {
                                                    return (
                                                        <option key={key} value={item.ID_Category}>{item.Name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className="form-group col-6">
                                        <label htmlFor="sel1">Trạng Thái :</label>
                                        <select className="form-control" name="Enabled" onChange={this.layThongTinInput} value={this.state.maNhom}>
                                            <option value="1">Hiện</option>
                                            <option value="0">Ẩn</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Mô Tả :</label>
                                    <textarea className="form-control" name="Short_Description" onChange={this.layThongTinInput} value={this.state.moTa}></textarea>
                                </div>

                                {/* <div className="form-group">
                                    <label htmlFor="pwd">Hình Ảnh :</label>
                                    <input type="file" className="form-control-file border" name="hinhAnh" onChange={this.layHinhAnh}></input>
                                </div> */}

                                <button className="btn btn-info container" onClick={()=>this.props.ThemKhoaHoc(this.state)}>Xác Nhận Thêm</button>
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
        dsDanhMuc: state.HomePageReducer.DanhSachDanhMuc
    }
}

const DispatchStateToProps = (dispatch) => {
    return {
        ThemKhoaHoc : (objThem) => {
            dispatch(ThemKhoaHoc(objThem))
        }
    }
}

export default connect(mapStateToProps, DispatchStateToProps)(ModalThem)
