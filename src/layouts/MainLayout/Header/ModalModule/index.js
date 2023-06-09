import React from 'react';
import styles from "./styles.module.scss";
import {Col, Row} from "antd";
import LogoFigma from "assets/images/Logo/Module/figma-1.svg";
import LogoGitLab from "assets/images/Logo/Module/gitlab.svg";
import LogoGitHub from "assets/images/Logo/Module/github.svg";
import LogoCodeigniter from "assets/images/Logo/Module/codeigniter.svg";

function ModalNotification () {
    return (
        <div className={styles.modalModuleWrap}>
            <div className={styles.mainModalModuleWrap}>
                <Row>
                    <Col className="gutter-row" span={6}>
                        <div className={styles.itemModule}>
                            <div className={styles.imgWrap}>
                                <img src={LogoFigma} alt=""/>
                            </div>
                            <span>Module 1</span>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className={styles.itemModule}>
                            <div className={styles.imgWrap}>
                                <img src={LogoGitLab} alt=""/>
                            </div>
                            <span>Module 1</span>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.itemModule}>
                            <div className={styles.imgWrap}>
                                <img src={LogoGitHub} alt=""/>
                            </div>
                            <span>Module 1</span>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className={styles.itemModule}>
                            <div className={styles.imgWrap}>
                                <img src={LogoCodeigniter} alt=""/>
                            </div>
                            <span>Module 1</span>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className={styles.itemModule}>
                            <div className={styles.imgWrap}>
                                <img src={LogoCodeigniter} alt=""/>
                            </div>
                            <span>Module 1</span>
                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    );
}

export default ModalNotification
