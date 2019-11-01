import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="header-top">
                    <div className="header-top-content container p-2">
                        <div className="row">
                            <NavLink to="/chu" className="logo col-lg-2 col-md-2 mr-2"></NavLink>
                        </div>
                    </div>
                </div>

                <div className="header-bottom mb-2">
                    <div className="header-bottom-content container p-2">
                        <div className="row">
                            <NavLink to='/courses' className="header-bottom-item mr-3 col-lg-2 col-md-4 text-center" style={{textDecoration:"none"}}>
                                <i className="fas fa-book-medical color-i mr-1"></i>
                                <span className="color-span">Quản Lý Khóa Học</span>
                            </NavLink>

                            <NavLink to='/users' className="header-bottom-item mr-3 col-lg-2 col-md-4 text-center" style={{textDecoration:"none"}}>
                                <i className="fas fa-users color-i mr-1"></i>
                                <span className="color-span">Quản Lý Users</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
