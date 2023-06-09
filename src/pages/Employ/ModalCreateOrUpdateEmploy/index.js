import React, {useState} from 'react';
import styles from "./styles.module.scss";
import {Button, Input, Modal} from "antd";
import {WarningOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {
    handleCreateEmploy,
    handleSetDataCreateOrUpdateEmploy,
    handleSetErrorCreateOrUpdateEmploy, handleUpdateEmploy
} from "../../../state/modules/employ";
import {isValidEmail} from "../../../utils/helper";

ModalCreateOrUpdateEmploy.prototype = {
    isModalOpen: PropTypes.bool.isRequired,
    handleOk: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    employ: PropTypes.shape({
        _id: PropTypes.string.isRequired
    }).isRequired,
}

ModalCreateOrUpdateEmploy.defaultProps = {
    isModalOpen: false,
    employ: {}
}

function ModalCreateOrUpdateEmploy (props) {
    /* State */
    const [passwordVisible, setPasswordVisible] = useState(false);
    const dataCreateOrUpdate = useSelector(state => state.employ.dataCreateOrUpdate);
    const errorCreateOrUpdate = useSelector(state => state.employ.errorCreateOrUpdate);
    const loadingBtnCreateOrUpdate = useSelector(state => state.employ.loadingBtnCreateOrUpdate);
    const isEdit = useSelector(state => state.employ.isEdit);
    const dispatch = useDispatch();

    /* Handle */
    const handleChangeInput = (valueInput, type) => {
        let value = valueInput.target.value;
        let data = _.cloneDeep(dataCreateOrUpdate);
        data[type] = value;
        dispatch(handleSetDataCreateOrUpdateEmploy(data));
        dispatch(handleSetErrorCreateOrUpdateEmploy({
            name: '',
            email: '',
            password: ''
        }));
    }

    const validateFormCreateOrUpdateEmploy = () => {
        let error = false;
        let dataError = _.cloneDeep(errorCreateOrUpdate);

        if (dataCreateOrUpdate.name.length === 0) {
            dataError.name = 'Họ và tên không được để trống!';
            error = true;
        } else {
            dataError.name = '';
        }

        if (dataCreateOrUpdate.email.length === 0) {
            dataError.email = 'Email không được để trống!';
            error = true;
        } else if (!isValidEmail(dataCreateOrUpdate.email)) {
            dataError.email = 'Email không đúng định dạng!';
            error = true;
        } else {
            dataError.email = '';
        }

        if (!isEdit) {
            if (dataCreateOrUpdate.password.length === 0) {
                dataError.password = 'Mật khẩu không được để trống!';
                error = true;
            } else if (dataCreateOrUpdate.password.length < 6) {
                dataError.password = 'Nhập lại mật khẩu phải có ít nhất 6 kí tự!';
                error = true;
            } else {
                dataError.password = '';
            }
        }

        dispatch(handleSetErrorCreateOrUpdateEmploy(dataError));
        return error;
    }

    const handleSubmitFormCreateOnUpdateEmploy = () => {
        if (!validateFormCreateOrUpdateEmploy()) {
            if (!isEdit) {
                dispatch(handleCreateEmploy(dataCreateOrUpdate));
            } else {
                if (props.employ && props.employ._id) {
                    dispatch(handleUpdateEmploy(props.employ._id, dataCreateOrUpdate))
                }
            }
        }
    }

    const handleCloseModal = () => {
        dispatch(handleSetDataCreateOrUpdateEmploy({
            name: '',
            email: '',
            password: ''
        }));
        dispatch(handleSetErrorCreateOrUpdateEmploy({
            name: '',
            email: '',
            password: ''
        }));
        props.handleCancel();
    }

    return (
        <Modal
            title={`${isEdit ? 'Cập nhật tài khoản nhân viên' : 'Tạo tài khoản nhân viên'}`}
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
                    loading={loadingBtnCreateOrUpdate}
                    onClick={() => handleSubmitFormCreateOnUpdateEmploy()}
                    key="2">{ !isEdit ? 'Tạo mới' : 'Cập nhật' }
                </Button>,
            ]}
            className={`${styles.modalCreateOrUpdateUser}`}
        >
            <div className={styles.formWrap}>
                <div className={styles.inputWrap}>
                    <div className={styles.labelWrap}>Họ và tên<span className={styles.required}>*</span></div>
                    <Input
                        className={styles.input}
                        value={dataCreateOrUpdate.name}
                        onChange={(e) => handleChangeInput(e, 'name')}
                        placeholder="Nhập họ và tên"
                    />
                    {
                        errorCreateOrUpdate && errorCreateOrUpdate.name ?
                            <span className={styles.error}><WarningOutlined /> {errorCreateOrUpdate.name}</span> : ''
                    }
                </div>
                <div className={styles.inputWrap}>
                    <div className={styles.labelWrap}>Email<span className={styles.required}>*</span></div>
                    <Input
                        className={styles.input}
                        onChange={(e) => handleChangeInput(e, 'email')}
                        value={dataCreateOrUpdate.email}
                        placeholder="Nhập email"
                    />
                    {
                        errorCreateOrUpdate && errorCreateOrUpdate.email ?
                            <span className={styles.error}><WarningOutlined /> {errorCreateOrUpdate.email}</span> : ''
                    }
                </div>
                {
                    !isEdit ?
                    <div className={styles.inputWrap}>
                        <div className={styles.labelWrap}>Mật khẩu<span className={styles.required}>*</span></div>
                        <Input.Password
                            value={dataCreateOrUpdate.password}
                            onChange={(e) => handleChangeInput(e, 'password')}
                            className={`style-input ${styles.input}`}
                            placeholder="Nhập mật khẩu"
                            visibilityToggle={{
                                visible: passwordVisible,
                                onVisibleChange: setPasswordVisible,
                            }}
                        />
                        {
                            errorCreateOrUpdate && errorCreateOrUpdate.password ?
                                <span className={styles.error}><WarningOutlined /> {errorCreateOrUpdate.password}</span> : ''
                        }
                    </div> : ''
                }
            </div>
        </Modal>
    );
}

export default ModalCreateOrUpdateEmploy
