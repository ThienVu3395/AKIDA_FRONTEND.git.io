import React, { Component } from 'react';
import '../../css/DanhSachKhoaHoc.css';
import KhoaHoc from '../DanhSachKhoaHoc/KhoaHoc';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import { Tab, Tabs } from 'react-bootstrap';
import { LayDanhSachDanhMuc, LayDanhSachKhoaHocTheoDanhMuc } from '../../../Redux/Actions/HomePage/HomePage.action'

class DanhSachKhoaHoc extends Component {
    componentDidMount() {
        this.props.LayDanhSachDanhMuc();
        this.props.LayDanhSachKhoaHocTheoDanhMuc("3");
    }

    renderKhoaHoc = () => {
        let dsKhoaHoc = this.props.DanhSachKhoaHocTheoDanhMuc.map((item, key) => {
            return (
                <KhoaHoc KhoaHoc={item} key={key} />
            )
        })
        return dsKhoaHoc;
    }

    renderDanhMuc = (set) => {
        let dsDanhMuc = this.props.DanhSachDanhMuc.map((item, key) => {
            return (
                <Tab key={key} eventKey={item.Description} title={item.Name} className="p-2">
                    <div className="container">
                        <Slider {...set}>
                            {this.renderKhoaHoc()}
                            <button className="btn btn-success">Xem Thêm</button>
                        </Slider>
                    </div>
                </Tab>
            )
        })
        return dsDanhMuc;
    }

    render() {
        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 3
        };

        const settings2 = {
            infinite: false,
            speed: 500,
            slidesToShow: 5
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="card h-100">
                            <NavLink to={`/chi-tiet-khoa-hoc/${"asdasd"}`} className="w-100 h-100">
                                <img className="card-img-top h-100 img-fluid" src="https://static.unica.vn/upload/images/2019/04/dot-pha-thu-nhap-6-kenh-marketing-online_1555569994.jpg" alt="Card" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Tabs defaultActiveKey="lap-trinh" id="uncontrolled-tab-example">
                            {this.renderDanhMuc(settings)}
                        </Tabs>
                    </div>
                </div>

                <div className="container mt-5">
                    <h2 className="mb-3">KHÓA HỌC TIÊU BIỂU</h2>
                    <Slider {...settings2}>
                        <KhoaHoc />

                        <KhoaHoc />

                        <KhoaHoc />

                        <KhoaHoc />

                        <KhoaHoc />

                        <KhoaHoc />
                    </Slider>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        DanhSachDanhMuc: state.HomePageReducer.DanhSachDanhMuc,
        DanhSachKhoaHocTheoDanhMuc: state.HomePageReducer.DanhSachKhoaHocTheoDanhMuc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LayDanhSachDanhMuc: () => {
            dispatch(LayDanhSachDanhMuc())
        },

        LayDanhSachKhoaHocTheoDanhMuc: (idDanhMuc) => {
            dispatch(LayDanhSachKhoaHocTheoDanhMuc(idDanhMuc))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoaHoc)
