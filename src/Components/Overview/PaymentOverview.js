import React from 'react'
import { BsFillFolderFill } from 'react-icons/bs';
import Card from '../GeneralUI/Card/Card'
import { Typography } from 'antd';
import styles from './PaymentOverview.module.scss'
const { Title, Paragraph } = Typography;
export default function PaymentOverview(props) {
    const { label, amount } = props.data;
    return (
        <Card className={`d-flex align-items-center ${styles['payment-overview']}`}>
            <div className={styles['payment-overview-icon-con']}>
                <BsFillFolderFill color='#02B8F2' size={24} />
            </div>
            <div>
                <Title level={2} className={`mb-0 ${styles['payment-overview-amount']}`}>
                    {new Intl.NumberFormat(navigator.language).format(amount)}
                </Title>
                <Paragraph className={`mb-0 ${styles['payment-overview-label']}`}>
                    {label}
                </Paragraph>
            </div>
        </Card>
    )
}
