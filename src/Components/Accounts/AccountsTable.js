import React, { useMemo } from 'react'
import { Avatar } from 'antd'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import styles from './AccountsTable.module.scss'
import BaseTable from '../GeneralUI/BaseTable/BaseTable';
export default function AccountsTable(props) {
    const accountsTableColumn = useMemo(() => {
        return [
            {
                title: 'ACCOUNT NAME',
                dataIndex: 'accountName',

                render(data) {
                    return (<div className='d-flex first align-items-center avatar-name-con tb-cell  '>
                        <Avatar size={30} />  {data}
                    </div>)
                }
            },
            {
                title: 'ID',
                dataIndex: 'id',
                render(data) {
                    return <div className='tb-cell '>{data}</div>
                }
            },
            {
                title: 'EMAIL ADDRESS',
                dataIndex: 'email',
                render(data) {
                    return <div className='tb-cell'>{data}</div>
                }
            },
            {
                title: 'TRANSACTIONS',
                dataIndex: 'transactions',
                render(data) {
                    return <div className='tb-cell'>{data}</div>
                }
            },
            {
                title: "EDIT",
                render() {
                    return <div className='tb-cell'>
                        <FaRegEdit cursor={'pointer'} size={20} />
                    </div>
                }
            },
            {
                title: "DELETE",
                render() {
                    return <div className='tb-cell last delete-con d-flex align-items-center justify-content-center '>
                        <RiDeleteBin5Line cursor={'pointer'} size={20} />
                    </div>
                }
            },
        ]
    }, [])
    return (
        <div className={styles['accounts-table']}>
            <BaseTable dataSource={props.data} columns={accountsTableColumn} pagination={{ pageSize: 10, showTotal: (total, range) => `Showing results ${range[1]} of ${total}`, }} />
        </div>
    )
}
