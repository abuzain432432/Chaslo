import { Avatar } from "antd";
import React, { useMemo } from 'react'
import styles from './TransactionsTable.module.scss'
import BaseTable from "../GeneralUI/BaseTable/BaseTable";

export default function TransactionsTable(props) {
    const transactionsTableColumns = useMemo(() => {
        return [
            {
                title: 'NAME',
                dataIndex: 'name',
                render: (data) => <div className={'tb-cell first'}>
                    <Avatar size={26} />
                    {data}
                </div>

            },
            {
                title: 'DATA',
                dataIndex: 'date',
                render: (data) => <div className={'tb-cell '}>{data}</div>
            },
            {
                title: 'ID',
                dataIndex: 'id',
                render: (data) => <div className={'tb-cell'}>{data}</div>
            },
            {
                title: 'CURRENCY',
                dataIndex: 'currency',
                render: (data) => <div className={'tb-cell'}>{data}</div>
            },
            {
                title: 'AMOUNT',
                dataIndex: 'amount',
                render: (data) => <div className={'tb-cell'}>{data}</div>
            },
            {
                title: 'STATUS',
                dataIndex: 'status',
                render: (data) => <div className={`tb-cell last`}><span className={`${data === 'Pending' ? 'light' : 'dark'} rounded-5 text-white d-flex justify-content-center align-items-center px-3`}>{data}</span></div>
            },
        ]
    }, [])

    return (
        <div className={`${styles['transactions-table']} mt-2`}>
            <BaseTable pagination={{ pageSize: 12, showTotal: (total, range) => `Showing results ${range[1]} of ${total}`, }} columns={transactionsTableColumns} dataSource={props.data} />
        </div>
    )
}
