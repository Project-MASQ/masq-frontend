import React, {useState} from 'react';
import './styles.scss'
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {
    ROUTE_HOME,
    goToPage, ROUTE_PATIENT_ORDER, ROUTE_RESTOCK, ROUTE_ORDER_HISTORY, ROUTE_PAYMENT_METHODS, ROUTE_USER_MANAGEMENT
} from "../../../state/modules/routing";
import {
    DownOutlined,
    MenuFoldOutlined
} from "@ant-design/icons";
import Logo from 'assets/images/Logo/logo-sidebar.png';
import IconLogo from 'assets/images/Logo/icon-zent-v2.png';
import {setIsShowSideBar} from "../../../state/modules/app";
import glasess from '../../../assets/images/Icon/glasses.png';

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
            label: 'Patient\'s Own Frame',
            icon: (
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.95 9.927h3.591c.27 0 .495-.227.495-.5a.495.495 0 0 0-.495-.494h-3.59a.496.496 0 0 0 0 .994ZM6.183 5.6H3.95a.501.501 0 0 0-.496.5c0 .273.225.493.496.493h2.23a.496.496 0 0 0 .001-.993Zm4.71-.583c.155-.002.324-.004.478-.004.165 0 .297.134.297.3v5.36c0 1.654-1.327 2.994-2.964 2.994H3.449c-1.716 0-3.116-1.407-3.116-3.14V3.34C.333 1.687 1.667.333 3.31.333h3.525c.172 0 .304.14.304.307v2.147c0 1.22.996 2.22 2.204 2.226.282 0 .531.002.749.004l.453.003.347-.003Zm.182-.973c-.543.002-1.182 0-1.642-.005-.73 0-1.332-.607-1.332-1.344V.937c0-.287.346-.43.543-.222l1.34 1.406L11.3 3.506a.318.318 0 0 1-.226.538Z" fill="#fff"/>
                </svg>
            ),
            route: ROUTE_HOME,
            routeActive: [ROUTE_HOME],
        },
        {
            label: 'Patient Order',
            icon: (
                <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.514 3.288c2.107-.43 5.033-.43 8.115 1.521.273.195.429.546.35.859-.155.585-.467 1.56-1.091 2.613-.586.937-1.639 1.522-2.731 1.483a22.692 22.692 0 0 1-5.969-.976c-.702-.234-1.248-.78-1.443-1.482-.04-.117-.04-.156-.078-.312" stroke="#fff" />
                    <path d="M15.975 4.43c.124.165.09.4-.076.524l-2.614 1.95a.375.375 0 0 1-.449-.6l2.614-1.951a.375.375 0 0 1 .525.076Zm.155 2.26c.124.165.092.4-.073.525l-1.6 1.21a.375.375 0 0 1-.452-.599l1.6-1.21a.375.375 0 0 1 .524.074Zm1.561-2.3a.375.375 0 0 1-.076.525l-4.603 3.433a.375.375 0 0 1-.449-.601l4.604-3.433a.375.375 0 0 1 .524.076ZM8.362 2.578a.25.25 0 0 1-.092.342L5.422 4.558a.25.25 0 0 1-.25-.433l2.849-1.639a.25.25 0 0 1 .34.092Zm-.116 2.304a.25.25 0 0 1-.095.34L6.357 6.237A.25.25 0 0 1 6.11 5.8l1.794-1.014a.25.25 0 0 1 .34.095Zm1.794-2.108a.25.25 0 0 1-.093.341L4.953 5.963a.25.25 0 1 1-.248-.434L9.7 2.68a.25.25 0 0 1 .34.093Z" fill="#fff"/>
                    <path d="M11.773 1.689C10.252 1.142 5.727-.067 1.318 3.093c-.273.195-.39.546-.273.897.195.585.585 1.56 1.249 2.536.624.897 1.716 1.404 2.847 1.326a21.59 21.59 0 0 0 5.891-1.326 2.196 2.196 0 0 0 1.366-1.56 6.256 6.256 0 0 0 .078-2.458 1.08 1.08 0 0 0-.703-.82Z" stroke="#fff"/>
                </svg>
            ),
            route: ROUTE_PATIENT_ORDER,
            routeActive: [ROUTE_PATIENT_ORDER],
        },
        {
            label: 'Restock',
            icon: <img src={glasess} alt={""}/>,
            route: ROUTE_RESTOCK,
            routeActive: [ROUTE_RESTOCK],
        },
        {
            label: 'Account Management',
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#fff">
                        <path d="M7 14a5.97 5.97 0 0 1 1.522-3.984C8.348 10.011 8.18 10 8 10c-3.192 0-5.539.795-6.837 1.382A1.989 1.989 0 0 0 0 13.2V16h7.349A5.97 5.97 0 0 1 7 14Zm1-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm3 8a.997.997 0 0 1-.707-.293l-2-2 1.414-1.414L11 13.586l3.293-3.293 1.414 1.414-4 4A.997.997 0 0 1 11 16Z"/>
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h16v16H0z"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
            route: null,
            routeActive: [ROUTE_ORDER_HISTORY, ROUTE_PAYMENT_METHODS, ROUTE_USER_MANAGEMENT],
            children: [
                {
                    label: 'Order History',
                    icon: '',
                    route: ROUTE_ORDER_HISTORY,
                    routeActive: [ROUTE_ORDER_HISTORY],
                },
                {
                    label: 'Payment Methods',
                    route: null,
                    icon: '',
                    routeActive: [ROUTE_PAYMENT_METHODS]
                },
                {
                    label: 'User Management',
                    route: null,
                    icon: '',
                    routeActive: [ROUTE_USER_MANAGEMENT]
                },
            ]
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
                                                            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5 7a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L5 4.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 5 7Z" fill="#fff"/>
                                                            </svg>
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
