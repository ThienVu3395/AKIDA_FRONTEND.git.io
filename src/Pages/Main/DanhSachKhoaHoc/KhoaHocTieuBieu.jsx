import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class KhoaHocTieuBieu extends Component {
    renderName = (string) => {
        let stringReplaced = "";
        if (string.length > 48) {
            stringReplaced = string.slice(-0, 50) + "......";
        }
        else {
            stringReplaced = string;
        }
        return stringReplaced;
    }
    render() {
        return (
            <div className="card mr-2">
                <div className="card-img" style={{ height: "150px" }}>
                    <NavLink to={`/chi-tiet-khoa-hoc/${this.props.KhoaHoc.ID}`}>
                        <img className="img" src={this.props.KhoaHoc.Image !== null ? this.props.KhoaHoc.Image : window.location.origin + '/Img/KhoaHoc/kh3.jpg'} alt="Card" height="100%" width="100%" />
                    </NavLink>
                </div>
                <div className="card-body">
                    <div className="parent">
                        <div style={{ minHeight: "50px" }}>
                            <NavLink to={`/chi-tiet-khoa-hoc/${this.props.KhoaHoc.ID}`}>{this.renderName(this.props.KhoaHoc.Name)}</NavLink>
                        </div>

                        <div>
                            <p className="card-text"><b>Tác Giả :</b> {this.props.KhoaHoc.Author === null ? "Đang update" : this.props.KhoaHoc.Author}</p>
                        </div>

                        <div>
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
                        <button className="btn btn-info container"><i className="fas fa-cart-plus"></i></button>
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

export default connect(null, null)(KhoaHocTieuBieu)
