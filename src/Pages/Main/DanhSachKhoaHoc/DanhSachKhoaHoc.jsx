import React, { Component } from 'react';
import '../../css/DanhSachKhoaHoc.css';
import KhoaHoc from '../DanhSachKhoaHoc/KhoaHoc';
import { connect } from 'react-redux';
import { layDanhSachKhoaHoc } from '../../../Redux/Actions/Elearning.action';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import { Tab, Tabs } from 'react-bootstrap';

class DanhSachKhoaHoc extends Component {
    renderKhoaHoc = () => {
        let content = this.props.dsKhoaHoc.map((item, key) => {
            return <KhoaHoc KH={item} index={key} key={key} />
        })
        return content;
    }

    componentDidMount() {
        this.props.layDanhSach("GP01");
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
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Business" className="p-2">
                                <div className="container">
                                    <Slider {...settings}>
                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <button className="btn btn-success">Xem Thêm</button>
                                    </Slider>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Design" className="p-2">
                                <div className="container">
                                    <Slider {...settings}>
                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <button className="btn btn-success">Xem Thêm</button>
                                    </Slider>
                                </div>
                            </Tab>

                            <Tab eventKey="deve" title="Developer" className="p-2">
                                <div className="container">
                                    <Slider {...settings}>
                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <KhoaHoc />

                                        <button className="btn btn-success">Xem Thêm</button>
                                    </Slider>
                                </div>
                            </Tab>
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
                {/* {this.renderKhoaHoc()} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dsKhoaHoc: state.ElearningReducer.danhSachKhoaHoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSach: (maNhom) => {
            dispatch(layDanhSachKhoaHoc(maNhom))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoaHoc)
