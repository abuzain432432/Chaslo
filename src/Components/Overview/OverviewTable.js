import React, { useMemo } from 'react'
import BaseTable from '../GeneralUI/BaseTable/BaseTable'
import Card from '../GeneralUI/Card/Card'
import styles from './OverviewTable.module.scss'
import { PAYMENTS_ROUTE_CONST } from '../../Constants/ROUTES_CONST'
import { Typography } from 'antd'

import { Link } from 'react-router-dom'
const { Title } = Typography;
export default function OverviewTable(props) {
    const overViewTableColumn = useMemo(() => [
        {
            dataIndex: 'name',
            render: (data) => <div className='tb-cell my-2 first'>{data}</div>
        },
        {
            dataIndex: 'date',
            render: (data) => <div className='tb-cell my-2'>{data}</div>

        },
        {
            dataIndex: 'currency',
            render: (data) => <div className='tb-cell my-2'>{data}</div>

        },
        {
            dataIndex: 'amount',
            render: (data) => <div className='tb-cell my-2'>{data}</div>

        },
        {
            dataIndex: 'status',
            render: (data) => <div className='tb-cell my-2 last d-flex justify-content-center align-items-center'><span className={`${data === "Pending" ? 'light' : 'dark'} rounded-5 text-white d-flex justify-content-center align-items-center px-3`}>{data}</span></div>

        }
    ], [])
    return (
        <Card className={`${styles['overview-table-con']} flex-grow-1`}>
            <div className='d-flex justify-content-between align-items-center'>
                <Title level={3}>Payment History</Title>
                <Link className={styles['view-all']} to={`/${PAYMENTS_ROUTE_CONST}`}>View All</Link>
            </div>
            <BaseTable pagination={false} columns={overViewTableColumn} dataSource={props.data} />
        </Card>
    )
}
