import React, { Component } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import {LayChiTietKhoaHoc} from '../Redux/Actions/HomePage/HomePage.action';

class ChiTietKhoaHoc extends Component {
    componentDidMount(){
        let idKhoaHoc = this.props.match.params.idKhoaHoc;
        this.props.LayChiTiet(idKhoaHoc);
    }
    render() {
        //console.log(this.props.KhoaHocChiTiet)
        const settings = {
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 2,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
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
            <>
                <Header />
                <div className="details">
                    <section className="detail-header text-white p-3">
                        <div className="container">
                            <p>Trang Chủ >> Ngoại Ngữ >> Tự Học Tiếng Hàn Thật Dễ</p>
                            <h2>{ this.props.KhoaHocChiTiet === null ? "" : this.props.KhoaHocChiTiet.Name}</h2>
                            <p>{ this.props.KhoaHocChiTiet === null ? "" : this.props.KhoaHocChiTiet.Short_Description}</p>

                            <div className="row">
                                <div className="teacher-info col-lg-4">
                                    <div className="teacher-info-img mr-2" style={{ float: "left" }}>
                                        <img src="https://static.unica.vn/uploads/thaoptt09@gmail.com/September262017946am_nguyen-van-khanh_thumb.jpg" className="rounded-circle teacher-info-image" alt="asd" />
                                    </div>

                                    <p>{ this.props.KhoaHocChiTiet === null ? "" : this.props.KhoaHocChiTiet.Author}</p>
                                </div>

                                <div className="teacher-reviews col-lg-4">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    39 Đánh Giá
                            </div>

                                <div className="teacher col-lg-4">
                                    <i className="fas fa-users mr-2" style={{ float: "left" }} />
                                    1151 học viên
                            </div>
                            </div>
                        </div>
                    </section>

                    <section className="detail-content">
                        <div className="container p-3">
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="detail-video mb-2">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            &lt;<iframe title="clip" className="embed-responsive-item img-responsive" src="https://www.youtube.com/embed/DmwJovJCy4I?rel=0&amp;showinfo=0" width="100%" height="auto" scrolling="no" frameBorder="0" allowFullScreen="">
                                            </iframe>
                                        </div>
                                    </div>

                                    {/* Bạn Sẽ Học Được Gì ? */}
                                    <div className="detail-learn pl-4 pt-3">
                                        <p>Bạn sẽ học được gì ?</p>
                                        <div className="row">
                                            <div className="learn-left col-lg-6">
                                                <div>
                                                    <i className="fas fa-check mr-2" style={{ float: "left" }}></i>
                                                    <p>Mở rộng vốn từ vựng tiếng Hàn</p>
                                                </div>

                                                <div>
                                                    <i className="fas fa-check mr-2" style={{ float: "left" }}></i>
                                                    <p>Kỹ năng tự đặt câu</p>
                                                </div>

                                                <div>
                                                    <i className="fas fa-check mr-2" style={{ float: "left" }}></i>
                                                    <p>Phản ứng nhanh khi giao tiếp tiếng Hàn</p>
                                                </div>
                                            </div>

                                            <div className="learn-right col-lg-6">
                                                <div>
                                                    <i className="fas fa-check mr-2" style={{ float: "left" }}></i>
                                                    <p>Hiểu và nắm vững các ngữ pháp trong mỗi bài.</p>
                                                </div>

                                                <div>
                                                    <i className="fas fa-check mr-2" style={{ float: "left" }}></i>
                                                    <p>Luyện phát âm chuẩn giọng Seoul</p>
                                                </div>

                                                <div>
                                                    <i className="fas fa-check mr-2" style={{ float: "left" }}></i>
                                                    <p>Mở rộng vốn từ vựng tiếng Hàn</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Close Bạn Sẽ Học Được Gì ? */}


                                    {/* Gioi Thieu */}
                                    <div className="detail-learn mt-2">
                                        <div>
                                            <p className="pl-3 pt-3"><b>Giới Thiệu Khóa Học</b></p>
                                        </div>
                                        <hr />
                                        <div className="detail-learn-content p-3 text-center">
                                            <p>Khoá học Bước đầu với ứng dụng website trên nền tảng ASP.NET MVC hướng dẫn bạn từng bước làm việc trên nền tảng ASP.NET MVC, thực hành Lab là chính, mang đến cho bạn sự thú vị khi theo dõi.</p>
                                            <p>Khoá học có tính thực tiễn cao, nội dung hướng đến nền tảng công nghệ nhằm phục vụ tốt việc học tập, tự nghiên cứu của học viên.</p>
                                            <p>Thông qua khóa học, bạn sẽ hiểu được nền tảng công nghệ, và vận dụng được vào dự án thực tế</p>
                                            <p>Đây là nền tảng công nghệ mới nhất của Microsoft để thiết kế website và xây dựng các ứng dụng quản lý trên nền tảng Internet</p>
                                            <p>Bạn sẽ nắm vững kiến thức làm việc giữa ASP.NET MVC và Entity Framework thông tin truy vấn dữ liệu LINQ.</p>
                                            <p>Biết quy trình làm việc của ASP.NET MVC trong dự án thực tế. Từ đó, giúp bạn tự xây dựng được ứng dụng web sử dụng ASP.NET MVC.</p>
                                        </div>
                                    </div>
                                    {/* Gioi Thieu */}

                                    {/* Danh Sách Videos */}
                                    <div className="detail-learn mt-2">
                                        <div>
                                            <p className="pl-3 pt-3"><b>Nội Dung Khóa Học</b></p>
                                        </div>
                                        <hr />
                                        <div className="detail-learn-content p-3">
                                            <div id="accordion" className="mb-3">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a className="card-link text-dark" data-toggle="collapse" href="#collapseOne">
                                                            <b>Phần 1 : Tổng Quan Về FaceBook</b>
                                                        </a>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <table className="table table-hover">
                                                                <tbody>
                                                                    {/* Single Item */}
                                                                    <tr>
                                                                        <td><i className="fas fa-play-circle mr-2"></i>Bài 1: Ưu điểm và nhược điểm của Quảng cáo Facebook</td>
                                                                        <td>
                                                                            <div>
                                                                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                                                                    Học Thử
                                                                            </button>
                                                                                {/* The Modal */}
                                                                                <div className="modal fade" id="myModal">
                                                                                    <div className="modal-dialog">
                                                                                        <div className="modal-content" style={{ height: "600px" }}>
                                                                                            {/* Modal body */}
                                                                                            <div className="modal-body">
                                                                                                <iframe title="clip" width="100%" height="100%" src="https://www.youtube.com/embed/qT7b6Cjam8E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>00:03:01</td>
                                                                    </tr>
                                                                    {/* Close Single Item */}

                                                                    {/* Single Item */}
                                                                    <tr>
                                                                        <td><i className="fas fa-play-circle mr-2"></i>Bài 2: Các kỹ năng cần thiết cần cho Quảng cáo Facebook</td>
                                                                        <td>
                                                                            <div>
                                                                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                                                                    Học Thử
                                                                            </button>
                                                                                {/* The Modal */}
                                                                                <div className="modal fade" id="myModal">
                                                                                    <div className="modal-dialog">
                                                                                        <div className="modal-content" style={{ height: "600px" }}>
                                                                                            {/* Modal body */}
                                                                                            <div className="modal-body">
                                                                                                <iframe title="clip" width="100%" height="100%" src="https://www.youtube.com/embed/qT7b6Cjam8E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>00:03:01</td>
                                                                    </tr>
                                                                    {/* Close Single Item */}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="accordion" className="mb-3">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <a className="card-link text-dark" data-toggle="collapse" href="#collapseOne">
                                                            <b>Phần 2: Shape and Images - Hình và Hình ảnh</b>
                                                        </a>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                                        <div className="card-body">
                                                            <table className="table table-hover">
                                                                <tbody>
                                                                    <tr>
                                                                        <td><i className="fas fa-play-circle mr-2"></i>Bài 4: Tìm hiểu về hình ảnh trong thiết kế</td>
                                                                        <td>
                                                                        </td>

                                                                        <td>00:03:01</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><i className="fas fa-play-circle mr-2"></i>Bài 5: Giới thiệu các bước biên tập, xử lý hình ảnh</td>
                                                                        <td>
                                                                        </td>
                                                                        <td>00:03:01</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Close Danh Sách Videos */}

