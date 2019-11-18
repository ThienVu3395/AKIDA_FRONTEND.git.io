import React, { Component } from 'react';
import { connect } from 'react-redux';
import CKEditor from "react-ckeditor-component";
import { SuaKhoaHoc } from '../../Redux/Actions/QuanLyKhoaHoc/QuanLyKhoaHoc.action'

class ModalThem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Category_ID: "",
            Short_Description: "",
            Enabled: "",
            Image : ""
        };
    }

    componentDidMount(){
        let ctkh = JSON.parse(localStorage.getItem('ChiTietKhoaHoc'));
        this.setState({
            Name : ctkh.Name,
            Category_ID: ctkh.Category_ID,
            Short_Description: ctkh.Short_Description,
            Enabled: ctkh.Enabled,
        })
    }

    layThongTinInput = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value,
        })
    }

    // layHinhAnh = (event) => {
    //     const input = event.target;
    //     this.setState({
    //         [input.name]: input.files[0].name,
    //     })
    // }

    // CKEditor trong phần soạn thảo nội dung khóa học
    updateContent = (newContent) => {
        this.setState({
            Content: newContent
        })
    }

    onChange = (evt) => {
        // console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        this.setState({
            Content: newContent
        })
    }

    onBlur = (evt) => {
        //console.log("onBlur event called with event info: ", evt);
    }

    afterPaste = (evt) => {
        //console.log("afterPaste event called with event info: ", evt);
    }

    render() {
        return (
            <div className="modal fade" id="ModalSua">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.tieuDe}</h4>
                            <button type="button" className="close" data-dismiss="modal" id="thoatn">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="container">
                                <div className="form-group">
                                    <label htmlFor="tenKH">Tên Khóa Học :</label>
                                    <input type="text" className="form-control" defaultValue={this.props.ChiTietKhoaHoc.Name} name="Name" onChange={this.layThongTinInput} />
                                </div>

                                <div className="row">
                                    <div className="form-group col-6">
                                        <label>Danh Mục :</label>
                                        <select className="form-control" defaultValue={this.props.ChiTietKhoaHoc.Category_ID} name="Category_ID" onChange={this.layThongTinInput}>
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
                                        <select className="form-control" name="Enabled" defaultValue={this.props.ChiTietKhoaHoc.Enabled} onChange={this.layThongTinInput} >
                                            <option value={1}>Hiện</option>
                                            <option value={0}>Ẩn</option>
                                        </select>
                                    </div>
                                </div>

                                {/* <div className="form-group">
                                    <img src={this.props.ChiTietKhoaHoc.Image !== null ? window.location.origin + '/Img/KhoaHoc/' + this.props.ChiTietKhoaHoc.Image : "http://tatnhapkhau.com/images/page_not_found.jpg"} alt="Card" style={{ width: '100%', height: "200px" }} />
                                    <input type="file" className="form-control-file border mt-2" name="Image" onChange={this.layHinhAnh}></input>
                                </div> */}

                                <div className="form-group">
                                    <label htmlFor="pwd">Mô Tả Ngắn:</label>
                                    <textarea className="form-control" name="Short_Description" defaultValue={this.props.ChiTietKhoaHoc.Short_Description} onChange={this.layThongTinInput}></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Nội Dung :</label>
                                    <CKEditor
                                        activeClass="p10"
                                        content={this.props.ChiTietKhoaHoc.Content}
                                        events={{
                                            "blur": this.onBlur,
                                            "afterPaste": this.afterPaste,
                                            "change": this.onChange
                                        }}
                                    />
                                </div>

                                <button className="btn btn-info container" onClick={() => this.props.SuaKhoaHoc(this.state, this.props.idKH)}>Xác Nhận Sửa</button>
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
        SuaKhoaHoc: (objSua, idKH) => {
            dispatch(SuaKhoaHoc(objSua, idKH))
        }
    }
}

export default connect(mapStateToProps, DispatchStateToProps)(ModalThem)
