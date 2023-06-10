import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import styles from './styles.module.scss';
import './styles.scss';
import Information from "./Information";

function Profile () {
    return (
        <MainLayout>
            <div className={styles.profileWrap}>
                <Information />
            </div>
        </MainLayout>
    );
}

export default Profile