                                    {/* Có thể bạn quan tâm */}
                                    <div className="detail-learn mt-2">
                                        <div>
                                            <p className="pl-3 pt-3"><b>Có Thể Bạn Quan Tâm</b></p>
                                        </div>
                                        <hr />
                                        <div className="container mb-5">
                                            <Slider {...settings}>
                                                <div className="card">
                                                    <img className="card-img-top" src="https://static.unica.vn/upload/images/2019/04/lap-trinh-restful-webservice-trong-6-tuan_1555656722.jpg" alt="Card" style={{ width: '100%' }} />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Lập trình Restful Webservice trong 6 tuần</h4>
                                                        <p className="card-text">Trần Duy Thanh</p>
                                                        <p className="card-text"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                                                        <p className="card-text"><b>800.000<sup>đ</sup></b></p>
                                                    </div>
                                                </div>

                                                <div className="card">
                                                    <img className="card-img-top" src="https://static.unica.vn/upload/images/2019/05/trinh-chieu-chuyen-nghiep-voi-power-point_1557995369.jpg" alt="Card" style={{ width: '100%' }} />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Lập trình Restful Webservice trong 6 tuần</h4>
                                                        <p className="card-text">Trần Duy Thanh</p>
                                                        <p className="card-text"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                                                        <p className="card-text"><b>800.000<sup>đ</sup></b></p>
                                                    </div>
                                                </div>

