import React from 'react'
import Header from '../../Components/GeneralUI/Header/Header';
import { Typography } from 'antd';
import PaymentsPlans from '../../Components/Payments/PaymentsPlans';
import PaymentTable from '../../Components/Payments/PaymentTable';
const { Title } = Typography;
const dummay_data = [
    {
        title: 'Minimum Payments',
        recomended: true,
        des: 'Lorem ipsum dolor sit amet is',
        features:
            ['Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet'
            ]

    },
    {
        title: 'No Interest',
        des: 'Lorem ipsum dolor sit amet is',
        features:
            ['Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet'
            ]

    },
    {
        title: 'Offensive',
        des: 'Lorem ipsum dolor sit amet is',
        features:
            ['Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet'
            ]

    },
    {
        title: 'Defensive',
        des: 'Lorem ipsum dolor sit amet is',
        features:
            ['Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet'
            ]

    },
]
const payment_table_dummy_data = [
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
    {
        date: '28 Mar 2023',
        status: 'Completed',
        accountOwner: 'Amex Platinum',
        charges: '490',
        interest: '900',
        fees: '900',
        total: '900'

    },
]
export default function PaymentPage() {
    return (
        <>
            <Header pageTitle='Payments' />
            <div className={` p-4 `}>
                <Title level={3} className='mb-4'>Customize Plan</Title>
                <div className='d-flex justify-content-between gap-3'>
                    {dummay_data.map(plans => <PaymentsPlans data={plans} />)}
                </div>
                <div className='mt-4 mb-1'>
                    <Title level={3} >Payment History</Title>
                    <PaymentTable data={payment_table_dummy_data} />
                </div>
            </div>
        </>
    )
}
