import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout as AntdLayout } from 'antd'
import style from './Layout.module.scss'
import NavBar from '../Components/NavBar/NavBar'
const { Content } = AntdLayout

export default function Dashboard() {
    return (
        <AntdLayout className={`${style['antd-layout-con']} position-relative`}>
            <NavBar />
            <Content>
                <Outlet />
            </Content>
        </AntdLayout>
    )
}
