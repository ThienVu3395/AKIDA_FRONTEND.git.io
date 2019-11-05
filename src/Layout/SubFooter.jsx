import React, { Component } from 'react';
import Slider from "react-slick";

export default class SubFooter extends Component {
    render() {
        const settings = {
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 4,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        return (
            <div className="top-teacher p-4 background">
                <div className="container">
                    <h2 className="mb-3">GIẢNG VIÊN TIÊU BIỂU</h2>
                    <Slider {...settings}>
                        <div className="teacher-item">
                            <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                <div className="teacher-img mb-2">
                                    <img src="https://unica.vn/uploads/Thaoptt/August52016354pm_ho-ngoc-cuong_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                </div>

                                <div className="teacher-info text-center">
                                    <h4>Hồ Ngọc Cương</h4>
                                    <p style={{ minHeight: "75px" }}>Freelancer Facebook Marketing</p>
                                </div>
                            </div>
                        </div>

                        <div className="teacher-item">
                            <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                <div className="teacher-img mb-2" style={{ height: "200px" }}>
                                    <img src="https://unica.vn/uploads/Thaoptt/August52016431pm_nguyen-hieu_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                </div>
                                <div className="teacher-info text-center">
                                    <h4>Nguyễn Hiếu</h4>
                                    <p style={{ minHeight: "75px" }}>Đại sứ Yoga Việt Nam - CEO Zenlife Yoga</p>
                                </div>
                            </div>
                        </div>


                        <div className="teacher-item">
                            <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                <div className="teacher-img mb-2" style={{ height: "200px" }}>
                                    <img src="https://unica.vn/uploads/Thaoptt/August52016431pm_nguyen-hieu_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                </div>

                                <div className="teacher-info text-center">
                                    <h4>Nguyễn Hiếu</h4>
                                    <p style={{ minHeight: "75px" }}>Giảng viên Guitar - Youtuber nổi tiếng cộng đồng guitar Việt Nam</p>
                                </div>
                            </div>
                        </div>

                        <div className="teacher-item">
                            <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                <div className="teacher-img mb-2" style={{ height: "200px" }}>
                                    <img src="https://static.unica.vn/uploads/thaoptt09@gmail.com/February282018936am_ts-le-tham-duong_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                </div>

                                <div className="teacher-info text-center">
                                    <h4>Ts. Lê Thẩm Dương</h4>
                                    <p style={{ minHeight: "75px" }}>Tiến sĩ - Diễn giả chuyên nghiệp - Chuyên gia Tài chính, Lãnh đạo, Nhân sự.....</p>
                                </div>
                            </div>
                        </div>

                        <div className="teacher-item">
                            <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                <div className="teacher-img mb-2" style={{ height: "200px" }}>
                                    <img src="https://static.unica.vn/uploads/thaoptt09@gmail.com/February282018936am_ts-le-tham-duong_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                </div>

                                <div className="teacher-info text-center">
                                    <p style={{ minHeight: "75px" }}>Tiến sĩ - Diễn giả chuyên nghiệp - Chuyên gia Tài chính, Lãnh đạo, Nhân sự.....</p>
                                </div>
                            </div>
                        </div>

                        <div className="teacher-item">
                            <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                <div className="teacher-img mb-2" style={{ height: "200px" }}>
                                    <img src="https://static.unica.vn/uploads/thaoptt09@gmail.com/February282018936am_ts-le-tham-duong_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                </div>

                                <div className="teacher-info text-center">
                                    <h4>Ts. Lê Thẩm Dương</h4>
                                    <p style={{ minHeight: "75px" }}>Tiến sĩ - Diễn giả chuyên nghiệp - Chuyên gia Tài chính, Lãnh đạo, Nhân sự.....</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div >
        )
    }
}
