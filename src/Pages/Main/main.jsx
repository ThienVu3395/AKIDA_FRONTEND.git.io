import React, { Component } from 'react';
import '../css/main.css';
import Slider from "react-slick";
import Header from '../../Layout/Header';
import SubFooter from '../../Layout/SubFooter';
import Footer from '../../Layout/Footer';
import DanhSachKhoaHoc from './DanhSachKhoaHoc/DanhSachKhoaHoc';

function SampleNextArrow() {
    return (
        <div
            style={{ display: "none" }}
        />
    );
}

export default class main extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SampleNextArrow />
        };
        return (
            <div>
                <Header />
                {/* Banner */}
                <Slider {...settings}>
                    <a href="asdasd.html">
                        <img
                            className="d-block w-100"
                            src="https://unica.vn/upload/images/101935_top-khoa-hoc-moi-nhat_thumb.png"
                            alt="Top khóa học mới nhất"
                            height="500px"
                        />
                    </a>

                    <a href="asdasd.html">
                        <img
                            className="d-block w-100"
                            src="https://unica.vn/upload/images/110320_co-hoi-thang-tien-cho-dan-van-phong_thumb.png"
                            alt="Top khóa học mới nhất"
                            height="500px"
                        />
                    </a>

                    <a href="asdasd.html">
                        <img
                            className="d-block w-100"
                            src="https://unica.vn/upload/images/025527_hoc-thiet-ke-thoa-dam-me_thumb.png"
                            alt="Top khóa học mới nhất"
                            height="500px"
                        />
                    </a>
                </Slider>
                {/* Đóng Banner */}

                <div className="bg-bold-gray">
                    <div className="container pt-3">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 text-center">
                                <i className="fas fa-graduation-cap" style={{ fontSize: "50px" }}></i>
                                <p>7,010+ Gia Sư</p>
                                <p>Khắp cả nước</p>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4 text-center">
                                <i className="fas fa-user" style={{ fontSize: "50px" }}></i>
                                <p>7,010+ Gia Sư</p>
                                <p>Khắp cả nước</p>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4 text-center">
                                <i className="far fa-handshake" style={{ fontSize: "50px" }}></i>
                                <p>7,010+ Gia Sư</p>
                                <p>Khắp cả nước</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Danh Sách Khóa Học*/}

                <div className="p-3">
                    <DanhSachKhoaHoc />
                </div>
                {/* Đóng Danh Sách Khóa Học*/}
                <SubFooter />

                <Footer />
            </div>
        )
    }
}
