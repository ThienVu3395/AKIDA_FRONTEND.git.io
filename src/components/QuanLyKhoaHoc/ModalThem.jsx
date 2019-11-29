import React, { Component } from 'react';
import { connect } from 'react-redux';
import {storage} from './../../common/FireBase';
import { ThemKhoaHoc , UploadHinh} from '../../Redux/Actions/QuanLyKhoaHoc/QuanLyKhoaHoc.action';
import CKEditor from "react-ckeditor-component";

class ModalThem extends Component {
    constructor(props) {
        super(props);
        let tk = JSON.parse(localStorage.getItem('UserLogin'));
        // test ckeditor
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            Name: "",
            Category_ID: 3,
            Enabled: 1,
            Author: tk.Name,
            Created_Time: "2019-11-01",
            Short_Description: "",
            Number_Of_Participants: 666,
            Video_Info_ID: 1,
            Cost_Aki: 0,
            Content: '',
            Image: "",
            File : null
        }
    }

    layThongTinInput = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value,
        })
    }

    layHinhAnh = (event) => {
        const img = event.target.files[0]
        this.setState({
            File : img
        })
        const uploadTask = storage.ref(`image/KhoaHoc/${img.name}`).put(img);
        uploadTask.on('state_changed',
        (snapshot) => {
            
        },
        (error) => {
            alert("sai")
            console.log(error)
        },
        () => {
            storage.ref('image/KhoaHoc/').child(img.name).getDownloadURL().then(url=>{
                this.setState({
                    Image : url
                })
            })
        })
    }

    // UploadHinh = (e) => {
    //     e.preventDefault();
    //     let file = this.state.File;
    //     let formData = new FormData();
    //     formData.append("hinhAnh",file);
    //     this.props.UploadHinh(formData);
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
                                        <select className="form-control" name="Category_ID" onChange={this.layThongTinInput}>
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
                                    <label htmlFor="pwd">Hình Ảnh :</label>
                                    {/* <form> */}
                                        <input type="file" className="form-control-file border" name="Image" onChange={this.layHinhAnh}></input>
                                        {/* <button className="btn btn-success mt-2" onClick={(e)=>this.UploadHinh(e)}><i className="fas fa-file-upload mr-2"></i>Upload</button> */}
                                    {/* </form> */}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Mô Tả Ngắn :</label>
                                    <textarea className="form-control" name="Short_Description" onChange={this.layThongTinInput} value={this.state.moTa}></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pwd">Nội Dung :</label>
                                    <CKEditor
                                        activeClass="p10"
                                        content={this.state.Content}
                                        events={{
                                            "blur": this.onBlur,
                                            "afterPaste": this.afterPaste,
                                            "change": this.onChange
                                        }}
                                    />
                                </div>

                                <button className="btn btn-info container" onClick={() => this.props.ThemKhoaHoc(this.state)}>Xác Nhận Thêm</button>
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
        ThemKhoaHoc: (objThem) => {
            dispatch(ThemKhoaHoc(objThem))
        },

        UploadHinh:(objHinh) => {
            dispatch(UploadHinh(objHinh))
        }
    }
}

export default connect(mapStateToProps, DispatchStateToProps)(ModalThem)
