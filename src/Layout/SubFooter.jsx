import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import { LayDanhSachGiaoVien } from '../Redux/Actions/HomePage/HomePage.action';

class SubFooter extends Component {
    componentDidMount() {
        this.props.LayDanhSachGiaoVien()
    }

    renderGiaoVien = () => {
        let content = this.props.DanhSachGiaoVien.map((item, key) => {
            return (
                <div className="teacher-item" key={key}>
                    <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                        <div className="teacher-img mb-2" style={{ height: "200px" }}>
                            <img src="https://unica.vn/uploads/Thaoptt/August52016431pm_nguyen-hieu_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                        </div>

                        <div className="teacher-info text-center">
                            <h4>{item.Name}</h4>
                            <p style={{ minHeight: "75px" }}>Giảng viên Guitar - Youtuber nổi tiếng cộng đồng guitar Việt Nam</p>
                        </div>
                    </div>
                </div>
            )
        })
        return content;
    }
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
                        {this.renderGiaoVien()}
                    </Slider>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        DanhSachGiaoVien: state.HomePageReducer.DanhSachGiaoVien
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LayDanhSachGiaoVien: () => {
            dispatch(LayDanhSachGiaoVien())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubFooter)
