import React from 'react';
import './styles.scss'
import styles from './styles.module.scss';
import { Popover} from "antd";
import {
    MenuFoldOutlined
} from "@ant-design/icons";
import contentInfo from './ModalProfile';

const Header = (props) => {
    return (
        <header className={`${styles.headerWrap} header-wrap`}>
            <div className={styles.headerLeftWrap}>
                <div
                    className={`${styles.btnToggleSideBar} ${!props.isShowSideBar ? styles.btnToggleSideBarClose : '' }`}
                    onClick={() => props.handleToggleIsShowSideBar()}
                >
                    <MenuFoldOutlined />
                </div>
            </div>
            <div className={`${styles.headerRightWrap}`}>
                <div className={`${styles.itemHeaderRight}`}>
                    <div className={styles.iconWrap}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#2F4858">
                                <path d="M15 3H4.5L4 .8C3.9.3 3.5 0 3 0H1a1 1 0 0 0 0 2h1.2L4 10.2c.1.5.5.8 1 .8h8c.4 0 .8-.3.9-.7l2-6c.2-.5-.1-1.3-.9-1.3ZM5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 0h16v16H0z"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className={`${styles.itemHeaderRight}`}>
                    <Popover className={`popover-info-wrap`} placement="bottomRight" content={contentInfo} trigger="click">
                        <div className={styles.infoWrap}>
                            <div className={styles.avatarWrap}>
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.53 3.86A3.516 3.516 0 0 1 6 7.39a3.517 3.517 0 0 1-3.53-3.53A3.516 3.516 0 0 1 6 .333c1.96 0 3.53 1.57 3.53 3.528ZM6 13.668c-2.892 0-5.333-.47-5.333-2.284C.667 9.57 3.124 9.116 6 9.116c2.892 0 5.333.47 5.333 2.283 0 1.814-2.457 2.268-5.333 2.268Z" fill="#7E8CB2"/>
                                </svg>
                            </div>
                            <div className={styles.info}>
                                <p className={styles.name}>Lien To</p>
                                <p className={styles.roll}>Owner</p>
                            </div>
                            <div className={styles.btnWrap}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 9.625a.875.875 0 0 1-.619-.256l-3.5-3.5A.875.875 0 0 1 4.12 4.63L7 7.513 9.881 4.63a.874.874 0 1 1 1.239 1.24l-3.5 3.5a.875.875 0 0 1-.62.255Z" fill="#363E59"/>
                                </svg>
                            </div>
                        </div>
                    </Popover>
                </div>
            </div>
        </header>
    );
}

export default Header
