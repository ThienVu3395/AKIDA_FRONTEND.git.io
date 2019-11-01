import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class KhoaHoc extends Component {
    render() {
        console.log(this.props.KhoaHoc)
        return (
            <div className="card mr-2">
                <div className="card-img">
                    {/* <NavLink to={`/chi-tiet-khoa-hoc/${this.props.KH.maKhoaHoc}`} onClick={()=>this.props.layChiTiet(this.props.KH.maKhoaHoc)}>
                        <img className="img-fluid" src="https://static.unica.vn/upload/images/2019/04/facebook-marketing-a-z_m_1555557477.jpg" alt="Card" />
                        </NavLink> */}

                    <NavLink to={`/chi-tiet-khoa-hoc/asdas`}>
                        <img className="img-fluid" src="https://static.unica.vn/upload/images/2019/04/facebook-marketing-a-z_m_1555557477.jpg" alt="Card" />
                    </NavLink>
                </div>
                <div className="card-body bg-light">
                    {/* <NavLink to={`/chi-tiet-khoa-hoc/${this.props.Khoahoc.ID}`} style={{ textDecoration: "none", color: "black" }}>
                        <h4 className="card-title" style={{ fontSize: "16px", textDecoration: "none" }}>{this.props.Khoahoc.Name}</h4>
                    </NavLink> */}
                    <p className="card-text">asdsad</p>
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

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(null, mapDispatchToProps)(KhoaHoc)
