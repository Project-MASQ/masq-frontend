import React, {useState} from 'react';
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import {Button, Input, Modal} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {
    changePasswordEmploy,
    handleSetDataChangePasswordEmploy,
    handleSetErrorChangePasswordEmploy,
} from "../../../state/modules/employ";
import {WarningOutlined} from "@ant-design/icons";
import _ from "lodash";

ModalChangePasswordEmploy.prototype = {
    isModalOpen: PropTypes.bool.isRequired,
    employ: PropTypes.object.isRequired,
    handleOk: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
}

ModalChangePasswordEmploy.defaultProps = {
    isModalOpen: false,
    employ: {}
}

function ModalChangePasswordEmploy (props) {
    /* State */
    const [passwordVisible, setPasswordVisible] = useState(false);
    const loadingBtnChangePassword = useSelector(state => state.employ.loadingBtnChangePassword);
    const dataChangePassword = useSelector(state => state.employ.dataChangePassword);
    const errorChangePassword = useSelector(state => state.employ.errorChangePassword);
    const dispatch = useDispatch();

    /* Handle */
    const handleChangeInput = (valueInput, type) => {
        let value = valueInput.target.value;
        let data = _.cloneDeep(dataChangePassword);
        data[type] = value;
        dispatch(handleSetDataChangePasswordEmploy(data));
        dispatch(handleSetErrorChangePasswordEmploy({
            password: '',
            rePassword: ''
        }));
    }

    const handleCloseModal = () => {
        dispatch(handleSetDataChangePasswordEmploy({
            password: '',
            rePassword: ''
        }));
        dispatch(handleSetErrorChangePasswordEmploy({
            password: '',
            rePassword: ''
        }));
        props.handleCancel();
    }

    const validateFormChangePasswordEmploy = () => {
        let error = false;
        let dataError = _.cloneDeep(errorChangePassword);

        if (dataChangePassword.password.length === 0) {
            dataError.password = 'Mật khẩu mới không được để trống!';
            error = true;
        } else if (dataChangePassword.password.length < 6) {
            dataError.password = 'Mật khẩu mới phải có ít nhất 6 kí tự!';
            error = true;
        } else if (dataChangePassword.password !== dataChangePassword.rePassword) {
            dataError.password = 'Mật khẩu mới và nhập lại mật khẩu mới không trùng khớp!';
            error = true;
        } else {
            dataError.password = '';
        }

        if (dataChangePassword.rePassword.length === 0) {
            dataError.rePassword = 'Xác nhận lại mật khẩu không được để trống!';
            error = true;
        } else if (dataChangePassword.rePassword.length < 6) {
            dataError.rePassword = 'Xác nhận lại mật khẩu phải có ít nhất 6 kí tự!';
            error = true;
        } else if (dataChangePassword.password !== dataChangePassword.rePassword) {
            dataError.rePassword = 'Mật khẩu mới và Xác nhận lại mật khẩu mới không trùng khớp!';
            error = true;
        } else {
            dataError.rePassword = '';
        }

        dispatch(handleSetErrorChangePasswordEmploy(dataError));
        return error;
    }

    const handleSubmitFormChangePasswordEmploy = () => {
        if (!validateFormChangePasswordEmploy()) {
            if (props.employ && props.employ._id) {
                dispatch(changePasswordEmploy(props.employ._id, dataChangePassword));
            }
        }
    }

    return (
        <Modal
            title={`Đổi mật khẩu`}
            open={props.isModalOpen}
            onOk={props.handleOk}
            onCancel={() => handleCloseModal()}
            width={600}
            footer={[
                <Button
                    className={styles.btnClose}
                    onClick={() => handleCloseModal()}
                    key="1">Đóng
                </Button>,
                <Button
                    className={styles.btnSave}
                    loading={loadingBtnChangePassword}
                    onClick={() => handleSubmitFormChangePasswordEmploy()}
                    key="2">Lưu
                </Button>,
            ]}
            className={`${styles.modalChangePasswordWrap}`}
        >
            <div className={styles.formWrap}>
                <div className={styles.inputWrap}>
                    <div className={styles.labelWrap}>Mật khẩu<span className={styles.required}>*</span></div>
                    <Input.Password
                        value={dataChangePassword.password}
                        onChange={(e) => handleChangeInput(e, 'password')}
                        className={`style-input ${styles.input}`}
                        placeholder="Nhập mật khẩu"
                        visibilityToggle={{
                            visible: passwordVisible,
                            onVisibleChange: setPasswordVisible,
                        }}
                    />
                    {
                        errorChangePassword && errorChangePassword.password ?
                            <span className={styles.error}><WarningOutlined /> {errorChangePassword.password}</span> : ''
                    }
                </div>

                <div className={styles.inputWrap}>
                    <div className={styles.labelWrap}>Xác nhận lại mật khẩu<span className={styles.required}>*</span></div>
                    <Input.Password
                        value={dataChangePassword.rePassword}
                        onChange={(e) => handleChangeInput(e, 'rePassword')}
                        className={`style-input ${styles.input}`}
                        placeholder="Nhập lại mật khẩu"
                        visibilityToggle={{
                            visible: passwordVisible,
                            onVisibleChange: setPasswordVisible,
                        }}
                    />
                    {
                        errorChangePassword && errorChangePassword.rePassword ?
                            <span className={styles.error}><WarningOutlined /> {errorChangePassword.rePassword}</span> : ''
                    }
                </div>
            </div>
        </Modal>
    );
}

export default ModalChangePasswordEmploy
