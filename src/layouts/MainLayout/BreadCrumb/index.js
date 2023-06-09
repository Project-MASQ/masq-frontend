import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';
import { RightOutlined, HomeOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import {useDispatch} from "react-redux";
import {goToPage} from "../../../state/modules/routing";

BreadCrumb.prototype = {
    breadcrumb: PropTypes.array.isRequired,
}

BreadCrumb.defaultProps = {
    breadcrumb: []
}

function BreadCrumb (props) {
    const dispatch = useDispatch();

    const handleRenderItemBreadCrumb = (index, item) => {
        switch (index) {
            case 0:
                return(
                    <div className={styles.breadCrumbItem}>
                        <Tooltip placement="topLeft" title={'Trang chủ'}>
                            <HomeOutlined onClick={() => dispatch(goToPage(item.route))} className={styles.icon} />
                        </Tooltip>
                        <RightOutlined className={styles.iconBreadCrumb} />
                    </div>
                );
            case props.breadcrumb.length - 1:
                return(
                    <div className={styles.breadCrumbItem}>
                        <span className={`${styles.name} ${styles.nameActive}`}>{ item.name }</span>
                    </div>
                );
            default:
                return(
                    <div className={styles.breadCrumbItem}>
                        <span onClick={() => dispatch(goToPage(item.route))} className={`${styles.name}`}>{ item.name }</span>
                        <RightOutlined className={styles.iconBreadCrumb} />
                    </div>
                );
        }
    }

    return (
        <div className={styles.breadCrumbWrap}>
            {
                props.breadcrumb.map((item, index) => {
                    return(handleRenderItemBreadCrumb(index, item))
                })
            }
        </div>
    );
}

export default BreadCrumb
