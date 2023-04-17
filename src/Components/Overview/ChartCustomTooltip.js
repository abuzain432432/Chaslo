import React from 'react'
import styles from './ChartCustomTooltip.module.scss'
export default function OverViewChartCustomTooltip({ active, payload, label }) {

    if (active)
        return (
            <div className={styles['custom-tooltip']}>{payload[0].payload.amount}</div>
        )
}
