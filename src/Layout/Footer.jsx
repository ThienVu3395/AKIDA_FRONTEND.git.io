import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="foo">
                {/* contact */}
                <section id="contact">
                    <div className="contact-one container">
                        <h4>Hỗ trợ &amp; Tư vấn</h4>
                        <div className="contact-top">
                            <div style={{ color: '#FF961E' }}>
                                <i className="fas fa-phone mr-2" />
                                <span>Hotline: 1900.63.63.42</span>
                            </div>
                            <div style={{ color: '#4DBE77' }}>
                                <i className="fas fa-envelope mr-2" />
                                <span>contact@blacasa.vn</span>
                            </div>
                            <div style={{ color: '#069D86', border: '1px solid #069D86' }}>
                                <i className="fas fa-comment-dots mr-2" />
                                <span>Tư vấn trực tuyến</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-two container">
                        <div>
                            <h4>Đăng ký nhận tin &amp; kết nối</h4>
                            <p>Đăng ký email để nhận tin mới nhất từ Blacasa.</p>
                            <form action="#" className="was-validated">
                                <div className="form-group">
                                    <div className="invalid-feedback">The e-mail address you supplied is not valid.</div>
                                    <input type="email" className="email form-control" id="uname" placeholder="Email" name="uname" required />
                                </div>
                                <button type="submit" className="btn btn-success">Đăng ký</button>
                            </form>
                        </div>
                        <div>
                            <p>Cộng đồng hơn 15,000 thành viên đang chờ bạn</p>
                            <div className="social-button">
                                <div className="facebook">
                                    <a href="https://www.facebook.com/blacasavn/" >
                                        <i className="fab fa-facebook" style={{ color: '#3A559F' }} />
                                    </a>
                                </div>
                                <div className="twitter">
                                    <a href="https://twitter.com/blacasavn" >
                                        <i className="fab fa-twitter-square" style={{ color: '#50ABF1' }} />
                                    </a>
                                </div>
                                <div className="youtube">
                                    <a href="https://www.youtube.com/channel/UC07Syz4ei-kCJ4M96FdrINQ" >
                                        <i className="fab fa-youtube" style={{ color: '#DC472E' }} />
                                    </a>
                                </div>
                                <div className="google-plus">
                                    <a href="https://plus.google.com/113728550712414360522" >
                                        <i className="fab fa-google-plus-g" style={{ color: '#DC472E' }} />
                                    </a>
                                </div>
                                <div className="message">
                                    <a href="https://zalo.me/1032344534667209164" >
                                        <i className="fas fa-sms" style={{ color: '#007BAC' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /contact */}

                {/* footer */}
                <section id="footer">
                    <div className="footer-top container">
                        <div className="statistical">
                            <h4 style={{ borderBottom: '1px solid #93BFB8' }}>Thống kê</h4>
                            <p style={{ borderBottom: '1px solid #93BFB8' }}><b>4,100+</b> gia sư</p>
                            <p style={{ borderBottom: '1px solid #93BFB8' }}><b>30,000+</b> người dùng</p>
                            <p style={{ borderBottom: '1px solid #93BFB8' }}><b>24,000+</b> yêu cầu tìm gia sư</p>
                            <p><b>97%</b> người dùng hài lòng</p>
                        </div>
                        <div className="download-detail">
                            <h4>Tải ứng dụng "Blacasa Gia Sư" để tương tác tốt hơn</h4>
                            <p style={{ fontSize: 15 }}>
                                Nếu bạn tìm gia sư: Ứng dụng Blacasa bạn sẽ dễ dàng nhận được các thông báo
                                khi có gia sư gửi đề nghị dạy. Liên hệ với gia sư dễ dàng hơn.
      </p>
                            <p style={{ fontSize: 15 }}>
                                Nếu bạn tìm lớp dạy: Ứng dụng Blacasa giúp bạn cập nhật các lớp mới phù hợp với bạn dễ dàng
        hơn, liên lạc thuận tiện hơn.<br />
                                Đã có trên IOS và Android. Tìm theo tên <b>"Blacasa Gia sư"</b> hoặc theo đường dẫn dưới.
      </p>
                            <div className="Appstore mr-2">
                                <a href="https://itunes.apple.com/vn/app/blacasa-gia-s%C6%B0/id1426179500?ls=1&mt=8" >
                                    <img src="https://help.acuityscheduling.com/hc/article_attachments/115000907391/AppStore.png" width="100%" alt="asd" />
                                </a>
                            </div>
                            <div className="GooglePlay">
                                <a href="https://play.google.com/store/apps/details?id=giasu.blacasa.vn" >
                                    <img src="https://s7d5.scene7.com/is/image/Guess/GooglePlay_Store_Badge_EN?$png-alpha$&wid=640&" width="100%" alt="asd"/>
                                </a>
                            </div>
                        </div>
                        <div className="mobile-app" />
                    </div>
                    <div className="footer-bottom container">
                        <div className="info">
                            <h6>© 2019 Công ty cổ phần Blacasa Việt Nam</h6>
                            <p>Văn phòng: Số 5 ngõ 92 Láng Hạ, quận Đống Đa, Hà Nội</p>
                            <p>Trụ sở: Số 10, ngách 192/30 đường Yên Duyên, P. Yên Sở, Q. Hoàng Mai, Hà Nội</p>
                            <p>Giấy phép ĐKKD số 0107721396 do Sở kế hoạch và đầu tư thành phố Hà Nội cấp cấp ngày 09/02/2017</p>
                        </div>
                        <div className="license-info">
                            <h6>Giấy phép</h6>
                            <p><a href="adas.html">MXH 154/GP-BTTTT</a></p>
                            <p><a href="adas.html">SGD 2018-0040/ĐK/TMĐT</a></p>
                        </div>
                        <div className="license">
                            <a href="adas.html">
                                <div className="DMCA" />
                            </a>
                            
                            <a href="adas.html">
                                <div className="boCongThuong" />
                            </a>
                        </div>
                    </div>
                </section>
                {/* /footer */}
            </div>
        )
    }
}
