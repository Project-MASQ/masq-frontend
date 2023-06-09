import React from 'react';
import styles from "./styles.module.scss";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {handleLogout} from "../../../../state/modules/auth";
import {useDispatch, useSelector} from "react-redux";
import {goToPage, ROUTE_PROFILE} from "../../../../state/modules/routing";

function ModalProfile () {
    const infoUser = useSelector(state => state.profile.infoUser);
    const dispatch = useDispatch();
    return (
        <div className={styles.modalInfoWrap}>
            <div className={styles.headerModalInfoWrap}>
                <Avatar size={55} icon={<UserOutlined />} />
                <div className={styles.contentHeaderModalInfoWrap}>
                    <p className={styles.name}>{ infoUser && infoUser.name ? infoUser.name : 'Đang cập nhật' }</p>
                    <p className={styles.description}>{ infoUser && infoUser.email ? infoUser.email : 'Đang cập nhật' }</p>
                </div>
            </div>
            <div className={styles.mainModalInfoWrap}>
                <ul className={styles.menuInfoWrap}>
                    <li className={styles.itemInfoWrap}
                        onClick={() => dispatch(goToPage(ROUTE_PROFILE))}
                    >Thông tin cá nhân</li>
                    <li className={styles.itemInfoWrap}
                        onClick={() => dispatch(handleLogout())}
                    >Đăng xuất
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ModalProfile
