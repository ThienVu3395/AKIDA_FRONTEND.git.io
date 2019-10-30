// import React from 'react';
// // import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
// import Slider from "react-slick";
// import classnames from 'classnames';
// import { connect } from 'react-redux';
// import { layDanhMucKhoaHoc } from '../Redux/Actions/Elearning.action';
// import { layKhoaHocTheoDanhMuc } from '../Redux/Actions/Elearning.action';

// class DanhMuc extends React.Component {
//     constructor(props) {
//         super(props);
//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             activeTab: '1'
//         };
//     }

//     toggle(tab, maDM, maNhom) {
//         if (this.state.activeTab !== tab) {
//             this.setState({
//                 activeTab: tab
//             });
//         }
//         this.props.layKhoaHocTheoDanhMuc(maDM, maNhom);
//     }

//     renderDanhMuc = () => {
//         let content = this.props.dsDanhMuc.map((item, key) => {
//             return (
//                 <div className="col-lg-3" onClick={() => { this.toggle((key + 1).toString(), item.maDanhMuc, "GP01") }} key={key}>
//                     <NavItem className={"navitem linhVuc0" + (key + 1)}>
//                         <NavLink
//                             className={classnames({ active: this.state.activeTab === (key + 1).toString() })}
//                         >
//                             {item.tenDanhMuc}
//                         </NavLink>
//                     </NavItem>
//                 </div>
//             )
//         })
//         return content;
//     }

//     renderKhoaHocTheoDanhMuc = () => {
//         let content = this.props.dsKhoaHocDanhMuc.map((item, key) => {
//             return (
//                 <div className="container" key={key}>
//                     <Row>
//                         <Col>
//                             <div className="alert alert-success text-center">{item.tenKhoaHoc}</div>
//                         </Col>
//                     </Row>
//                 </div>
//             )
//         })
//         return content;
//     }

//     componentDidMount() {
//         this.props.layDanhMuc()
//     }

//     render() {
//         let settings = {
//             infinite: true,
//             speed: 500,
//             slidesToShow: 2,
//         };
//         return (
//             <div className="container danhMuc p-3">
//                 <h2 className="text-center">BẠN ĐANG QUAN TÂM ĐẾN LĨNH VỰC GÌ ?</h2>
//                 <Nav className="nav row">
//                     {this.renderDanhMuc()}
//                 </Nav>

//                 <TabContent activeTab={this.state.activeTab} className="mt-3">
//                     <TabPane tabId='1'>
//                         <Slider {...settings}>
//                             {this.renderKhoaHocTheoDanhMuc()}
//                         </Slider>
//                     </TabPane>

//                     <TabPane tabId='2'>
//                         <Slider {...settings}>
//                             {this.renderKhoaHocTheoDanhMuc()}
//                         </Slider>
//                     </TabPane>

//                     <TabPane tabId='3'>
//                         <Slider {...settings}>
//                             {this.renderKhoaHocTheoDanhMuc()}
//                         </Slider>
//                     </TabPane>

//                     <TabPane tabId='4'>
//                         <Slider {...settings}>
//                             {this.renderKhoaHocTheoDanhMuc()}
//                         </Slider>
//                     </TabPane>

//                     <TabPane tabId='5'>
//                         <Slider {...settings}>
//                             {this.renderKhoaHocTheoDanhMuc()}
//                         </Slider>
//                     </TabPane>

//                     <TabPane tabId='6'>
//                         <Slider {...settings}>
//                             {this.renderKhoaHocTheoDanhMuc()}
//                         </Slider>
//                     </TabPane>
//                 </TabContent>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         dsDanhMuc: state.ElearningReducer.danhSachDanhMuc,
//         dsKhoaHocDanhMuc: state.ElearningReducer.danhSachKhoaHocTheoDanhMuc
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         layDanhMuc: () => {
//             dispatch(layDanhMucKhoaHoc())
//         },

//         layKhoaHocTheoDanhMuc: (MaDanhMuc, MaNhom) => {
//             dispatch(layKhoaHocTheoDanhMuc(MaDanhMuc, MaNhom))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DanhMuc)