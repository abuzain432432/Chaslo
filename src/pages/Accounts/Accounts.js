import React from 'react'
import Header from '../../Components/GeneralUI/Header/Header'
import Accounts from '../../Components/Accounts/Accounts'
const accounts_dummy_data = [
    {
        accountName: 'Ames Platinum',
        id: "#708578",
        email: 'abuzain432432@gmail.com',
        transactions: '$18897',
    },
    {
        accountName: 'Ames Platinum',
        id: "#708578",
        email: 'abuzain432432@gmail.com',
        transactions: '$18897',
    },
    {
        accountName: 'Ames Platinum',
        id: "#708578",
        email: 'abuzain432432@gmail.com',
        transactions: '$18897',
    },
    {
        accountName: 'Ames Platinum',
        id: "#708578",
        email: 'abuzain432432@gmail.com',
        transactions: '$18897',
    },
    {
        accountName: 'Ames Platinum',
        id: "#708578",
        email: 'abuzain432432@gmail.com',
        transactions: '$18897',
    },
    {
        accountName: 'Ames Platinum',
        id: "#708578",
        email: 'abuzain432432@gmail.com',
        transactions: '$18897',
    },
    {
        accountName: 'Ames Platinum',
        id: "#708578",
        email: 'abuzain432432@gmail.com',
        transactions: '$18897',
    },
    {
        accountName: 'Ames Platinum',
        id: "#708578",
        email: 'abuzain432432@gmail.com',
        transactions: '$18897',
    },
    {
        accountName: 'Ames Platinum',
        id: "#708578",
        email: 'abuzain432432@gmail.com',
        transactions: '$18897',
    },
    {
        accountName: 'Ames Platinum',
        id: "#708578",
        email: 'abuzain432432@gmail.com',
        transactions: '$18897',
    },
]
export default function AccountsPage() {
    return (
        <div>
            <Header pageTitle='Accounts' />
            <Accounts data={accounts_dummy_data} />
        </div>
    )
}
