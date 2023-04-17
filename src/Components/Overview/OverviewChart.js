import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import Card from '../GeneralUI/Card/Card';
import styles from './OverChart.module.scss'
import OverviewChartHeader from './OverviewChartHeader';
import OverViewChartCustomTooltip from './ChartCustomTooltip';
export default function OverviewChart(props) {
    const { data } = props;
    return (
        <Card className={styles['overview-chart']}>
            <div className={styles['overview-chart-wrapper']}>
                <OverviewChartHeader />
                <LineChart width={1120} height={270} data={data}>
                    <defs>
                        <linearGradient id="myGradient" >
                            <stop offset="0%" stopColor="#0489B2" />
                            <stop offset="50%" stopColor="#0489B2" />
                            <stop offset="100%" stopColor="#0C4B6A" />
                            <stop offset="50%" stopColor="#0C4B6A" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis tickLine={false} axisLine={false} dataKey="name" />
                    <YAxis ticks={[0, 2, 4, 6, 8, 10, 12]} tickLine={false} unit={'k'} axisLine={false} />
                    <Tooltip wrapperStyle={{ border: 'none' }} labelStyle={{ display: 'none' }} contentStyle={{ border: 'none' }} content={<OverViewChartCustomTooltip />} />
                    <Line stroke="url(#myGradient)" dot={false} activeDot={{ stroke: 'white', strokeWidth: 2, r: 7 }} strokeWidth={5} type="monotone" dataKey="amount" />
                </LineChart>
            </div>
        </Card>
    )
}
