import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import './styles.scss'
import {Checkbox, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {handleLogin} from "../../../state/modules/auth";
import { isValidEmail} from "../../../utils/helper";
import Register from "../Register";
import logo from 'assets/images/Logo/logo.png';
import login from 'assets/images/Logo/login.png';
import show from 'assets/images/Icon/showPassword.svg';
import hide from 'assets/images/Icon/hidePassword.svg';
import {removeItemLocalStorage, setItemLocalStorage} from "../../../utils/localStorage";
import {ROUTE_AUTH, ROUTE_RESET_PASSWORD} from "../../../state/modules/routing";
import Link from 'redux-first-router-link';

/* Data default */
Register.prototype = {
    activeSign: PropTypes.bool.isRequired,
    handleShowFormSignUp: PropTypes.func
}

Register.defaultProps = {
    activeSign: true
}

const Login = () => {
    /* State */
    const currentRoute = useSelector(state => state.location.type);
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorNewPassword, setErrorNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const loadingBtnLogin = useSelector(state => state.auth.loadingBtnLogin);
    const [rememberStatus, setRememberStatus] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const dispatch = useDispatch();

    /* Hook */
    useEffect(() => {
        let email = localStorage.getItem('email');
        let password = localStorage.getItem('password');
        if ((email && email.length > 0) && (password && password.length > 0)) {
            setEmail(email);
            setPassword(password);
            // setRememberStatus(true);
        }
        if(handleCheckRoute(ROUTE_AUTH)){
            setIsLogin(true)
        }else if(handleCheckRoute(ROUTE_RESET_PASSWORD)){
            setIsLogin(false)
        }
    }, []);

    /* Handle */
    // const handleShowFormRegister = () => {
    //     dispatch(setFlagStatusRegister(''));
    //     props.handleShowFormSignUp();
    // }
    const handleCheckRoute = (routes) => {
        if (routes && routes.length > 0) {
            return routes.includes(currentRoute);
        }
    };

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
            case 'new_password':
                setErrorNewPassword('');
                setNewPassword(value);
                break
            case 'confirm_password':
                setErrorConfirmPassword('');
                setConfirmPassword(value);
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
            setErrorPassword('Mật khẩu không được để trống!');
            error = true;
        } else if (password.length < 6) {
            setErrorPassword('Mật khẩu mới phải có ít nhất 6 kí tự!');
            error = true;
        } else {
            setErrorPassword('');
        }

        return error;
    }

    const validateResetPassword = () => {
        let error = false;

        if (newPassword.length === 0) {
            setErrorNewPassword('Mật khẩu mới không được để trống!');
            error = true;
        } else if (newPassword.length < 6) {
            setErrorNewPassword('Nhập lại mật khẩu phải có ít nhất 6 kí tự!');
            error = true;
        } else {
            setErrorNewPassword('');
        }

        if (confirmPassword.length === 0) {
            setErrorConfirmPassword('Mật khẩu xác nhận không được để trống!');
            error = true;
        } else if (newPassword && confirmPassword !== newPassword) {
            setErrorConfirmPassword('Mật khẩu xác nhận không chính xác!');
            error = true;
        } else {
            setErrorConfirmPassword('');
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

    const handleResetPassword = () => {
        if (!validateResetPassword()) {
            console.log(1)
        }
    }

    const handleClickCheckBox = (e) => {
        setRememberStatus(e.target.checked);
    }

    const togglePassword = (type = '') => {
        switch (type){
            case 'new':
                setNewPasswordVisible(!newPasswordVisible)
                break;
            case 'confirm':
                setConfirmPasswordVisible(!confirmPasswordVisible)
                break;
            default:
                setPasswordVisible(!passwordVisible)
        }
    }

    return (
        <div className={`flex items-center w-[1024px]`}>
            <div className={`${styles.loginForm} shrink-0 basis-[550px] mr-[60px] ml-[50px]`}>
                <div className={`${styles.formWrapper}`}>
                    <div className={styles.formWrapper__logo}>
                        <img src={logo} alt="" className={'m-auto'}/>
                        <p className={`${styles.slogan} uppercase bg-mainColor text-white text-2xl leading-8 font-semibold w-max px-[16px] m-auto mt-[23px]`}>
                            fulfillment service
                        </p>
                    </div>
                    <p className={`uppercase mt-[37px] mb-[35px] font-medium text-center text-lg leading-6`}>
                        {isLogin ? 'Login' : 'Create new password'}
                    </p>
                    {
                        isLogin?
                            <div>
                                <div className={`inputWrapper`}>
                                    <label className={`font-medium text-sm leading-5`}>Email</label>
                                    <input type="text"
                                           className={`px-3 w-full outline-none border border-solid border-cloudDark focus:border-cloudDark mt-1 h-[44px]`}
                                           value={password}
                                           placeholder={"Enter Email.."}
                                           onChange={(e) => handleChangeInput(e, 'email')}/>
                                    {
                                        errorEmail ? <span className={styles.error}>{errorEmail}</span> : ''
                                    }
                                </div>
                                <div className={`inputWrapper mt-[30px]`}>
                                    <label className={`font-medium text-sm leading-5 block`}>Password</label>
                                    <div className={`relative`}>
                                        <input type={passwordVisible ? 'text' : 'password'}
                                               className={`pl-3 pr-10 w-full outline-none border border-solid border-cloudDark focus:border-cloudDark mt-1 h-[44px]`}
                                               value={password}
                                               placeholder={"******"}
                                               onChange={(e) => handleChangeInput(e, 'password')}/>
                                        <div className={`${styles.drop} absolute mr-2.5 bg-white right-0`} onClick={() => {togglePassword()}}>
                                            <img className={` w-6 h-6`} src={passwordVisible ? show : hide} alt=""/>
                                        </div>
                                    </div>
                                    {errorPassword ? <span className={styles.error}>{errorPassword}</span> : ''}
                                </div>
                                <div className={`inputWrapper my-2`}>
                                    <Checkbox className={` flex items-center`} checked={rememberStatus} onClick={(e) => handleClickCheckBox(e)}>
                                        <span className={`text-sm leading-5`}>Remember me</span>
                                    </Checkbox>
                                </div>
                                <div className={`inputWrapper`}>
                                    <Button loading={loadingBtnLogin}
                                            onClick={() => handleLoginAccount()}
                                            className={`mt-[22px] h-[44px] cursor-pointer w-full uppercase text-white text-sm font-semibold leading-5 bg-mainDark border-mainDark hover:bg-mainDark focus:bg-mainDark hover:border-mainDark focus:border-mainDark hover:text-white focus:text-white`}>
                                        Login
                                    </Button>
                                </div>
                                <Link to={{ type: ROUTE_RESET_PASSWORD }} target="_self">
                                    <div className={`reset underline-offset-4 underline cursor-pointer font-medium leading-5 text-center mt-[17px]`}>
                                        Reset password
                                    </div>
                                </Link>
                            </div>
                            :
                            <div>
                                <div className={`inputWrapper mt-[30px]`}>
                                    <label className={`font-medium text-sm leading-5 block`}>New password</label>
                                    <div className={`relative`}>
                                        <input type={newPasswordVisible ? 'text' : 'password'}
                                               className={`pl-3 pr-10 w-full outline-none border border-solid border-cloudDark focus:border-cloudDark mt-1 h-[44px]`}
                                               value={newPassword}
                                               placeholder={"******"}
                                               onChange={(e) => handleChangeInput(e, 'new_password')}/>
                                        <div className={`${styles.drop} absolute mr-2.5 bg-white right-0`} onClick={() => {togglePassword('new')}}>
                                            <img className={` w-6 h-6`} src={newPasswordVisible ? show : hide} alt=""/>
                                        </div>
                                    </div>
                                    {errorNewPassword ? <span className={styles.error}>{errorNewPassword}</span> : ''}
                                </div>
                                <div className={`inputWrapper mt-[30px]`}>
                                    <label className={`font-medium text-sm leading-5 block`}>Confirm password</label>
                                    <div className={`relative`}>
                                        <input type={confirmPasswordVisible ? 'text' : 'password'}
                                               className={`pl-3 pr-10 w-full outline-none border border-solid border-cloudDark focus:border-cloudDark mt-1 h-[44px]`}
                                               value={confirmPassword}
                                               placeholder={"******"}
                                               onChange={(e) => handleChangeInput(e, 'confirm_password')}/>
                                        <div className={`${styles.drop} absolute mr-2.5 bg-white right-0`} onClick={() => {togglePassword('confirm')}}>
                                            <img className={` w-6 h-6`} src={confirmPasswordVisible ? show : hide} alt=""/>
                                        </div>
                                    </div>
                                    {errorConfirmPassword ? <span className={styles.error}>{errorConfirmPassword}</span> : ''}
                                </div>
                                <div className={`inputWrapper`}>
                                    <Button loading={loadingBtnLogin}
                                            onClick={() => handleResetPassword()}
                                            className={`mt-[29px] h-[44px] cursor-pointer w-full uppercase text-white text-sm font-semibold leading-5 bg-mainDark border-mainDark hover:bg-mainDark focus:bg-mainDark hover:border-mainDark focus:border-mainDark hover:text-white focus:text-white`}>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                    }
                </div>
            </div>
            <div className={'logo-wrapper  shrink-0 basis-[730px]'}>
                <img src={login} alt=""/>
            </div>
        </div>
    );
}

export default Login;
