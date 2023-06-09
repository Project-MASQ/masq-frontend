import React from 'react';
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import {Button, Modal} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {handleDeleteEmploy} from "../../../state/modules/employ";

ModalDeleteEmploy.prototype = {
    isModalOpen: PropTypes.bool.isRequired,
    employ: PropTypes.object.isRequired,
    handleOk: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
}

ModalDeleteEmploy.defaultProps = {
    isModalOpen: false,
    employ: {}
}

function ModalDeleteEmploy (props) {
    /* State */
    const loadingBtnDeleteEmploy = useSelector(state => state.employ.loadingBtnDeleteEmploy);
    const dispatch = useDispatch();

    /* Handle */
    const handleCloseModal = () => {
        props.handleCancel();
    }

    const handleDestroyEmploy = () => {
        if (props.employ && props.employ._id) {
            dispatch(handleDeleteEmploy(props.employ._id))
        }
    }

    return (
        <Modal
            title={`Xóa nhân viên`}
            open={props.isModalOpen}
            onOk={props.handleOk}
            onCancel={() => handleCloseModal()}
            className={styles.modalDeleteWrap}
            footer={[
                <Button
                    className={styles.btnClose}
                    onClick={() => handleCloseModal()}
                    key="1">Đóng
                </Button>,
                <Button
                    className={styles.btnDelte}
                    loading={loadingBtnDeleteEmploy}
                    onClick={() => handleDestroyEmploy()}
                    key="2">Xóa
                </Button>,
            ]}
        >
            <p className={styles.text}>Dữ liệu đã xóa không thể phục hồi lại, bạn có chắc chắn muốn xóa nhân viên <b>{props.employ.name}</b> không?</p>
        </Modal>
    );
}

export default ModalDeleteEmploy
