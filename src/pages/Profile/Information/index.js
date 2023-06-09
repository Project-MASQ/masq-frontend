import React from 'react';
import styles from './styles.module.scss';
import './styles.scss';
import {Button, Col, Input, Row} from "antd"
import {useDispatch, useSelector} from "react-redux";
import {WarningOutlined} from "@ant-design/icons";
import {isValidEmail} from "../../../utils/helper";
import {
    handleSetDataUpdateInfo,
    handleSetErrorInfo,
    updateInfoUser
} from "../../../state/modules/profile";
import _ from "lodash";

function Information () {
    const infoUser = useSelector(state => state.profile.infoUser);
    const errorName = useSelector(state => state.profile.errorName);
    const errorEmail = useSelector(state => state.profile.errorEmail);
    const loadingBtnUpdateInfo = useSelector(state => state.profile.loadingBtnUpdateInfo);

    const dispatch = useDispatch();

    const handleChangeInput = (valueInput, type) => {
        let value = valueInput.target.value;
        let data = _.cloneDeep(infoUser);
        data[type] = value;
        dispatch(handleSetDataUpdateInfo(data));
        handleReloadErrorUpdateInfo();
    }

    const handleReloadErrorUpdateInfo = () => {
        dispatch(handleSetErrorInfo({
            name: '',
            email: '',
        }))
    }

    const validateFormUpdateInfo = () => {
        let error = false;
        let newErrorName = '';
        let newErrorEmail = '';

        if (infoUser.email.length === 0) {
            newErrorEmail = 'Email không được để trống!';
            error = true;
        } else if (!isValidEmail(infoUser.email)) {
            newErrorEmail = 'Email không đúng định dạng!';
            error = true;
        } else {
            newErrorEmail = '';
        }

        if (infoUser.email.length === 0) {
            newErrorName = 'Họ và tên không được để trống!';
            error = true;
        } else {
            newErrorName = '';
        }

        dispatch(handleSetErrorInfo({
            name: newErrorName,
            email: newErrorEmail,
        }))
        return error;
    }

    const handleUpdateInfo = () => {
        if (!validateFormUpdateInfo()) {
            dispatch(updateInfoUser(infoUser._id, infoUser))
        }
    }

    return (
        <div className={styles.informationWrap}>
            <Row>
                <Col className="gutter-row" xs={24} sm={24} md={12}>
                    <div className={styles.titleWrap}>
                        <p className={styles.text}>Thông tin cá nhân</p>
                        <p className={styles.description}>Cập nhật thông tin cá nhân</p>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={12}>
                    <div className={styles.formUpdateWrap}>
                        <div className={styles.inputWrap}>
                            <div className={styles.labelWrap}>Họ và tên<span className={styles.required}>*</span></div>
                            <Input
                                className={styles.input}
                                value={infoUser.name}
                                onChange={(e) => handleChangeInput(e, 'name')}
                                placeholder="Nhập họ và tên"
                            />
                            {
                                errorName ? <span className={styles.error}><WarningOutlined /> {errorName}</span> : ''
                            }
                        </div>
                        <div className={styles.inputWrap}>
                            <div className={styles.labelWrap}>Email<span className={styles.required}>*</span></div>
                            <Input
                                className={styles.input}
                                value={infoUser.email}
                                onChange={(e) => handleChangeInput(e, 'email')}
                                placeholder="Nhập email"
                                disabled={true}
                            />
                            {
                                errorEmail ? <span className={styles.error}><WarningOutlined /> {errorEmail}</span> : ''
                            }
                        </div>
                        <div className={styles.btnWrap}>
                            <Button
                                className={styles.btnSave}
                                type="primary"
                                onClick={() => handleUpdateInfo()}
                                size={'large'}
                                loading={loadingBtnUpdateInfo}
                            >Lưu
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Information
