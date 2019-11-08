import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class KhoaHoc extends Component {
    render() {
        return (
            <div className="card mr-1" style={{minHeight:"350px"}}>
                <div className="card-img">
                    <NavLink to={`/chi-tiet-khoa-hoc/${this.props.KhoaHoc.ID}`}>
                        <img className="img-fluid" src="https://static.unica.vn/upload/images/2019/04/facebook-marketing-a-z_m_1555557477.jpg" alt="Card" />
                    </NavLink>
                </div>
                <div className="card-body">
                    <NavLink to={`/chi-tiet-khoa-hoc/${this.props.KhoaHoc.ID}`} style={{ textDecoration: "none", color: "black" , fontSize: "16px" , fontWeight:"bold"}}>{this.props.KhoaHoc.Name}</NavLink>
                    <p className="card-text">Tác Giả : {this.props.KhoaHoc.Author === null ? "Đang update" : this.props.KhoaHoc.Author}</p>
                    <div className="row ml-0 mb-2">
                        <i className="fas fa-star text-danger"></i>
                        <i className="fas fa-star text-danger"></i>
                        <i className="fas fa-star text-danger"></i>
                        <i className="fas fa-star text-danger"></i>
                        <i className="fas fa-star text-danger"></i>
                    </div>

                    <div className="row ml-0">
                        <p className="mr-2"><del>700,000<sup>đ</sup></del></p>
                        <p><b>500,000<sup>đ</sup></b></p>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }

export default connect(null, null)(KhoaHoc)
