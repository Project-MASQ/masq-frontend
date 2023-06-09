import React, {useEffect, useState} from 'react';
import MainLayout from '../../layouts/MainLayout';
import {ROUTE_EMPLOY, ROUTE_HOME} from "../../state/modules/routing";
import {setBreadCrumb} from "../../state/modules/app";
import {useDispatch, useSelector} from "react-redux";
import {Table, Pagination, Switch, Button, Tooltip, Select} from "antd";
import { EditOutlined, DeleteOutlined, SyncOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import './styles.scss';
import Filter from "./Filter";
import ModalCreateOrUpdateEmploy from "./ModalCreateOrUpdateEmploy";
import ModalDeleteEmploy from "./ModalDeleteEmploy";
import ModalChangePasswordEmploy from "./ModalChangePassword";
import {
    getListEmploy, handleChangeStatusIsActive, handleSetDataCreateOrUpdateEmploy,
    handleSetDataFilterSearchEmploys, handleSetIsEditEmploy, handleSetVisibleModalChangePasswordEmploy,
    handleSetVisibleModalCreateOrUpdateEmploy,
    handleSetVisibleModalDeleteEmploy
} from "../../state/modules/employ";
import _ from "lodash";

function Employ () {
    /* State */
    const filter = useSelector(state => state.employ.filter);
    const visibleModalCreateOrUpdateEmploy = useSelector(state => state.employ.visibleModalCreateOrUpdateEmploy);
    const visibleModalDeleteEmploy = useSelector(state => state.employ.visibleModalDeleteEmploy);
    const visibleModalChangePasswordEmploy = useSelector(state => state.employ.visibleModalChangePasswordEmploy);
    const employs = useSelector(state => state.employ.employs);
    const paginationEmploy = useSelector(state => state.employ.paginationEmploy);
    const loadingGetListEmploy = useSelector(state => state.employ.loadingGetListEmploy);
    const [employ, setEmploy] = useState({});
    const dataCreateOrUpdate = useSelector(state => state.employ.dataCreateOrUpdate);
    const [selectLimit] = useState([
        {
            value: 10,
            label: 'Hiển thị 10'
        },
        {
            value: 20,
            label: 'Hiển thị 20'
        },
        {
            value: 50,
            label: 'Hiển thị 50'
        },
    ]);
    const [optionLimitSelect, setOptionLimitSelect] = useState(filter.limit);

    const dispatch = useDispatch();
    const columns = [
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.email - b.email,
            render: (name) => <div>
                <span className={styles.textBold}>{name}</span>
            </div>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (email) => <div>
                <span className={styles.textBold}>{email}</span>
            </div>,
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            render: (phone) => <div>
                { phone ? <span className={styles.textBold}> {phone}</span> : <span className={styles.textBold}>Đang cập nhật</span> }
            </div>,
        },
        {
            title: 'Trạng thái',
            key: 'is_active',
            dataIndex: 'is_active',
            align: 'center',
            render: (text, record) =>
            <div>
                <Switch
                    className={`btn-switch ${record.is_active ? styles.switchActive : styles.switchDeActive}`}
                    defaultChecked={record.is_active}
                    onChange={(checked) => handleOnChangeIsActive(checked, record)}
                />
            </div>,
        },
        {
            title: 'Hành động',
            key: 'action',
            width: '200px',
            render: (text, record) => <div className={styles.columnActionWrap}>
                <Tooltip placement="top" title={'Chỉnh sửa nhân viên'}>
                    <Button
                        onClick={() => handleOpenModalEditEmploy(record)}
                        className={`${styles.btn} ${styles.btnEdit}`}
                        type="primary"><EditOutlined />
                    </Button>
                </Tooltip>
                <Tooltip placement="top" title={'Thay đổi mật khẩu'}>
                    <Button
                        onClick={() => handleOpenModalChangePasswordEmploy(record)}
                        className={`${styles.btn} ${styles.btnChangePassword}`}
                        type="primary"><SyncOutlined />
                    </Button>
                </Tooltip>
                <Tooltip placement="top" title={'Xóa nhân viên'}>
                    <Button
                        onClick={() => handleOpenModalDeleteEmploy(record)}
                        className={`${styles.btn} ${styles.btnDelete}`}
                        type="primary"><DeleteOutlined />
                    </Button>
                </Tooltip>
            </div>
        },
    ];

    /* Hook */
    useEffect(() => {
        let dataBreadCrumb = [
            {
                route: ROUTE_HOME,
                name: 'Trang chủ'
            },
            {
                route: ROUTE_EMPLOY,
                name: 'Quản lý nhân viên'
            }
        ]
        dispatch(setBreadCrumb(dataBreadCrumb));
    }, []);

    /* Handle */
    const handleOnChangeTable = (pagination, filters, sorter) => {
        let dataFilter = _.cloneDeep(filter);
        dataFilter['column'] = sorter.order ? sorter.field : 'created_at';
        dataFilter['order'] = sorter.order && sorter.order === 'ascend' ?    1 : -1;
        dispatch(handleSetDataFilterSearchEmploys(dataFilter));
        dispatch(getListEmploy());
    }

    const handleChangeCurrentPageEmploy = (page) => {
        let dataFilter = _.cloneDeep(filter);
        dataFilter['page'] = page;
        dispatch(handleSetDataFilterSearchEmploys(dataFilter));
        dispatch(getListEmploy());
    }

    const HandleOpenModalCreateEmploy = () => {
        dispatch(handleSetIsEditEmploy(false));
        dispatch(handleSetVisibleModalCreateOrUpdateEmploy(true))
    }

    const handleOpenModalEditEmploy = (employ) => {
        setEmploy(employ);
        let data = _.cloneDeep(dataCreateOrUpdate);
        data['name'] = employ.name;
        data['email'] = employ.email;
        dispatch(handleSetDataCreateOrUpdateEmploy(data));
        dispatch(handleSetIsEditEmploy(true));
        dispatch(handleSetVisibleModalCreateOrUpdateEmploy(true))
    }

    const handleOpenModalDeleteEmploy = (employ) => {
        setEmploy(employ);
        dispatch(handleSetVisibleModalDeleteEmploy(true));
    }

    const handleOpenModalChangePasswordEmploy = (employ) => {
        setEmploy(employ);
        dispatch(handleSetVisibleModalChangePasswordEmploy(true));
    }

    const handleOnChangeIsActive = (checked, employ) => {
        dispatch(handleChangeStatusIsActive(employ._id, checked));
    }

    const handleChangeLimitRecordTable = (limit) => {
        setOptionLimitSelect(limit);
        let dataFilter = _.cloneDeep(filter);
        dataFilter['limit'] = limit;
        dispatch(handleSetDataFilterSearchEmploys(dataFilter));
        dispatch(getListEmploy());
    }

    return (
        <MainLayout>
            <div>
                <Filter
                    handleSetModalCreateOrUpdate={() => HandleOpenModalCreateEmploy()}
                />

                <div className={styles.tableWrap}>
                    <Table
                        className={`${styles.table } table-list-employ`}
                        columns={columns}
                        dataSource={employs}
                        pagination={false}
                        loading={loadingGetListEmploy}
                        onChange={handleOnChangeTable}
                    />
                    <div className={styles.paginationWrap}>
                        {/*<Popover content={content} trigger="click">*/}
                        {/*    <Button>Hiển thị 10</Button>*/}
                        {/*</Popover>*/}
                        <Select
                            style={{
                                width: 120,
                            }}
                            value={optionLimitSelect}
                            onChange={handleChangeLimitRecordTable}
                            options={selectLimit.map((option) => ({
                                label: option.label,
                                value: option.value,
                            }))}
                        />
                        <Pagination
                            showSizeChanger={false}
                            current={parseInt(paginationEmploy.currentPage)}
                            total={paginationEmploy.totalRecord}
                            pageSize={paginationEmploy.perPage}
                            onChange={handleChangeCurrentPageEmploy}
                        />
                    </div>
                </div>
            </div>

            <ModalCreateOrUpdateEmploy
                isModalOpen={visibleModalCreateOrUpdateEmploy}
                handleOk={() => dispatch(handleSetVisibleModalCreateOrUpdateEmploy(false))}
                handleCancel={() => dispatch(handleSetVisibleModalCreateOrUpdateEmploy(false))}
                employ={employ}
            />

            <ModalDeleteEmploy
                isModalOpen={visibleModalDeleteEmploy}
                handleOk={() => dispatch(handleSetVisibleModalDeleteEmploy(false))}
                handleCancel={() => dispatch(handleSetVisibleModalDeleteEmploy(false))}
                employ={employ}
            />

            <ModalChangePasswordEmploy
                isModalOpen={visibleModalChangePasswordEmploy}
                handleOk={() => dispatch(handleSetVisibleModalChangePasswordEmploy(false))}
                handleCancel={() => dispatch(handleSetVisibleModalChangePasswordEmploy(false))}
                employ={employ}
            />
        </MainLayout>
    );
}

export default Employ
