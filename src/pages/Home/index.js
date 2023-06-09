import React, {useEffect} from 'react';
import MainLayout from '../../layouts/MainLayout';
import PropTypes from 'prop-types';
import './styles.scss'
import {useDispatch} from "react-redux";
import {setBreadCrumb} from "../../state/modules/app";
import {ROUTE_HOME} from "../../state/modules/routing";

HomePage.prototype = {
    name: PropTypes.string.isRequired,
}

HomePage.defaultProps = {
    name: 'Name'
}

function HomePage () {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('sdsdsdsd')
        let dataBreadCrumb = [
            {
                route: ROUTE_HOME,
                name: 'Trang chủ'
            }
        ]
        dispatch(setBreadCrumb(dataBreadCrumb));
    }, []);

  return (
    <MainLayout>
      <div>Home Page</div>
    </MainLayout>
  );
}

export default HomePage
