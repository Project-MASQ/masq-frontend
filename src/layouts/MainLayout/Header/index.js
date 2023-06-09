import React from 'react';
import './styles.scss'
import styles from './styles.module.scss';
import {Avatar, Badge, Popover} from "antd";
import {
    UserOutlined,
    AppstoreAddOutlined,
    MessageOutlined,
    MenuFoldOutlined
} from "@ant-design/icons";
import contentInfo from './ModalProfile';
import contentNotification from './ModalNotification';
import contentModule from './ModalModule';

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
                        <Popover placement="topRight" content={contentModule} trigger="hover">
                            <AppstoreAddOutlined />
                        </Popover>
                    </div>
                </div>
                <div className={`${styles.itemHeaderRight}`}>
                    <Popover placement="topRight" content={contentNotification} trigger="hover">
                        <Badge size="small"  count={5}>
                            <div className={styles.iconWrap}>
                                <MessageOutlined />
                            </div>
                        </Badge>
                    </Popover>
                </div>
                <div className={`${styles.itemHeaderRight}`}>
                    <Popover placement="topRight" content={contentInfo} trigger="hover">
                        <Avatar size={45} icon={<UserOutlined />} />
                    </Popover>
                </div>
            </div>
        </header>
    );
}

export default Header
