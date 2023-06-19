import React from 'react'
import SettingsTab from './SettingTab';
import styles from './Settings.module.scss'
export default function Settings(props) {
    const { accountDetails } = props;

    return (
        <div className={styles['settings']}>
            <SettingsTab accountDetails={accountDetails} />
        </div>

    )
}
