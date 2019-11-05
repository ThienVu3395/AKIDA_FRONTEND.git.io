import React, { Component } from 'react';
//import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class ModalDanhSach extends Component {
    render() {
        return (
            <div className="modal fade" id="ModalDanhSachNguoiDung">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h1 className="modal-title badge badge-pill badge-secondary">{this.props.tieuDe}</h1>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="container">
                            Danh Sách Quản Lý Người Dùng
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

export default connect(mapStateToProps, DispatchStateToProps)(ModalDanhSach)
