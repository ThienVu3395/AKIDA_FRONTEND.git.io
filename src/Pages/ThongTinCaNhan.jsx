import React from 'react';
import { Redirect } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import VaoHocContent from './VaoHocContent';
import ThongTinCaNhanContent from './ThongTinCaNhanContent';

class ThongTinCaNhan extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    renderRoleAction = () => {
        let ActionName = "";
        if (this.props.TrangThaiDangNhap !== 0) {
            let tk = JSON.parse(localStorage.getItem("UserLogin"));
            if(tk.Role_ID === 3){
                ActionName = "Khóa Học Đã Đăng Ký"
            }
            else if(tk.Role_ID === 2){
                ActionName = "Khóa Học Đã Giảng Dạy"
            }
            return ActionName;
        }
    }

    render() {
        if (this.props.TrangThaiDangNhap === 0) {
            return <Redirect to='/trang-chu' />
        }
        return (
            <>
                <Header />
                <div className="container p-2">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                <i className="fas fa-user mr-2"></i>Hồ Sơ Cá Nhân
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                <i className="fas fa-book mr-2"></i>{this.renderRoleAction()}
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.activeTab} className="p-3">
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <VaoHocContent />
                                </Col>
                            </Row>
                        </TabPane>

                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <Card body>
                                        <CardTitle><h2>Thông Tin Cá Nhân</h2></CardTitle>
                                        <ThongTinCaNhanContent />
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        TrangThaiDangNhap: state.HomePageReducer.TrangThaiDangNhap
    }
}

export default connect(mapStateToProps, null)(ThongTinCaNhan)