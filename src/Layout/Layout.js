import React, { useEffect } from 'react'
import Pages from '../pages/Pages'
import { Layout as AntdLayout } from 'antd'
import style from './Layout.module.scss'
import NavBar from '../Components/NavBar/NavBar'

export default function Dashboard() {
    useEffect(() => {
        console.log('active tab')
    }, [])
    return (
        <AntdLayout className={`${style['antd-layout-con']} position-relative`}>
            <NavBar />
            <Pages />
        </AntdLayout>
    )
}
