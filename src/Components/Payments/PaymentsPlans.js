import React from 'react';
import styles from './PaymentsPlans.module.scss';
import { Typography, List } from 'antd';
import { BsCheckCircle } from 'react-icons/bs'
import { BsFillCheckCircleFill } from 'react-icons/bs'
const { Title, Paragraph } = Typography;
export default function PaymentsPlans(props) {
    const recomended = props.data.recomended;
    return (
        <div className={`${styles['payment-plans']} p-4 ${recomended && styles['recomended']}`}>
            <div className='d-flex justify-content-between gap-5'>
                <div>
                    <Title level={4} className='mb-0'>{props.data.title}</Title>
                    <Paragraph>{props.data.des}</Paragraph>
                </div>
                <div className={`${styles['icon-con']} d-flex justify-content-center align-items-center`}>
                    <BsFillCheckCircleFill size={24} className={styles['icon']} />
                </div>
            </div>

            <List>
                {props.data.features.map(feature => <List.Item className='justify-content-start align-items-center gap-2 border-0 py-2'><BsCheckCircle size={20} className={`${styles['list-icon']} `} /><p className={`m-0`}>{feature}</p></List.Item>)}
            </List>
        </div>
    )
}
