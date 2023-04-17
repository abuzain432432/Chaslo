import React from 'react'
import Header from '../../Components/GeneralUI/Header/Header'
import HelpTab from '../../Components/Help/HelpTab'

export default function HelpPage() {
    return (
        <div className='d-flex flex-column '>
            <Header pageTitle='Help' />
            <div className='p-4 position-relative' style={{ flex: 1, minHeight: 'calc(100vh - 80px)' }}>
                <HelpTab />
            </div>
        </div>
    )
}
