import React from 'react'
import Header from '../../Components/GeneralUI/Header/Header'
import Overview from '../../Components/Overview/Overview';

const dummy_data = [
    { name: 'JAN', amount: 0 },
    { name: 'FEB', amount: 2 },
    { name: 'MAR', amount: 4 },
    { name: 'APR', amount: 6 },
    { name: 'MAY', amount: 2 },
    { name: 'JUN', amount: 1 },
    { name: 'JUL', amount: 0 },
    { name: 'AUG', amount: 0 },
    { name: 'SEP', amount: 10 },
    { name: 'OCT', amount: 0 },
    { name: 'NOV', amount: 0 },
    { name: 'DEC', amount: 10 },
];
const dummy_payment_overview = [
    {
        label: 'Auto Payments',
        amount: 625_250,
    },
    {
        label: 'Credit Card Payments',
        amount: 625_250,
    },
    {
        label: 'Home Loan Payments',
        amount: 625_250,
    },

]
const Dummy_pie_data = [
    { name: 'Credit', value: 400 },
    { name: 'Loans', value: 300 },
    { name: 'Revolving', value: 300 },
    { name: 'Auto', value: 200 },
];
const Dummy_Overview_table_data = [
    {
        name: 'Delta Skymiles',
        date: '28 Mar 2023',
        currency: 'Us dollars',
        amount: 490,
        status: 'Pending',
    },
    {
        name: 'Delta Skymiles',
        date: '28 Mar 2023',
        currency: 'Us dollars',
        amount: 490,
        status: 'Pending',
    },
    {
        name: 'Delta Skymiles',
        date: '28 Mar 2023',
        currency: 'Us dollars',
        amount: 490,
        status: 'Pending',
    },
    {
        name: 'Delta Skymiles',
        date: '28 Mar 2023',
        currency: 'Us dollars',
        amount: 490,
        status: 'Aprrove',
    },
    {
        name: 'Delta Skymiles',
        date: '28 Mar 2023',
        currency: 'Us dollars',
        amount: 490,
        status: 'Pending',
    },
    {
        name: 'Delta Skymiles',
        date: '28 Mar 2023',
        currency: 'Us dollars',
        amount: 490,
        status: 'Pending',
    },
    {
        name: 'Delta Skymiles',
        date: '28 Mar 2023',
        currency: 'Us dollars',
        amount: 490,
        status: 'Pending',
    },
]
export default function OverviewPage() {
    return (
        <div>
            <Header pageTitle='Your Overview' />
            <Overview overViewTableData={Dummy_Overview_table_data} overViewPieChartData={Dummy_pie_data} overViewChartData={dummy_data} paymentOverviewData={dummy_payment_overview} />
        </div>
    )
}
