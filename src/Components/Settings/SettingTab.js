import React from 'react'
import Tab from '../GeneralUI/Tab/Tab'
import AccountsDetails from './AccountsDetails';
import Security from './Security';
import Billings from './Billings';
import Notifications from './Notifications';
import Aurthorizations from './Aurthorizations';
export default function SettingsTab(props) {
    const { accountDetails } = props;
    const tabs = [{
        tabTitle: 'Account Details',
        tabKey: '1',
        tabContent: <AccountsDetails accountDetails={accountDetails} />,
    },
    {
        tabTitle: 'Upcoming',
        tabKey: '2',
        tabContent: <Security />
    },
    {
        tabTitle: 'Billing',
        tabKey: '3',
        tabContent: <Billings />
    },
    {
        tabTitle: 'Notifications',
        tabKey: '5',
        tabContent: <Notifications />
    },
    {
        tabTitle: 'Authorizations',
        tabKey: '6',
        tabContent: <Aurthorizations />
    },

    ]
    return (
        <Tab tabs={tabs} activeTabKey={tabs[0].tabKey} />
    )
}
