import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import {layChiTietKhoaHoc} from '../Redux/Actions/Elearning.action';

class KetQuaTimKiem extends Component {
    renderItem = () => {
        let content = this.props.dsTimKiem.map((index, key) => {
            return (
                <div className="col-lg-3 col-md-2" key={key}>
                    <img className="card-img-top w-100 pt-3" src="https://codegym.vn/wp-content/uploads/2018/12/lap-trinh-c-la-gi-8.jpg" alt="Card" />
                    <div className="card card-body">
                        <h4 className="card-title text-center">{index.tenKhoaHoc}</h4>
                        <NavLink className="btn btn-info" to={`/chi-tiet-khoa-hoc/${index.maKhoaHoc}`} onClick={()=>this.props.layChiTiet(index.maKhoaHoc)}>Xem Khóa Học</NavLink>
                    </div>
                </div>
            );
        })
        return content;
    }
    render() {
        return (
            <>
                <Header />
                <div className="bg-light p-3">
                    <h2 className="text-center">Đây Là Kết Quả Của Từ Khóa <span style={{ "color": "red" }}>{this.props.tuTimKiem}</span></h2>
                    <div className="container">
                        <div className="row">
                            {this.renderItem()}
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dsTimKiem: state.ElearningReducer.danhSachTimKiem,
        tuTimKiem: state.ElearningReducer.TuKhoa
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        layChiTiet : (maKH) => {
            dispatch(layChiTietKhoaHoc(maKH))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTimKiem)
