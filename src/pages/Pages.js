import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Overview from './Overview/Overview'
import Payments from './Payment/Payment'
import Transactions from './Transactions/Transactions'
import Accounts from './Accounts/Accounts'
import Settings from './Settings/Settings'
import HelpPage from './HelpPage/HelpPage'
import { OVERVIEW_ROUTE_CONST, PAYMENTS_ROUTE_CONST, TRANSACTIONS_ROUTE_CONST, ACCOUNTS_ROUTE_CONST, SETTINGS_ROUTE_CONST, HELP_ROUTE_CONST } from '../Constants/ROUTES_CONST'
import { Layout as AntdLayout } from 'antd'

const { Content } = AntdLayout

export default function Pages() {
    return (
        <Content>
            <Routes>
                <Route path={OVERVIEW_ROUTE_CONST} element={<Overview />} />
                <Route path={PAYMENTS_ROUTE_CONST} element={<Payments />} />
                <Route path={TRANSACTIONS_ROUTE_CONST} element={<Transactions />} />
                <Route path={ACCOUNTS_ROUTE_CONST} element={<Accounts />} />
                <Route path={SETTINGS_ROUTE_CONST} element={<Settings />} />
                <Route path={HELP_ROUTE_CONST} element={<HelpPage />} />
            </Routes>
        </Content>
    )
}
