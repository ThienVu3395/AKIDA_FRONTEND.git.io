import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

class KetQuaTimKiem extends Component {
    constructor(props){
        super(props);
        this.state ={
            doDai : 0
        }
    }
    renderKetQuaTimKiem = () => {
        let content = this.props.DanhSachTimKiem.map((index, key) => {
            return (
                <div className="col-lg-3 col-md-2" key={key}>
                    <img className="card-img-top w-100 pt-3" src="https://codegym.vn/wp-content/uploads/2018/12/lap-trinh-c-la-gi-8.jpg" alt="Card" />
                    <div className="card card-body">
                        <h4 className="card-title text-center" style={{minHeight:"100px"}}>{index.Name}</h4>
                        <NavLink className="btn btn-info" to={`/chi-tiet-khoa-hoc/${index.ID}`}>Xem Khóa Học</NavLink>
                    </div>
                </div>
            );
        })
        return content;
    }

    renderKetQuaKhongTimThay = () => {
        return (
            <div className="col-12 text-center">
                <img src="http://tatnhapkhau.com/images/page_not_found.jpg" alt="imgs" />
            </div>
        )
    }
    render() {
        return (
            <>
                <Header />
                <div className="bg-light p-3">
                    <h2 className="text-center">ĐÂY LÀ KẾT QUẢ CỦA TỪ KHÓA <span className="text-danger">{this.props.DanhSachTimKiem.MessageTimKiem === "" ? "???" : this.props.DanhSachTimKiem.MessageTimKiem}</span></h2>
                    <div className="container">
                        <div className="row">
                            {this.props.DanhSachTimKiem.length === 0 ? this.renderKetQuaKhongTimThay() : this.renderKetQuaTimKiem()}
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
        DanhSachTimKiem: state.HomePageReducer.DanhSachTimKiem
    }
}

export default connect(mapStateToProps, null)(KetQuaTimKiem)
