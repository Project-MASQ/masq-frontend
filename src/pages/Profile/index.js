import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import styles from './styles.module.scss';
import './styles.scss';
import ChangePassword from "./ChangePassword";
import Information from "./Information";

function Profile () {
    return (
        <MainLayout>
            <div className={styles.profileWrap}>
                <Information />
                <ChangePassword />
            </div>
        </MainLayout>
    );
}

export default Profile
