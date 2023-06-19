import React from 'react'
import Header from '../../Components/GeneralUI/Header/Header'
import Settings from '../../Components/Settings/Settings'
const ACCOUNT_DETIALS = {
    name: 'Cashlo admin',
    email: 'cashlo@gmail.com',
    address: {
        street1: '2781 Daylene Drive',
        street2: '2782 Daylene Drive2'
    },
    city: 'Arifwala',
    street: 'Michigan',
    zpCode: '48226',
    phoneNumber: '+1  123  456  7890',
    country: 'Pakistan',
    state: 'Punjab'
}
export default function SettingsPage() {
    return (
        <div>
            <Header pageTitle='Settings' />
            <Settings accountDetails={ACCOUNT_DETIALS} />
        </div>
    )
}