                                                <div className="card">
                                                    <img className="card-img-top" src="https://static.unica.vn/upload/images/2019/04/hoc-toan-tap-ngon-ngu-lap-trinh-c_1555637351.jpg" alt="Card" style={{ width: '100%' }} />
                                                    <div className="card-body">
                                                        <h4 className="card-title">Lập trình Restful Webservice trong 6 tuần</h4>
                                                        <p className="card-text">Trần Duy Thanh</p>
                                                        <p className="card-text"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                                                        <p className="card-text"><b>800.000<sup>đ</sup></b></p>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                    {/* Close Có thể bạn quan tâm */}

                                    {/* Khóa Học Liên Quan */}
                                    <div className="detail-learn mt-2">
                                        <div>
                                            <p className="pl-3 pt-3"><b>Khóa Học Liên Quan</b></p>
                                        </div>
                                        <hr />
                                        <div className="detail-learn-content p-3">
                                            {/* item liên quan */}
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <a href="asd.html"><img className="img-fluid w-100 h-100" src="https://static.unica.vn/upload/images/2019/04/hoc-toan-tap-ngon-ngu-lap-trinh-c_m_1555637351.jpg" alt="asd" /></a>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div>
                                                        <a href="/toan-tap-ngon-ngu-lap-trinh-c" className="text-dark"><b>Toàn tập ngôn ngữ lập trình C#</b></a>
                                                    </div>

                                                    <div className="gv-combo">Trần Duy Thanh</div>
                                                    <div className="rate-combo">
                                                        <p>
                                                            <span className="star-rate">
                                                                <i className="fa fa-star co-or" aria-hidden="true"></i><i className="fa fa-star co-or" aria-hidden="true"></i><i className="fa fa-star co-or" aria-hidden="true"></i><i className="fa fa-star co-or" aria-hidden="true"></i><i className="fa fa-star co-or" aria-hidden="true"></i> (78)
                                                                </span>
                                                        </p>

