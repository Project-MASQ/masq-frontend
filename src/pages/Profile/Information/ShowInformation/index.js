import React from 'react';
import styles from "./styles.module.scss";
import {Col, Row} from "antd";
import PropTypes from 'prop-types';

ShowInformation.property = {
    handleShowEdit: PropTypes.func.isRequired
}

ShowInformation.defaultProps = {
    handleShowEdit: () => {
        alert('Function handleShowEdit does not exist !')
    }
}

function ShowInformation (props) {
    return(
        <div className={styles.informationWrap}>
            <Row>
                <Col className="gutter-row" xs={24} sm={24} md={24}>
                    <div className={styles.titleWrap}>
                        <p className={styles.text}>MY ACCOUNT</p>
                        <p className={styles.description}>My profile</p>
                        <hr className={styles.breakWrap}/>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} sm={24} md={24}>
                    <div className={styles.formUpdateWrap}>
                        <div className={styles.headerWrap}>
                            <div className={styles.infoWrap}>
                                <div className={styles.avatarWrap}>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.294 5.291A5.274 5.274 0 0 1 8 10.583a5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 8 0a5.273 5.273 0 0 1 5.294 5.291ZM8 20c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425C16 19.32 12.315 20 8 20Z" fill="#7E8CB2"/>
                                    </svg>
                                </div>
                                <div className={styles.info}>
                                    <p className={styles.name}>Lien To</p>
                                    <p className={styles.roll}>Owner</p>
                                </div>
                            </div>
                            <hr className={styles.breakWrap}/>
                            <div className={styles.personalInformationWrap}>
                                <div className={styles.headerWrap}>
                                    <span className={styles.text}>Personal Information</span>
                                    <div onClick={() => props.handleShowEdit()} className={styles.btnWrap}>
                                        Edit info
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g fill="#3D4667">
                                                <path d="M13.417 12.833H.583a.583.583 0 1 0 0 1.167h12.834a.583.583 0 1 0 0-1.167ZM1.75 11.667c.063 0 .125-.01.184-.03l3.5-1.167a.583.583 0 0 0 .234-.14l7-7a.582.582 0 0 0 0-.826L10.334.17a.583.583 0 0 0-.826 0l-7 7a.583.583 0 0 0-.14.234l-1.166 3.5a.583.583 0 0 0 .548.763Z"/>
                                            </g>
                                            <defs>
                                                <clipPath id="a">
                                                    <path fill="#fff" d="M0 0h14v14H0z"/>
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>
                                </div>
                                <div className={styles.mainWrap}>
                                    <Row>
                                        <Col className="gutter-row" xs={24} sm={24} md={8}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>FIRST NAME</label>
                                                <p className={styles.text}>Lien</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={16}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>LAST NAME</label>
                                                <p className={styles.text}>To</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={8}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>EMAIL</label>
                                                <p className={styles.text}>Lien.to@masqeyewear.com</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={16}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>PHONE</label>
                                                <p className={styles.text}>(949) 555-5555</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <hr className={styles.breakDashedWrap}/>
                            <div className={styles.officeInformationWrap}>
                                <div className={styles.headerWrap}>
                                    <span className={styles.text}>Office Information</span>
                                </div>
                                <div className={styles.mainWrap}>
                                    <Row>
                                        <Col className="gutter-row" xs={24} sm={24} md={8}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>OFFICE NAME</label>
                                                <p className={styles.text}>Good Optometry</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={16}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>ACCOUNT TIER</label>
                                                <p className={styles.text}>Silver</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={8}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>OFFICE PHONE</label>
                                                <p className={styles.text}>(949) 555-5555</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={16}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>LENS LAB</label>
                                                <p className={styles.text}>Encore Optics</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={8}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>ADDRESS 1</label>
                                                <p className={styles.text}>123 Irvine Blvd</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={16}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>ADDRESS 2</label>
                                                <p className={styles.text}>Suite 123</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={4}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>CITY</label>
                                                <p className={styles.text}>Irvine</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={4}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>STATE</label>
                                                <p className={styles.text}>CA</p>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" xs={24} sm={24} md={16}>
                                            <div className={styles.itemInfoWrap}>
                                                <label className={styles.label}>ZIP CODE</label>
                                                <p className={styles.text}>92602</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ShowInformation;
