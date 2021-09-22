import React from 'react';
import HeaderPanel from '../../../component/Header/HeaderPanel';
import Header from '../../../component/Header/Header';
import Footer from '../../../component/Footer/Footer';
import { Route } from 'react-router-dom';
import LayoutCss from './LayOut.module.css';


const Layout = ({ footer = true, component, path, backGround, panel, ...rest }) => {
  return (
      <div className={backGround && LayoutCss.background}>
        {panel ? <HeaderPanel backGround={backGround} /> : <Header backGround={backGround} />}
          <Route
            {...rest}
            path={path}
            component={component}
          />
        {footer ? <Footer /> : null}
      </div>
  );
}

export default Layout;
