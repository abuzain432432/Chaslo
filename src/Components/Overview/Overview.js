import React from 'react'
import OverviewChart from './OverviewChart'
import PaymentOverview from './PaymentOverview'
import OverviewPieChart from './OverviewPieChart'
import styles from './Overview.module.scss'
import OverviewTable from './OverviewTable'
export default function Overview(props) {
    return (
        <div className={`px-5 py-4 ${styles['overview']}`}>
            <div className='d-flex justify-content-between gap-4'>
                <div className='d-flex flex-column gap-4'>
                    {props.paymentOverviewData.map(data => <PaymentOverview data={data} />)}
                </div>
                <OverviewChart data={props.overViewChartData} />
            </div>
            <div className={`${styles['pie-chart-con']} d-flex gap-5`}>
                < OverviewPieChart data={props.overViewPieChartData} />
                <OverviewTable data={props.overViewTableData} />
            </div>
        </div>
    )
}
