import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import './styles.scss'
import {Button, Checkbox, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {handleLogin} from "../../../state/modules/auth";
import { isValidEmail} from "../../../utils/helper";
import { WarningOutlined, HeartOutlined } from "@ant-design/icons";
import Register from "../Register";
import thumbnailHeader from 'assets/images/Auth/imageAdmin.png';
import iconZent from 'assets/images/Logo/icon-zent.png';
import {removeItemLocalStorage, setItemLocalStorage} from "../../../utils/localStorage";

/* Data default */
Register.prototype = {
    activeSign: PropTypes.bool.isRequired,
    handleShowFormSignUp: PropTypes.func
}

Register.defaultProps = {
    activeSign: true
}

const Login = (props) => {
    /* State */
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const loadingBtnLogin = useSelector(state => state.auth.loadingBtnLogin);
    const [rememberStatus, setRememberStatus] = useState(false);
    const dispatch = useDispatch();

    /* Hook */
    useEffect(() => {
        let email = localStorage.getItem('email');
        let password = localStorage.getItem('password');
        if ((email && email.length > 0) && (password && password.length > 0)) {
            setEmail(email);
            setPassword(password);
            setRememberStatus(true);
        }
    }, []);

    /* Handle */
    // const handleShowFormRegister = () => {
    //     dispatch(setFlagStatusRegister(''));
    //     props.handleShowFormSignUp();
    // }

    const handleChangeInput = (valueInput, type) => {
        let value = valueInput.target.value;
        switch (type) {
            case 'email':
                setErrorEmail('');
                setEmail(value);
                break
            case 'password':
                setErrorPassword('');
                setPassword(value);
                break
            default:
                break
        }
    }

    const validateFormRegister = () => {
        let error = false;

        if (email.length === 0) {
            setErrorEmail('Email không được để trống!');
            error = true;
        } else if (!isValidEmail(email)) {
            setErrorEmail('Email không đúng định dạng!');
            error = true;
        } else {
            setErrorEmail('');
        }

        if (password.length === 0) {
            setErrorPassword('Số điện thoại không được để trống!');
            error = true;
        } else if (password.length < 6) {
            setErrorPassword('Nhập lại mật khẩu phải có ít nhất 6 kí tự!');
            error = true;
        } else {
            setErrorPassword('');
        }

        return error;
    }

    const handleLoginAccount = () => {
        if (!validateFormRegister()) {
            if (rememberStatus) {
                setItemLocalStorage('email', email);
                setItemLocalStorage('password', password);
            } else {
                removeItemLocalStorage('email');
                removeItemLocalStorage('password');
            }
            dispatch(handleLogin(email, password));
        }
    }

    const handleClickCheckBox = (e) => {
        setRememberStatus(e.target.checked);
    }

    return (
        <div className={`login-form ${styles.loginWrap} ${props.activeLogin ? styles.loginWrapActive : ''}`}>
            <div className={styles.headerWrap}>
                <div className={styles.descriptionWrap}>
                    <p className={styles.title}>Chào mừng trở lại!</p>
                    <p className={styles.content}>Đăng nhập</p>
                </div>
                <div className={styles.imgWrap}>
                    <img src={thumbnailHeader} alt={""}/>
                </div>
                <div className={styles.logoWrap}>
                    <img src={iconZent} alt={""}/>
                </div>
            </div>
            <div className={styles.mainWrap}>
                <div className={styles.inputWrap}>
                    <div className={`${styles.labelWrap}`}>Email</div>
                    <Input
                        className={styles.input}
                        value={email}
                        onChange={(e) => handleChangeInput(e, 'email')}
                        placeholder="Nhập email"
                    />
                    {
                        errorEmail ? <span className={styles.error}><WarningOutlined /> {errorEmail}</span> : ''
                    }
                </div>
                <div className={styles.inputWrap}>
                    <div className={styles.labelWrap}>Mật khẩu</div>
                    <Input.Password
                        value={password}
                        onChange={(e) => handleChangeInput(e, 'password')}
                        className={`style-input ${styles.input}`}
                        placeholder="Nhập mật khẩu"
                        visibilityToggle={{
                            visible: passwordVisible,
                            onVisibleChange: setPasswordVisible,
                        }}
                    />
                    {
                        errorPassword ?
                            <span className={styles.error}><WarningOutlined /> {errorPassword}</span> : ''
                    }
                </div>
                <div className={styles.toolbar}>
                    <Checkbox checked={rememberStatus} onClick={(e) => handleClickCheckBox(e)}>Ghi nhớ đăng nhập</Checkbox>
                    {/*<p className={styles.textForgotPassword}>Quên mật khẩu?</p>*/}
                </div>

                <div className={styles.buttonWrap}>
                    <Button loading={loadingBtnLogin} onClick={() => handleLoginAccount()} size={'large'}>Đăng nhập</Button>
                </div>
                {/*<p className={styles.textFooter}>Bạn chưa có tài khoản hãy <span onClick={() => handleShowFormRegister()} className={styles.textSignUp}>tạo tài khoản</span></p>*/}
                <div className={styles.tipWrap}>
                    <span>© 2023 ZentSoft. Được phát triển bởi</span>
                    <HeartOutlined className={styles.icon}/>
                    <span className={styles.name}>Zent</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
