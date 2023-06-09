import React from 'react';
import styles from "./styles.module.scss";
import {Button, Col, Input, Row} from "antd";
import IconSearch from "../../../assets/images/Icon/icon-search.png";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {
    getListEmploy,
    handleSetDataFilterSearchEmploys
} from "../../../state/modules/employ";

Filter.prototype = {
    handleSetModalCreateOrUpdate: PropTypes.func.isRequired
}

function Filter (props) {
    /* State */
    const filter = useSelector(state => state.employ.filter);
    const dispatch = useDispatch();

    /* Handle */
    const handleChangeInput = (valueInput, type) => {
        let value = valueInput.target.value;
        let dataFilter = _.cloneDeep(filter);
        dataFilter[type] = value;
        dataFilter['page'] = 1;
        dispatch(handleSetDataFilterSearchEmploys(dataFilter));
        if (value.length === 0) {
            dispatch(getListEmploy());
        }
    }
    const handleOnEnterInput = (event) => {
        if (event.key === 'Enter') {
            dispatch(getListEmploy());
        }
    }

    return (
        <div className={styles.filterWrap}>
            <div className={styles.filterSearchWrap}>
                <Row>
                    <Col span={12}>
                        <div className={styles.searchWrap}>
                            <div className={styles.inputWrap}>
                                <Input
                                    className={styles.inputSearch}
                                    value={filter.q}
                                    onChange={(e) => handleChangeInput(e, 'q')}
                                    onKeyDown={handleOnEnterInput}
                                    placeholder="Nhập tên nhân viên" />
                                <div className={styles.iconWrap}>
                                    <img src={IconSearch} alt=""/>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className={styles.btnWrap}>
                            <Button
                                onClick={() => props.handleSetModalCreateOrUpdate()}
                                className={styles.btn}
                                type="primary">Thêm nhân viên
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Filter
