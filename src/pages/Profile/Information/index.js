import React from 'react';
import styles from './styles.module.scss';
import './styles.scss';
import {Col, Row, Input, Button} from "antd";
// import {Button, Col, Input, Row} from "antd"
// import {useDispatch, useSelector} from "react-redux";
// import {WarningOutlined} from "@ant-design/icons";
// import {isValidEmail} from "../../../utils/helper";
// import {
//     handleSetDataUpdateInfo,
//     handleSetErrorInfo,
//     updateInfoUser
// } from "../../../state/modules/profile";
// import _ from "lodash";

function Information () {
    // const infoUser = useSelector(state => state.profile.infoUser);
    // const errorName = useSelector(state => state.profile.errorName);
    // const errorEmail = useSelector(state => state.profile.errorEmail);
    // const loadingBtnUpdateInfo = useSelector(state => state.profile.loadingBtnUpdateInfo);

    // const dispatch = useDispatch();

    // const handleChangeInput = (valueInput, type) => {
    //     let value = valueInput.target.value;
    //     let data = _.cloneDeep(infoUser);
    //     data[type] = value;
    //     dispatch(handleSetDataUpdateInfo(data));
    //     handleReloadErrorUpdateInfo();
    // }

    // const handleReloadErrorUpdateInfo = () => {
    //     dispatch(handleSetErrorInfo({
    //         name: '',
    //         email: '',
    //     }))
    // }

    // const validateFormUpdateInfo = () => {
    //     let error = false;
    //     let newErrorName = '';
    //     let newErrorEmail = '';
    //
    //     if (infoUser.email.length === 0) {
    //         newErrorEmail = 'Email không được để trống!';
    //         error = true;
    //     } else if (!isValidEmail(infoUser.email)) {
    //         newErrorEmail = 'Email không đúng định dạng!';
    //         error = true;
    //     } else {
    //         newErrorEmail = '';
    //     }
    //
    //     if (infoUser.email.length === 0) {
    //         newErrorName = 'Họ và tên không được để trống!';
    //         error = true;
    //     } else {
    //         newErrorName = '';
    //     }
    //
    //     dispatch(handleSetErrorInfo({
    //         name: newErrorName,
    //         email: newErrorEmail,
    //     }))
    //     return error;
    // }

    // const handleUpdateInfo = () => {
    //     if (!validateFormUpdateInfo()) {
    //         dispatch(updateInfoUser(infoUser._id, infoUser))
    //     }
    // }

    return (
        <div className={`${styles.informationWrap} pt-[30px] pl-[38px]`}>
            <div className={`mb-4`}>
                <div className={`font-medium text-base leading-4 uppercase`}>My account</div>
                <div className={`${styles.title} font-semibold uppercase`}>Edit profile</div>
                <hr className={`border-[#D2D6E5] mt-[18px]`}/>
            </div>
            <div className={``}>
                <Row className={`w-[592px]`}>
                    <Col className="gutter-row mb-[18px] pr-3" span={12}>
                        <label className={`block font-medium text-sm leading-5 text-[#000000] mb-1`}>
                            First Name
                        </label>
                        <Input
                            className={`w-full outline-none border border-solid border-cloudDark focus:border-cloudDark focus:shadow-none h-[44px]`}
                            placeholder="Lien"
                        />
                    </Col>
                    <Col className="gutter-row mb-[18px] pr-3" span={12}>
                        <label className={`block font-medium text-sm leading-5 text-[#000000] mb-1`}>
                            Last Name
                        </label>
                        <Input
                            className={`w-full outline-none border border-solid border-cloudDark focus:border-cloudDark focus:shadow-none h-[44px]`}
                            placeholder="To"
                        />
                    </Col>
                    <Col className="gutter-row mb-[18px] pr-3" span={12}>
                        <label className={`block font-medium text-sm leading-5 text-[#000000] mb-1`}>
                            Phone
                        </label>
                        <Input
                            className={`w-full outline-none border border-solid border-cloudDark focus:border-cloudDark focus:shadow-none h-[44px]`}
                            placeholder="(949) 912-34565"
                        />
                    </Col>
                </Row>
                <div className="gutter-row mb-[18px] pr-3">
                    <Button className={`mt-[13px] h-[44px] w-[284px] cursor-pointer uppercase text-white text-sm font-semibold leading-5 bg-mainDark border-mainDark hover:bg-mainDark focus:bg-mainDark hover:border-mainDark focus:border-mainDark hover:text-white focus:text-white`}>
                        Save changes
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Information