                                                        <p>
                                                            <span>
                                                                <i className="fa fa-users" aria-hidden="true"></i> 1464 học viên
                                                                </span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="col-lg-2">
                                                    <p className="card-text"><b>800.000<sup>đ</sup></b></p>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* close item liên quan */}

                                            {/* item liên quan */}
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <a href="asd.html"><img className="img-fluid w-100 h-100" src="https://static.unica.vn/upload/images/2019/04/cau-truc-du-lieu-va-giai-thuat_m_1556177172.jpg" alt="asd" /></a>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div>
                                                        <a href="/toan-tap-ngon-ngu-lap-trinh-c" className="text-dark"><b>Toàn tập ngôn ngữ lập trình C#</b></a>
                                                    </div>

                                                    <div className="gv-combo">Trần Duy Thanh</div>
                                                    <div className="rate-combo">
                                                        <p>
                                                            <span className="star-rate">
                                                                <i className="fa fa-star co-or" aria-hidden="true"></i><i className="fa fa-star co-or" aria-hidden="true"></i><i className="fa fa-star co-or" aria-hidden="true"></i><i className="fa fa-star co-or" aria-hidden="true"></i><i className="fa fa-star co-or" aria-hidden="true"></i> (78)
                                                                </span>
                                                        </p>

                                                        <p>
                                                            <span>
                                                                <i className="fa fa-users" aria-hidden="true"></i> 1464 học viên
                                                                </span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="col-lg-2">
                                                    <p className="card-text"><b>800.000<sup>đ</sup></b></p>
                                                </div>
                                            </div>
                                            {/* close item liên quan */}
                                        </div>
                                    </div>
                                    {/* Close Khóa Học Liên Quan */}

                                    {/* Thông Tin Giảng viên */}
                                    <div className="detail-learn mt-2">
                                        <div>
                                            <p className="pl-3 pt-3"><b>Thông tin giảng viên</b></p>
                                        </div>
                                        <hr />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div style={{ border: "1px solid #d9d9d9", borderRadius: "88px" }}>
                                                        <img className="w-100" src="https://static.unica.vn/uploads/nguyenthiDieuLinh/April202017930am_duong-tich-dat_thumb.jpg" alt="asda" />
                                                    </div>

                                                    <div className="text-center">
                                                        <i className="fas fa-users text-dark mr-2"></i><b>779</b> học viên<br />
                                                        <i className="far fa-play-circle text-dark mr-2"></i><b>1</b> khóa học
                                                </div>
                                                </div>

                                                <div className="col-lg-9">
                                                    <a href="asd.html" className="text-info">Dương Tích Đạt</a>
                                                    <p className="text-muted">Giảng viên</p>
                                                    <p>Giảng viên Dương Tích Đạt - tốt nghiệp Thạc sĩ Khoa học máy tính tại Trường Đại học Công nghệ Thông tin - Đại học Quốc gia TP.HCM, có kinh nghiệm giảng dạy tại các trường:</p>
                                                    <p>Trường Đại học Khoa học Tự nhiên TP. HCM - phụ trách giảng dạy ứng dụng CNTT trong thư viện, xây dựng thư viện điện tử, thư viện số.</p>
                                                    <p>Trường Đại học Hoa Sen - công tác tại trung tâm phát triển phần mềm LSC và tham gia giảng dạy tại Khoa Khoa học Công nghệ, Trung tâm tin học.
                                                    Trường CĐ Nghề CNTT iSPACE (Quản lý bộ môn Kỹ thuật lập trình - Khoa Kỹ thuật phần mềm)</p>
                                                    <p>Giảng viên Đại học Gia Định, trường TCCN Hồng Hà, trường TC Thông tin truyền thông.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Close thông tin giảng viên */}

                                    {/* Đánh Giá Học viên*/}
                                    <div className="detail-learn mt-2">
                                        <div>
                                            <p className="pl-3 pt-3"><b>Đánh giá của học viên</b></p>
                                        </div>
                                        <hr />
                                        <div className="detail-learn-content p-3 text-center">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <h1>5</h1>
                                                    <div>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                    </div>
                                                    <p>60 đánh giá</p>
                                                </div>

                                                <div className="col-lg-5">
                                                    <div className="progress mb-2">
                                                        <div className="progress-bar bg-success" style={{ width: "80%" }}>80%</div>
                                                    </div>

                                                    <div className="progress mb-2">
                                                        <div className="progress-bar bg-success" style={{ width: "60%" }}>60%</div>
                                                    </div>

                                                    <div className="progress mb-2">
                                                        <div className="progress-bar bg-success" style={{ width: "50%" }}>50%</div>
                                                    </div>

                                                    <div className="progress mb-2">
                                                        <div className="progress-bar bg-success" style={{ width: "30%" }}>30%</div>
                                                    </div>

                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" style={{ width: "20%" }}>20%</div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3">
                                                    <div>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                    </div>

                                                    <div>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-muted"></i>
                                                    </div>

                                                    <div>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-muted"></i>
                                                        <i className="fas fa-star text-muted"></i>
                                                    </div>

                                                    <div>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-muted"></i>
                                                        <i className="fas fa-star text-muted"></i>
                                                        <i className="fas fa-star text-muted"></i>
                                                    </div>

                                                    <div>
                                                        <i className="fas fa-star text-danger"></i>
                                                        <i className="fas fa-star text-muted"></i>
                                                        <i className="fas fa-star text-muted"></i>
                                                        <i className="fas fa-star text-muted"></i>
                                                        <i className="fas fa-star text-muted"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Close Đánh Giá Học viên*/}

                                    {/* Nhận Xét Học viên*/}
                                    <div className="detail-learn mt-2 pb-3">
                                        <div>
                                            <p className="pl-3 pt-3"><b>Nhận xét của học viên</b></p>
                                        </div>
                                        <hr />
                                        <div className="container">
                                            {/* item nhận xét */}
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div style={{ border: "1px solid #d9d9d9" }}>
                                                        <img className="w-100" src="https://graph.facebook.com/1439202702893670/picture?type=small" alt="asdasd" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-9">
                                                    <a href="asd.html" className="text-info">Đào Văn Cường</a>
                                                    <div>
                                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                                    </div>
                                                    <p>Tôi không rõ lắm nhưng khóa học với tôi là tốt, Tôi đã hiểu bài,với người không có kiến thức gì về lập trình như tôi, thì nhiều chỗ phải xem di
                                                    xem lại mới ngộ ra,có thể vì tuổi tác,hoặc là không được thông thoáng não bộ lắm,phải cố thôi vì thính học mà.</p>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* close item nhận xét */}

                                            {/* item nhận xét */}
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div style={{ border: "1px solid #d9d9d9" }}>
                                                        <img className="w-100" src="https://graph.facebook.com/1029375513905477/picture?type=small" alt="asdasd" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-9">
                                                    <a href="asd.html" className="text-info">Cường Ly</a>
                                                    <div>
                                                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                                    </div>
                                                    <p>Thầy dạy rất hay và dễ hiểu .</p>
                                                </div>
                                            </div>
                                            <hr />
                                            {/* close item nhận xét */}
                                            <button className="btn btn-info container">Xem Thêm Các Bình Luận Trước</button>
                                        </div>
                                    </div>
                                    {/* Close Nhận Xét Học viên*/}
                                </div>


                                {/* Bảng giá học phí */}
                                <div className="bill col-lg-4 col-md-12 p-3">
                                    <div className="container">
                                        <div className="row">
                                            <span className="ml-3">
                                                <h2>600,000<sup>đ</sup></h2>
                                            </span>

                                            <span>
                                                <h4 className="ml-3 h-100" style={{ lineHeight: "40px" }}><del>700,000<sup>đ</sup></del></h4>
                                            </span>

                                        </div>
                                        <p><i className="fas fa-tachometer-alt mr-2"></i><b>Thời gian ưu đãi còn 1 ngày</b></p>
                                        <button className="container btn btn-danger mb-3" id="dk"><b><i className="fas fa-clipboard-check mr-2"></i>ĐĂNG KÝ HỌC</b></button>
                                        <p className="text-center mt-2">Hoàn tiền trong 7 ngày nếu không hài lòng</p>

                                        <div className="bill-content">
                                            <p><i className="far fa-clock mr-2"></i>Thời lượng : <b>06 giờ 22 phút</b></p>
                                            <p><i className="fas fa-play mr-2"></i>Giáo trình : <b>64 bài giảng</b></p>
                                            <p><i className="fas fa-history mr-2"></i>Sở hữu khóa học trọn đời</p>
                                            <p><i className="fas fa-percent mr-2"></i>Giảm thêm <b>10%</b> khi thanh toán online</p>
                                        </div>

                                        <form className="form-inline" action="#">
                                            <input type="text" className="form-control mb-2" id="maGiamGia" placeholder="Nhập mã giảm giá ( nếu có )..." style={{ width: "100%" }} />
                                            <button type="submit" className="btn btn-secondary mb-2 container">Áp Dụng</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </section >
                </div >
                <Footer />
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        KhoaHocChiTiet : state.HomePageReducer.KhoaHocChiTiet,
        trangThaiDangNhap: state.ElearningReducer.trangThaiDangNhap
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LayChiTiet : (idKhoaHoc) => {
            dispatch(LayChiTietKhoaHoc(idKhoaHoc))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChiTietKhoaHoc)