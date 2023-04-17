import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Card from '../GeneralUI/Card/Card';
import { Typography } from 'antd';
import styles from './OverViewPieChart.module.scss'
const { Title, Paragraph } = Typography;

const COLORS = ['#18132A', '#02B8F2', '#002E58', '#B9BEED'];

export default class OverviewPieChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    render() {
        return (
            <Card className={`${styles['pie-chart-con']} position-relative`}>
                <Title className={`${styles['pie-title']} text-center mb-0`} level={3}>Monthly Payment Spend</Title>
                <PieChart width={310} height={390}>
                    <Pie
                        data={this.props.data}
                        cx={150}
                        cy={200}
                        innerRadius={80}
                        outerRadius={150}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {this.props.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div className={`${styles['custom-legend-con']} d-flex justify-content-center gap-3`}>
                    <Paragraph className=' mb-0'><span className={`${styles['credit']}`} />Credit</Paragraph>
                    <Paragraph className='mb-0'><span className={`${styles['loans']} `} />Loans</Paragraph>
                    <Paragraph className='mb-0'><span className={`${styles['revolving']} `} />Revolving</Paragraph>
                    <Paragraph className=' mb-0'><span className={`${styles['auto']} `} />Auto</Paragraph>
                </div>
                <Paragraph className={`${styles['spend-amount']} position-absolute top-50 start-50 translate-middle fs-2 fw-bolder`}>$400</Paragraph>
            </Card>
        );
    }
}
