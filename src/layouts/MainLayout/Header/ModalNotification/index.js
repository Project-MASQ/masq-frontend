import React from 'react';
import styles from "./styles.module.scss";
import {Tabs} from "antd";

function ModalNotification () {
    const { TabPane } = Tabs;

    return (
        <div className={styles.modalNotificationWrap}>
            <div className={styles.mainModalNotificationWrap}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Alert" key="1">
                        <ul className={styles.listNotificationWrap}>
                            <li className={styles.itemNotificationWrap}>Alert 1</li>
                        </ul>
                    </TabPane>
                    <TabPane tab="Update" key="2">
                        <ul className={styles.listNotificationWrap}>
                            <li className={styles.itemNotificationWrap}>Update 1</li>
                        </ul>
                    </TabPane>
                    <TabPane tab="Log" key="3">
                        <ul className={styles.listNotificationWrap}>
                            <li className={styles.itemNotificationWrap}>Log 1</li>
                            <li className={styles.itemNotificationWrap}>Log 2</li>
                            <li className={styles.itemNotificationWrap}>Log 3</li>
                        </ul>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default ModalNotification
