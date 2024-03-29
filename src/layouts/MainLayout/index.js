import React, {useEffect} from 'react';
import './styles.scss'
import styles from './styles.module.scss';
import SideBar from './SideBar';
import Header from './Header';
import Footer from './Footer';
import {useDispatch, useSelector} from "react-redux";
import {setIsShowSideBar} from "../../state/modules/app";
import BreadCrumb from "./BreadCrumb";
import {ROUTE_HOME} from "../../state/modules/routing";

const MainLayout = (props) => {
    /* State */
    const isShowSideBar = useSelector(state => state.app.isShowSideBar);
    const breadcrumb = useSelector(state => state.app.breadcrumb);
    const currentRoute = useSelector(state => state.location.type);
    const dispatch = useDispatch();

    /* Hook */
    useEffect(() => {
        if (withWeb() <= 375) {
            dispatch(setIsShowSideBar(false))
        }
    }, [])

    /* Handle */
    const withWeb = () => {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }

	return (
        <div className={`${styles.boxMainLayout} ${currentRoute === ROUTE_HOME ? styles.boxMainLayoutShowBackGround : ''}`}>
            <div className={styles.headerBox}></div>
            <div className={styles.mainLayoutWrap}>
                <SideBar
                    isShowSideBar={isShowSideBar}
                    handleToggleIsShowSideBar={() => dispatch(setIsShowSideBar(!isShowSideBar))}
                />
                <div className={`${styles.mainWrap} ${!isShowSideBar ? styles.mainWrapWithConditionSideBarClose : ''}`}>
                    <Header
                        isShowSideBar={isShowSideBar}
                        handleToggleIsShowSideBar={() => dispatch(setIsShowSideBar(!isShowSideBar))}
                    />
                    <main className={styles.mainContentWrap}>
                        { breadcrumb && breadcrumb.length > 1 ? <BreadCrumb breadcrumb={breadcrumb} /> : '' }
                        {props.children}
                    </main>
                    <Footer />
                </div>
            </div>
            <div className={styles.footerBox}></div>
        </div>
	);
}

export default MainLayout
