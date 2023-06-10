import React, {useState} from 'react';
import './styles.scss'
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {
    ROUTE_HOME,
    goToPage,
    ROUTE_EMPLOY
} from "../../../state/modules/routing";
import {
    AppstoreOutlined,
    DownOutlined,
    MenuFoldOutlined,
    UserOutlined
} from "@ant-design/icons";
import Logo from 'assets/images/Logo/zent_logo_light.png';
import IconLogo from 'assets/images/Logo/icon-zent-v2.png';
import {setIsShowSideBar} from "../../../state/modules/app";

SideBar.prototype = {
    isShowSideBar: PropTypes.bool.isRequired,
    handleToggleIsShowSideBar: PropTypes.func,
}

SideBar.defaultProps = {
    isShowSideBar: true
}

function SideBar (props) {
    const currentRoute = useSelector(state => state.location.type);
    const [indexMenuItemSelect, setIndexMenuItemSelect] = useState(null);
    const [indexMenuSubItemSelect, setIndexMenuSubItemSelect] = useState(null);
    const isShowSideBar = useSelector(state => state.app.isShowSideBar);

    const dispatch = useDispatch();

    const handleCheckRoute = (routes) => {
        if (routes && routes.length > 0) {
            return routes.includes(currentRoute);
        }
    };

    const handleSetIndexMenu = (index, menuNavItem) => {
        if (menuNavItem.route) {
            dispatch(goToPage(menuNavItem.route))
        }
        setIndexMenuItemSelect(index !== indexMenuItemSelect ? index : null)
        setIndexMenuSubItemSelect(null);
    }

    const handleSetIndexSubMenu = (indexMenuSub, indexMenu) => {
        setIndexMenuSubItemSelect(indexMenuSubItemSelect !== indexMenuSub ? indexMenuSub : null)
        setIndexMenuItemSelect(indexMenu);
    }

    const routeMap = [
        {
            label: 'Tổng quan',
            icon: <AppstoreOutlined />,
            route: ROUTE_HOME,
            routeActive: [ROUTE_HOME],
        },
        // {
        //     label: 'Quản lý nhân viên',
        //     icon: <AppstoreOutlined />,
        //     route: null,
        //     routeActive: [ROUTE_EMPLOY],
        //     children: [
        //         {
        //             label: 'Danh sách nhân viên',
        //             icon: '',
        //             route: ROUTE_EMPLOY,
        //             routeActive: [ROUTE_EMPLOY],
        //         },
        //         {
        //             label: 'Nhân viên',
        //             route: null,
        //             icon: '',
        //             routeActive: [ROUTE_EMPLOY, ROUTE_EMPLOY]
        //         },
        //     ]
        // },
        {
            label: 'Quản lý nhân viên',
            icon: <UserOutlined />,
            route: ROUTE_EMPLOY,
            routeActive: [ROUTE_EMPLOY],
        }
    ]

    return (
        <div className={`${styles.sideBarWrap} ${!props.isShowSideBar ? styles.sideBarWrapClose : '' }`}>
            <div className={styles.logoWrap}>
                {
                    props.isShowSideBar ?
                    <div className={styles.imgWrap}>
                        <img src={Logo} alt=""/>
                    </div>:
                    <div className={`${styles.imgWrap} ${styles.imgWrapDesktop}`}>
                        <img src={IconLogo} alt=""/>
                    </div>
                }

                <div className={`${styles.btnToggleSideBar} ${styles.btnToggleSideBarMobi} ${!props.isShowSideBar ? styles.btnToggleSideBarClose : '' }`}
                     onClick={() => props.handleToggleIsShowSideBar()}>
                    <MenuFoldOutlined />
                </div>
            </div>

            <div className={styles.navbarWrap}>
                <ul className={styles.menuNav}>
                    {
                        routeMap.map((menuNavItem,indexMenu) => {
                            return (
                                <>
                                    {
                                        menuNavItem.type !== 'GROUP' ?
                                            <li key={indexMenu} className={`
                                                ${styles.menuNavItem} 
                                                ${handleCheckRoute(menuNavItem.routeActive) || indexMenu === indexMenuItemSelect ? styles.menuNavItemActive : ''}
                                            `}>
                                                <div
                                                    onClick={() => handleSetIndexMenu(indexMenu, menuNavItem)}
                                                    className={styles.contentNavItemWrap}>
                                                    <div className={styles.textWrap}>
                                                        <div className={styles.iconWrap}>
                                                            { menuNavItem.icon }
                                                        </div>
                                                        {
                                                            props.isShowSideBar ? <span className={styles.text}> { menuNavItem.label } </span> : ''
                                                        }
                                                    </div>
                                                    {
                                                        props.isShowSideBar && menuNavItem.children && menuNavItem.children.length > 0 ?
                                                        <div className={styles.btnDrop}>
                                                            <DownOutlined />
                                                        </div>: ''
                                                    }
                                                </div>
                                                {
                                                    props.isShowSideBar && menuNavItem.children && menuNavItem.children.length > 0 ?
                                                    <ul className={`
                                                        ${styles.menuSub} 
                                                        ${handleCheckRoute(menuNavItem.routeActive) || indexMenu === indexMenuItemSelect ? styles.menuSubActive : ''}
                                                    `}>
                                                    {
                                                        menuNavItem.children.map((menuSubItem, indexMenuSub) => {
                                                            return (
                                                                <li key={indexMenuSub} className={styles.menuSubItem}>
                                                                    {
                                                                        menuSubItem.children && menuSubItem.children.length > 0 ?
                                                                        <>
                                                                            <div
                                                                                onClick={() => handleSetIndexSubMenu(indexMenuSub, indexMenu)}
                                                                                className={`
                                                                                    ${styles.contentSubItemWrap} 
                                                                                    ${handleCheckRoute(menuSubItem.routeActive) || indexMenuSub === indexMenuSubItemSelect ? styles.menuSubItemActive : ''}
                                                                                `}>
                                                                                <div className={styles.textWrap}>
                                                                                    <div className={styles.iconWrap}>
                                                                                        { menuSubItem.icon }
                                                                                    </div>
                                                                                    <span className={styles.text}> {menuSubItem.label}</span>
                                                                                </div>
                                                                                {
                                                                                    menuSubItem.children && menuSubItem.children.length > 0 ?
                                                                                        <div className={styles.btnDrop}>
                                                                                            <DownOutlined />
                                                                                        </div>: ''
                                                                                }
                                                                            </div>
                                                                            <ul className={`
                                                                                ${styles.menuSubNav}
                                                                                ${handleCheckRoute(menuSubItem.routeActive) || indexMenuSub === indexMenuSubItemSelect ? styles.menuSubForSubItemActive : ''} 
                                                                            `}>
                                                                                {
                                                                                    menuSubItem.children.map((menuSubForSubItem, indexMenuSubForSubItem) => {
                                                                                        return (
                                                                                            <li key={indexMenuSubForSubItem} className={styles.menuSubNavItem}>
                                                                                                <div
                                                                                                    onClick={() => dispatch(goToPage(menuSubForSubItem.route))}
                                                                                                    className={`
                                                                                                        ${styles.contentSubNavItemWrap}
                                                                                                        ${handleCheckRoute([menuSubForSubItem.route]) || handleCheckRoute(menuSubForSubItem.routeActive) ? styles.menuSubFoSubItemActive : ''} 
                                                                                                    `}>
                                                                                                    <div className={styles.textWrap}>
                                                                                                        <div className={styles.iconWrap}>
                                                                                                            { menuSubForSubItem.icon }
                                                                                                        </div>
                                                                                                        <span className={styles.text}> {menuSubForSubItem.label}</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </li>
                                                                                        );
                                                                                    })
                                                                                }
                                                                            </ul>
                                                                        </> :
                                                                        <div
                                                                            onClick={() => dispatch(goToPage(menuSubItem.route))}
                                                                            className={`
                                                                                ${styles.contentSubItemWrap} 
                                                                                ${handleCheckRoute([menuSubItem.route]) || handleCheckRoute(menuSubItem.routeActive) ? styles.menuSubItemActive : ''}
                                                                            `}>
                                                                            <div className={styles.textWrap}>
                                                                                <div className={styles.iconWrap}>
                                                                                    { menuSubItem.icon }
                                                                                </div>
                                                                                <span className={styles.text}> {menuSubItem.label} </span>
                                                                            </div>
                                                                            {
                                                                                menuSubItem.children && menuSubItem.children.length > 0 ?
                                                                                <div className={styles.btnDrop}>
                                                                                    <DownOutlined />
                                                                                </div>: ''
                                                                            }
                                                                        </div>
                                                                    }
                                                                </li>
                                                            );
                                                        })
                                                    }
                                                </ul> : ''
                                            }
                                        </li> :
                                        <>
                                            {
                                                props.isShowSideBar ?
                                                <li key={indexMenu} className={`${styles.menuSessionItem}`}>
                                                    { menuNavItem.label }
                                                </li> : ''
                                            }
                                        </>
                                    }
                                </>
                            );
                        })
                    }
                </ul>
            </div>

            <div className={`${styles.btnToggleIsShowSideBar} ${!isShowSideBar ? styles.btnToggleIsHideSideBar : ''}`}>
                <svg onClick={() => dispatch(setIsShowSideBar(!isShowSideBar))} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5.5 7.5 8l6 7.5" stroke="#fff"/>
                    <path d="M8.5.5 2.5 8l6 7.5" stroke="#fff"/>
                </svg>
            </div>
        </div>
    );
}

export default SideBar
