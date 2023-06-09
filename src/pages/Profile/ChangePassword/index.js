import React, {useState} from 'react';
import styles from './styles.module.scss';
import './styles.scss';
import {Button, Col, Input, Row} from "antd"
import {useDispatch, useSelector} from "react-redux";
import {WarningOutlined} from "@ant-design/icons";
import {
    changePassword,
    handleSetDataChangePassword,
    handleSetErrorChangePassword,
} from "../../../state/modules/profile";
import _ from "lodash";

function ChangePassword () {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const infoUser = useSelector(state => state.profile.infoUser);
    const errorOldPassword = useSelector(state => state.profile.errorOldPassword);
    const errorNewPassword = useSelector(state => state.profile.errorNewPassword);
    const errorNewRePassword = useSelector(state => state.profile.errorNewRePassword);
    const dataChangePassword = useSelector(state => state.profile.dataChangePassword);

    const dispatch = useDispatch();

    const handleChangeInput = (valueInput, type) => {
        let value = valueInput.target.value;
        let data = _.cloneDeep(dataChangePassword);
        data[type] = value;
        dispatch(handleSetDataChangePassword(data));
        handleReloadErrorChangePassword();
    }

    const handleReloadErrorChangePassword = () => {
        dispatch(handleSetErrorChangePassword({
            oldPassword: '',
            newPassword: '',
            newRePassword: '',
        }))
    }

    const validateFormChangePassword = () => {
        let error = false;
        let newErrorOldPassword = '';
        let newErrorNewPassword = '';
        let newErrorNewRePassword = '';

        if (dataChangePassword['oldPassword'].length === 0) {
            newErrorOldPassword = 'Mật khẩu không được để trống!';
            error = true;
        } else if (dataChangePassword['oldPassword'].length < 6) {
            newErrorOldPassword = 'Nhập lại mật khẩu phải có ít nhất 6 kí tự!';
            error = true;
        } else {
            newErrorOldPassword = '';
        }

        if (dataChangePassword['newPassword'].length === 0) {
            newErrorNewPassword = 'Số điện thoại không được để trống!';
            error = true;
        } else if (dataChangePassword['newPassword'].length < 6) {
            newErrorNewPassword = 'Nhập lại mật khẩu phải có ít nhất 6 kí tự!';
            error = true;
        } else if (dataChangePassword['newPassword'] !== dataChangePassword['newRePassword']) {
            newErrorNewPassword = 'Mật khẩu mới và nhập lại mật khẩu mới không trùng khớp!';
            error = true;
        } else {
            newErrorNewPassword = '';
        }

        if (dataChangePassword['newRePassword'].length === 0) {
            newErrorNewRePassword = 'Số điện thoại không được để trống!';
            error = true;
        } else if (dataChangePassword['newRePassword'].length < 6) {
            newErrorNewRePassword = 'Nhập lại mật khẩu phải có ít nhất 6 kí tự!';
            error = true;
        } else if (dataChangePassword['newPassword'] !== dataChangePassword['newRePassword']) {
            newErrorNewRePassword = 'Mật khẩu mới và nhập lại mật khẩu mới không trùng khớp!';
            error = true;
        } else {
            newErrorNewRePassword = '';
        }

        dispatch(handleSetErrorChangePassword({
            oldPassword: newErrorOldPassword,
            newPassword: newErrorNewPassword,
            newRePassword: newErrorNewRePassword,
        }))
        return error;
    }

    const handleChangePassword = () => {
        if (!validateFormChangePassword()) {
            dispatch(changePassword(infoUser._id, dataChangePassword));
        }
    }

    return (
        <div className={styles.changePasswordWrap}>
            <Row>
                <Col className="gutter-row" xs={24} sm={24} md={12}>
                    <div className={styles.titleWrap}>
                        <p className={styles.text}>Thay đổi mật khẩu</p>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12}>
                    <div className={styles.formUpdateWrap}>
                        <div className={styles.inputWrap}>
                            <div className={styles.labelWrap}>Mật khẩu cũ<span className={styles.required}>*</span></div>
                            <Input.Password
                                className={`style-input ${styles.input}`}
                                value={dataChangePassword.oldPassword}
                                onChange={(e) => handleChangeInput(e, 'oldPassword')}
                                placeholder="Nhập mật khẩu"
                                visibilityToggle={{
                                    visible: passwordVisible,
                                    onVisibleChange: setPasswordVisible,
                                }}
                            />
                            {
                                errorOldPassword ? <span className={styles.error}><WarningOutlined /> {errorOldPassword}</span> : ''
                            }
                        </div>
                        <div className={styles.inputWrap}>
                            <div className={styles.labelWrap}>Mật khẩu mới<span className={styles.required}>*</span></div>
                            <Input.Password
                                className={`style-input ${styles.input}`}
                                placeholder="Nhập mật khẩu"
                                value={dataChangePassword.newPassword}
                                onChange={(e) => handleChangeInput(e, 'newPassword')}
                                visibilityToggle={{
                                    visible: passwordVisible,
                                    onVisibleChange: setPasswordVisible,
                                }}
                            />
                            {
                                errorNewPassword ? <span className={styles.error}><WarningOutlined /> {errorNewPassword}</span> : ''
                            }
                        </div>
                        <div className={styles.inputWrap}>
                            <div className={styles.labelWrap}>Nhập lại mật khẩu mới<span className={styles.required}>*</span></div>
                            <Input.Password
                                className={`style-input ${styles.input}`}
                                placeholder="Nhập mật khẩu"
                                value={dataChangePassword.newRePassword}
                                onChange={(e) => handleChangeInput(e, 'newRePassword')}
                                visibilityToggle={{
                                    visible: passwordVisible,
                                    onVisibleChange: setPasswordVisible,
                                }}
                            />
                            {
                                errorNewRePassword ? <span className={styles.error}><WarningOutlined /> {errorNewRePassword}</span> : ''
                            }
                        </div>
                        <div className={styles.btnWrap}>
                            <Button
                                className={styles.btnSave}
                                type="primary"
                                size={'large'}
                                onClick={() => handleChangePassword()}
                            >Lưu
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ChangePassword
