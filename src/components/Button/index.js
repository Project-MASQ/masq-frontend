import React from 'react';
import styles from './styles.module.scss'
import {Button} from "antd";
import PropTypes from "prop-types";

ButtonCustom.prototype = {
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

ButtonCustom.defaultProps = {
    type: 'default',
    content: 'Thêm mới',
    icon: ''
}

function ButtonCustom (props) {
    const handleGetTypeButton = (type) => {
        switch (type) {
            case 'edit':
                return styles.btnEdit
            case 'delete':
                return styles.btnDelete
            default:
                break;
        }
    }

    return (
        <Button
            onClick={() => props.onClick()}
            className={`${styles.btn} ${handleGetTypeButton(props.type)}`}
            type="primary">{props.content}
        </Button>
    );
}

export default ButtonCustom
