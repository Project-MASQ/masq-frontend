import React from 'react';
import styles from './styles.module.scss';
import './styles.scss';

const LoginLayout = (props) => {

    return (
        <div className={styles.LoginLayoutWrap}>
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default LoginLayout;
