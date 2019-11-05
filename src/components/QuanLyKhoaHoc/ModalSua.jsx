import React, { Component } from 'react';
import { connect } from 'react-redux';

class ModalThem extends Component {
    constructor(props) {
        super(props);
        //let tk = JSON.parse(localStorage.getItem('userLogin'));
        this.state = {
        };
    }

    componentDidMount() {
        //this.props.layDanhMuc()
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
                                    <input type="text" className="form-control" name="tenKhoaHoc" onChange={this.layThongTinInput} />
                                </div>

                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="sel1">Danh Mục :</label>
                                        {/* <select className="form-control" name="danhMucKhoaHoc" onChange={this.layThongTinDanhMuc} value={this.state.danhMucKhoaHoc.maDanhMucKhoaHoc}> */}
                                        <select className="form-control" name="maDanhMucKhoaHoc" onChange={this.layThongTinInput}>
                                            {/* {this.renderDanhMuc()} */}
                                        </select>
                                    </div>

                                    <div className="form-group col-6">
                                        <label htmlFor="sel1">Mã Nhóm :</label>
                                        <select className="form-control" name="maNhom" onChange={this.layThongTinInput} value={this.state.maNhom}>
                                            <option value="GP01">GP01</option>
                                            <option value="GP02">GP02</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Mô Tả :</label>
                                    <textarea className="form-control" name="moTa" onChange={this.layThongTinInput} value={this.state.moTa}></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Hình Ảnh :</label>
                                    <input type="file" className="form-control-file border" name="hinhAnh" onChange={this.layHinhAnh}></input>
                                </div>

                                {
                                    this.props.TrangThaiQuanLy === true ? 
                                    <button className="btn btn-info container" >Xác Nhận Thêm</button> : 
                                    <button className="btn btn-info container">Xác Nhận Sửa</button>
                                }
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

    }
}

const DispatchStateToProps = (dispatch) => {
    return {
    
    }
}

export default connect(mapStateToProps, DispatchStateToProps)(ModalThem)
