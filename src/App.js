import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/main';
import KetQuaTimKiem from './Pages/KetQuaTimKiem';
import ChiTietKhoaHoc from './Pages/ChiTietKhoaHoc';
import ThongTinCaNhan from './Pages/ThongTinCaNhan';
import KichHoatKhoaHoc from './Pages/KichHoatKhoaHoc';
import NapThe from './Pages/NapThe';
import QuanTri from './Pages/QuanTri/index'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path='/trang-chu' component={Main} />
            <Route exact path='/chi-tiet-khoa-hoc/:idKhoaHoc' component={ChiTietKhoaHoc} />
            <Route exact path='/ket-qua' component={KetQuaTimKiem} />
            <Route exact path='/thong-tin-cua-ban' component={ThongTinCaNhan} />
            <Route exact path='/kich-hoat-khoa-hoc' component={KichHoatKhoaHoc} />
            <Route exact path='/nap-the' component={NapThe} />
            <Route exact path='/quan-tri' component={QuanTri} />
            <Route path='/' component={Main} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}
