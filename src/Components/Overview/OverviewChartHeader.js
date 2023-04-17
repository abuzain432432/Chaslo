import React from 'react'
import { Typography, Select } from 'antd';
import styles from './OverveiwChartHeader.module.scss'
const { Title } = Typography;

export default function OverviewChartHeader() {
    return (
        <div className={`${styles['overview-chart-header']} justify-content-between d-flex align-items-end mb-4 `}>
            <Title className='mb-0 ms-3' level={2}>Monthly Payment Spend</Title>
            <div className='d-flex gap-4'>
                <Select placeholder='Monthly Spend'>
                    <Select.Option value='1'>
                        1
                    </Select.Option>
                </Select>
                <Select placeholder='Year'>
                    <Select.Option value='1'>
                        1
                    </Select.Option>
                </Select>
            </div>
        </div>
    )
}
