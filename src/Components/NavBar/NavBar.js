import React from 'react'
import { Menu } from 'antd'
import { useNavigate, useMatch } from 'react-router-dom'
import { Layout as AntdLayout } from 'antd'
import styles from './NavBar.module.scss'
import logoImg from '../../assets/images/logo.svg'

import { OVERVIEW_ROUTE_CONST, PAYMENTS_ROUTE_CONST, SETTINGS_ROUTE_CONST, HELP_ROUTE_CONST, TRANSACTIONS_ROUTE_CONST, ACCOUNTS_ROUTE_CONST } from "../../Constants/ROUTES_CONST";
import { IoLogOutOutline } from 'react-icons/io5';
import { AiOutlineSetting } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { TbBoxMultiple } from 'react-icons/tb';
import { RiKeyboardBoxLine } from 'react-icons/ri';


const { Sider } = AntdLayout;
export default function NavBar() {
    const overViwMatch = useMatch(OVERVIEW_ROUTE_CONST, { exact: true });
    const paymentViwMatch = useMatch(PAYMENTS_ROUTE_CONST, { exact: true });
    const transactionViwMatch = useMatch(TRANSACTIONS_ROUTE_CONST, { exact: true });
    const accountViwMatch = useMatch(ACCOUNTS_ROUTE_CONST, { exact: true });
    const settingsViwMatch = useMatch(SETTINGS_ROUTE_CONST, { exact: true });
    const helpViwMatch = useMatch(HELP_ROUTE_CONST, { exact: true });


    const navigate = useNavigate();
    const menuClickHandler = ({ key }) => {
        navigate(key);
    }
    const menuItems = [
        {
            label: <div className={overViwMatch && 'active-link'}>Overview</div>,
            key: OVERVIEW_ROUTE_CONST,
            icon: <RiBarChartBoxLine size={18} />
        },
        {
            label: <div className={paymentViwMatch && 'active-link'}>Payment</div>,
            key: PAYMENTS_ROUTE_CONST,
            icon: <RiKeyboardBoxLine size={18} />
        },
        {
            label: <div className={transactionViwMatch && 'active-link'}>Transactions</div>,
            key: TRANSACTIONS_ROUTE_CONST,
            icon: <TbBoxMultiple size={20} />
        },
        {
            label: <div className={accountViwMatch && 'active-link'}>Accounts</div>,
            key: ACCOUNTS_ROUTE_CONST,
            icon: <FiUser size={20} />
        },
        {
            label: <div className={settingsViwMatch && 'active-link'}>Settings</div>,
            key: SETTINGS_ROUTE_CONST,
            icon: <AiOutlineSetting size={22} />
        },
        {
            label: <div className={helpViwMatch && 'active-link'}>Help</div>,
            key: HELP_ROUTE_CONST,
            icon: <IoMdHelpCircleOutline size={22} />
        },
        {
            label: 'Log Out',
            key: 'logout',
            icon: <IoLogOutOutline size={22} />
        },
    ]
    return (
        <div className={styles['page-menu']}>
            <Sider>
                <div> <img height={'40px'} alt='logo for website' src={logoImg} /></div>
                <Menu mode={'vertical'} onClick={menuClickHandler} items={menuItems}>NavBar</Menu>
            </Sider>
        </div>
    )
}
