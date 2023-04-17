import React from 'react'
import styles from './Accounts.module.scss'
import AccountsTable from './AccountsTable'
import { TbFileExport } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import { Button } from 'antd'
export default function Accounts(props) {
    return (
        <div className={`${styles['accounts']} ms-4 me-4 mt-3`}>
            <div className={`d-flex justify-content-end gap-4 mb-4`}>
                <Button size={'large'} className={`${styles['export-btn']} d-flex justify-content-center align-items-center gap-2`}>
                    <TbFileExport /> Export</Button>
                <Button size={'large'} className={`d-flex justify-content-center align-items-center gap-2 ${styles['add-account-btn']}`}><AiOutlinePlus></AiOutlinePlus>Add Account</Button>
            </div>
            <AccountsTable data={props.data} />
        </div>
    )
}
