import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="header-top container">
                    <div className="header-top-content container p-2">
                        <div className="row">
                            <NavLink to="/trang-chu" className="logo mr-2">asd</NavLink>
                            <div className="input-form col-6 pt-1">
                                <form>
                                    <div className="input-group mb-3 input-group-sm">
                                        <input type="text" className="form-control form-search" name="timKiem" placeholder="Nhập Tên Khóa Học..."/>
                                        <div className="input-group-prepend input-search">
                                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                asdada
            </div>
        )
    }
}
