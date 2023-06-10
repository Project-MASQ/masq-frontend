import React from 'react';
import styles from "./styles.module.scss";
import {useDispatch} from "react-redux";
import {goToPage, ROUTE_PROFILE} from "../../../../state/modules/routing";

function ModalProfile () {
    const dispatch = useDispatch();
    return (
        <div className={styles.modalInfoWrap}>
            <div className={styles.mainModalInfoWrap}>
                <ul className={styles.menuInfoWrap}>
                    <li onClick={() => dispatch(goToPage(ROUTE_PROFILE))} className={styles.itemInfoWrap}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1c-3.375 0-5 2.106-5 3.333V11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.667C11 9.106 9.375 7 6 7Z" fill="#fff"/>
                        </svg>
                        <span className={styles.text}>My Account</span>
                    </li>
                    <li className={styles.itemInfoWrap}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#fff">
                                <path d="m11.872 5.718-3-2.625a.375.375 0 0 0-.622.282V5.25h-1.5a.75.75 0 0 0 0 1.5h1.5v1.875a.375.375 0 0 0 .622.282l3-2.625a.375.375 0 0 0 0-.564Z"/>
                                <path d="M2.56 1.5H6v.75a.75.75 0 0 0 1.5 0V.75A.75.75 0 0 0 6.75 0h-6a.285.285 0 0 0-.04.005C.684.007.66.011.632.015a.743.743 0 0 0-.17.042A.75.75 0 0 0 0 .75V7.5c0 .199.08.39.22.53l3.75 3.75a.75.75 0 0 0 1.28-.53V4.5a.75.75 0 0 0-.22-.53L2.56 1.5Z"/>
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path fill="#fff" d="M0 0h12v12H0z"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span className={styles.text}>Log out</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ModalProfile
