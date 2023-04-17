import React from 'react'
import TransactionsTable from './TransactionsTable';
import Tab from '../GeneralUI/Tab/Tab'

export default function TransactionsTab(props) {
    const { allTransactions, upcomming } = props;
    const tabs = [{
        tabTitle: 'All Transactions',
        tabKey: '1',
        tabContent: <TransactionsTable data={allTransactions} />,
    },
    {
        tabTitle: 'Upcoming',
        tabKey: '2',
        tabContent: <TransactionsTable data={upcomming} />
    },

    ]
    return (
        <Tab tabs={tabs} activeTabKey={tabs[0].tabKey} />
    )
}
