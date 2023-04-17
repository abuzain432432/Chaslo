import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MENU_ITEMS_CONST } from '../../Constants/MENU_ITEM_CONST'
import { Layout as AntdLayout } from 'antd'
import styles from './NavBar.module.scss'
import logoImg from '../../assets/images/logo.svg'
const { Sider } = AntdLayout;
export default function NavBar() {
    const navigate = useNavigate();
    const menuClickHandler = ({ key }) => {
        navigate(key);
    }
    return (
        <div className={styles['page-menu']}>
            <Sider>
                <div> <img height={'40px'} alt='logo for website' src={logoImg} /></div>
                <Menu mode={'vertical'} onClick={menuClickHandler} items={MENU_ITEMS_CONST}>NavBar</Menu>
            </Sider>
        </div>
    )
}
