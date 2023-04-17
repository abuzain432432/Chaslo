import React from 'react'
import Header from '../../Components/GeneralUI/Header/Header'
import TransactionsTab from '../../Components/Trnasactions/TransactionsTab'

const dummy_data_All_Transaction = [
    {
        name: 'Diane B. Carey',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'Diane B. Carey',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Approve',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Approve',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Approve',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Approve',
    },
]
const dummy_data_Upcommings = [
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Approve',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Approve',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Approve',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Pending',
    },
    {
        name: 'jonas',
        date: '29 march 2023',
        id: '#732134',
        currency: 'Us Dollars',
        amount: '2384',
        status: 'Approve',
    },
]

export default function TransactionsPage() {
    return (
        <div>
            <Header pageTitle='Payment History' />
            <div className='ps-5 pt-3 pe-5 pb-3'>
                <TransactionsTab allTransactions={dummy_data_All_Transaction} upcomming={dummy_data_Upcommings} />
            </div>
        </div>
    )
}
