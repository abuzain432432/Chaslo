import { Table, Badge } from "antd";
import { useMemo } from "react";
import styles from './PaymentTable.module.scss'
import BaseTable from "../GeneralUI/BaseTable/BaseTable";
const PaymentTable = (props) => {
    const paymentTableColumn = useMemo(() => {
        return [
            {
                title: 'DATE',
                dataIndex: 'date',
                render: (data) => <div className="my-2 tb-cell first">{data}</div>
            },
            {
                title: 'STATUS',
                dataIndex: 'status',
                render: (data) => <div className="tb-cell"><span className="tage rounded-5 text-white px-3 d-flex justify-content-center align-items-center">{data}</span></div>
            },
            {
                title: 'ACCOUNT',
                dataIndex: 'accountOwner',
                render: (data) => <div className=" tb-cell">{data}</div>
            },
            {
                title: 'CHARGES',
                dataIndex: 'charges',
                render: (data) => <div className="tb-cell">{data}</div>

            },
            {
                title: 'INTEREST',
                dataIndex: 'interest',
                render: (data) => <div className="tb-cell">{data}</div>

            },
            {
                title: 'FEES',
                dataIndex: 'fees',
                render: (data) => <div className="tb-cell">{data}</div>

            },
            {
                title: 'TOTAL',
                dataIndex: 'total',
                render: (data) => <div className="tb-cell last">{data}</div>

            },
        ]
    }, [])
    return <div className={`${styles['payment-table']}`}>
        <BaseTable pagination={{ pageSize: 8, showTotal: (total, range) => `Showing results 0${range[1]} of ${total}`, }} columns={paymentTableColumn} dataSource={props.data} />

    </div>
}
export default PaymentTable;