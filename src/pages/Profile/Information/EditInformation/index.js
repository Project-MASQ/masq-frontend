import React from 'react';
import styles from "./styles.module.scss";
import {Button, Col, Input, Row} from "antd";

function EditInformation () {
    return(
        <div className={`${styles.informationWrap}`}>
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
    )
}

export default EditInformation;
