import React from 'react'
import Faq from './Faq'
import ContectUs from './ContectUs'
import Tab from '../GeneralUI/Tab/Tab'
export default function HelpTab() {
    const tabs = [
        {
            tabTitle: 'FAQ',
            tabKey: '1',
            tabContent: <Faq />,
        },
        {
            tabTitle: 'Contacts Us',
            tabKey: '2',
            tabContent: <ContectUs />,
        },
    ]
    return (
        <Tab tabs={tabs} activeTabKey={tabs[0].tabKey} />
    )
}
