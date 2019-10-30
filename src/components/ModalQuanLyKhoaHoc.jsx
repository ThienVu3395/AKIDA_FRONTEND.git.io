import React, { Component } from 'react';
import { connect } from 'react-redux';
import { themKhoaHoc, layDanhMucKhoaHoc , capNhatKhoaHoc } from '../Redux/Actions/Elearning.action';

class ModalQuanLyKhoaHoc extends Component {
    constructor(props) {
        super(props);
        let tk = JSON.parse(localStorage.getItem('userLogin'));
        this.state = {
            // maKhoaHoc: (Math.random() * (1000 - 1) + 1).toString(),
            // biDanh: '',
            // danhMucKhoaHoc: { maDanhMucKhoaHoc: 'BackEnd', tenDanhMucKhoaHoc: 'Lập Trình BackEnd' },
            // tenKhoaHoc: '',
            // moTa: '',
            // luotXem: 0,
            // hinhAnh: '',
            // soLuongHocVien: 0,
            // maNhom: 'GP01',
            // ngayTao: '',
            // nguoiTao: { taiKhoan: tk.taiKhoan, hoTen: tk.hoTen, maLoaiNguoiDung: tk.maLoaiNguoiDung, tenLoaiNguoiDung: 'Giảng Viên' }
            maKhoaHoc: (Math.random() * (1000 - 1) + 1).toString(),
            biDanh: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: 0,
            danhGia: 0,
            hinhAnh: "",
            maNhom: "GP01",
            ngayTao: "30/08/2019",
            maDanhMucKhoaHoc: "",
            taiKhoanNguoiTao: tk.taiKhoan
        };
    }

    componentDidMount() {
        this.props.layDanhMuc()
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState(nextProps.ThongTinKhoaHocCanSua);
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

    renderTenKhoaHoc = (maKhoaHoc) => {
        if (maKhoaHoc === "TuDuy") {
            return "Tư duy lập trình";
        }
        else if (maKhoaHoc === "FullStack") {
            return "Lập trình Full Stack";
        }
        else if (maKhoaHoc === "FrontEnd") {
            return "Lập trình Front end";
        }
        else if (maKhoaHoc === "DiDong") {
            return "Lập trình di động";
        }
        else if (maKhoaHoc === "Design") {
            return "Thiết kế Web";
        }
        else if (maKhoaHoc === "BackEnd") {
            return "Lập trình Backend";
        }
    }

    renderDanhMuc = () => {
        let content = this.props.danhSachDanhMuc.map((item, key) => {
            return (
                <option key={key} value={item.maDanhMuc}>{item.tenDanhMuc}</option>
            )
        })
        return content;
    }

    render() {
        return (
            <div className="modal fade" id="ModalQLKH">
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
                                    <input type="text" className="form-control" name="tenKhoaHoc" onChange={this.layThongTinInput} value={this.state.tenKhoaHoc} />
                                </div>

                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="sel1">Danh Mục :</label>
                                        {/* <select className="form-control" name="danhMucKhoaHoc" onChange={this.layThongTinDanhMuc} value={this.state.danhMucKhoaHoc.maDanhMucKhoaHoc}> */}
                                        <select className="form-control" name="maDanhMucKhoaHoc" onChange={this.layThongTinInput} defaultValue={this.state.maDanhMucKhoaHoc}>
                                            {this.renderDanhMuc()}
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
                                    <button className="btn btn-info container" onClick={() => this.props.themKhoaHoc(this.state)}>Xác Nhận Thêm</button> : 
                                    <button className="btn btn-info container" onClick={() => this.props.capNhatKhoaHoc(this.state)}>Xác Nhận Sửa</button>
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
        danhSachDanhMuc: state.ElearningReducer.danhSachDanhMuc,
        ThongTinKhoaHocCanSua: state.ElearningReducer.ThongTinKhoaHocCanSua,
        TrangThaiQuanLy: state.ElearningReducer.TrangThaiXuLyQLKH
    }
}

const DispatchStateToProps = (dispatch) => {
    return {
        layDanhMuc: () => {
            dispatch(layDanhMucKhoaHoc())
        },

        themKhoaHoc: (objThem) => {
            let cf = window.confirm("Bạn Chắc Chắn Thêm 1 Khóa Học Mới Với Các Thông Tin Bên Dưới Chứ ?");
            if (cf) {
                dispatch(themKhoaHoc(objThem));
            }
            return;
        },

        capNhatKhoaHoc : (objSua) => {
            let cf = window.confirm("Bạn Chắc Chắn Sửa Khóa Học Này Với Các Thông Tin Trên Chứ ?");
            if (cf) {
                dispatch(capNhatKhoaHoc(objSua));
            }
            return;
        }
    }
}

export default connect(mapStateToProps, DispatchStateToProps)(ModalQuanLyKhoaHoc)
