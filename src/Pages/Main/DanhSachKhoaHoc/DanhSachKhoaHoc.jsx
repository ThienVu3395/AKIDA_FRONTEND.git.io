import React, { Component } from 'react';
import '../../css/DanhSachKhoaHoc.css';
import KhoaHoc from '../DanhSachKhoaHoc/KhoaHoc';
import KhoaHocMoiNhat from '../DanhSachKhoaHoc/KhoaHocMoiNhat';
import KhoaHocTieuBieu from '../DanhSachKhoaHoc/KhoaHocTieuBieu';
import { connect } from 'react-redux';

// import BlockUi from 'react-block-ui';
// import 'react-block-ui/style.css';

import Slider from "react-slick";
import { Tab, Tabs } from 'react-bootstrap';
import { LayDanhSachDanhMuc, LayDanhSachKhoaHocTheoDanhMuc, LayDanhSachKhoaHocMoiNhat, LayDanhSachKhoaHocTieuBieu } from '../../../Redux/Actions/HomePage/HomePage.action'


class DanhSachKhoaHoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maDanhMuc: "3",
            // blocking: false,
        }
    }

    componentDidMount() {
        this.props.LayDanhSachDanhMuc();
        this.props.LayDanhSachKhoaHocTheoDanhMuc(this.state.maDanhMuc);
        this.props.LayDanhSachKhoaHocMoiNhat();
        this.props.LayDanhSachKhoaHocTieuBieu();
    }

    renderKhoaHocTheoDanhMuc = () => {
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
                <Tab key={key} eventKey={item.ID_Category} title={item.Name} className="mt-3">
                    {/* <BlockUi tag="div" blocking={this.state.blocking} message="Loading, Please Wait..."> */}
                    <div className="container">
                        <Slider {...set}>
                            {this.renderKhoaHocTheoDanhMuc()}
                            {/* <button className="btn btn-success">Xem Thêm</button> */}
                        </Slider>
                    </div>
                    {/* </BlockUi> */}
                </Tab>
            )
        })
        return dsDanhMuc;
    }

    renderKhoaHocMoiNhat = () => {
        let dsKhoaHocMoiNhat = this.props.DanhSachKhoaHocMoiNhat.map((item, key) => {
            return (
                <KhoaHocMoiNhat KhoaHoc={item} key={key} />
            )
        })
        return dsKhoaHocMoiNhat;
    }

    renderKhoaHocTieuBieu = () => {
        let dsKhoaHocTieuBieu = this.props.DanhSachTieuBieu.map((item, key) => {
            return (
                <KhoaHocTieuBieu KhoaHoc={item} key={key} />
            )
        })
        return dsKhoaHocTieuBieu;
    }

    chonMaDanhMuc = (maDanhMuc) => {
        // this.setState({ blocking: true });
        this.props.LayDanhSachKhoaHocTheoDanhMuc(maDanhMuc);
    }

    render() {
        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 4
        };

        const settings2 = {
            infinite: false,
            speed: 500,
            slidesToShow: 4
        };
        return (
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-5">
                        <div className="card h-100">
                            <NavLink to={`/chi-tiet-khoa-hoc/${"asdasd"}`} className="w-100 h-100">
                                <img className="card-img-top h-100 img-fluid" src="https://static.unica.vn/upload/images/2019/04/dot-pha-thu-nhap-6-kenh-marketing-online_1555569994.jpg" alt="Card" />
                            </NavLink>
                        </div>
                    </div> */}
                    <div className="col-lg-12">
                        <Tabs defaultActiveKey={this.state.maDanhMuc} id="uncontrolled-tab-example" variant="pills" onSelect={(eventKey) => this.chonMaDanhMuc(eventKey)}>
                            {this.renderDanhMuc(settings)}
                        </Tabs>
                    </div>
                </div>

                <div className="container mt-5 mb-2">
                    <div className="row justify-content-between">
                        <h3 className="mb-3 titleCourse">KHÓA HỌC MỚI NHẤT</h3>
                        <button className="viewall">Xem Tất Cả</button>
                    </div>

                    <Slider {...settings2}>
                        {this.renderKhoaHocMoiNhat()}
                    </Slider>
                </div>

                <div className="container mt-5 mb-2">
                    <div className="row justify-content-between">
                        <h3 className="mb-3 titleCourse">KHÓA HỌC TIÊU BIỂU</h3>
                        <button className="viewall">Xem Tất Cả</button>
                    </div>
                    <Slider {...settings2}>
                        {this.renderKhoaHocTieuBieu()}
                    </Slider>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        DanhSachDanhMuc: state.HomePageReducer.DanhSachDanhMuc,
        DanhSachKhoaHocTheoDanhMuc: state.HomePageReducer.DanhSachKhoaHocTheoDanhMuc,
        DanhSachKhoaHocMoiNhat: state.HomePageReducer.DanhSachKhoaHocMoiNhat,
        DanhSachTieuBieu: state.HomePageReducer.DanhSacKhoaHocTieuBieu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LayDanhSachDanhMuc: () => {
            dispatch(LayDanhSachDanhMuc())
        },

        LayDanhSachKhoaHocTheoDanhMuc: (idDanhMuc) => {
            dispatch(LayDanhSachKhoaHocTheoDanhMuc(idDanhMuc))
        },

        LayDanhSachKhoaHocMoiNhat: () => {
            dispatch(LayDanhSachKhoaHocMoiNhat())
        },

        LayDanhSachKhoaHocTieuBieu: () => {
            dispatch(LayDanhSachKhoaHocTieuBieu())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoaHoc)
