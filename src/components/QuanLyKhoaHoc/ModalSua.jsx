import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalThem extends Component {
    constructor(props) {
        super(props);
        //let tk = JSON.parse(localStorage.getItem('userLogin'));
        this.state = {
            Category_ID : this.props.ChiTietKhoaHoc.Category_ID === "undefined" ? "" : this.props.ChiTietKhoaHoc.Category_ID
        };
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
            <div className="modal fade" id="ModalSua">
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
                                    <input type="text" className="form-control" defaultValue={this.props.ChiTietKhoaHoc.Name} name="tenKhoaHoc" onChange={this.layThongTinInput} />
                                </div>

                                <div className="row">
                                    <div className="form-group col-6">
                                        <label>Danh Mục :</label>
                                        <select className="form-control" defaultValue={this.state.Category_ID} name="maDanhMucKhoaHoc" onChange={this.layThongTinInput}>
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
                                        <select className="form-control" name="maNhom" onChange={this.layThongTinInput} value={this.state.maNhom}>
                                            <option value="1">Hiện</option>
                                            <option value="0">Ẩn</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Mô Tả :</label>
                                    <textarea className="form-control" name="moTa" defaultValue={this.props.ChiTietKhoaHoc.Short_Description} onChange={this.layThongTinInput} value={this.state.moTa}></textarea>
                                </div>

                                {/* <div className="form-group">
                                    <label htmlFor="pwd">Hình Ảnh :</label>
                                    <input type="file" className="form-control-file border" name="hinhAnh" onChange={this.layHinhAnh}></input>
                                </div> */}

                                <button className="btn btn-info container">Xác Nhận Sửa</button>
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
        ChiTietKhoaHoc: state.QuanLyKhoaHocReducer.ChiTietKhoaHoc,
        dsDanhMuc: state.HomePageReducer.DanhSachDanhMuc
    }
}

const DispatchStateToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, DispatchStateToProps)(ModalThem)
