import { OVERVIEW_ROUTE_CONST, PAYMENTS_ROUTE_CONST, SETTINGS_ROUTE_CONST, HELP_ROUTE_CONST, TRANSACTIONS_ROUTE_CONST, ACCOUNTS_ROUTE_CONST } from "./ROUTES_CONST";
import { IoLogOutOutline } from 'react-icons/io5';
import { AiOutlineSetting } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { TbBoxMultiple } from 'react-icons/tb';
import { RiKeyboardBoxLine } from 'react-icons/ri';
export const MENU_ITEMS_CONST = [
    {
        label: 'Overview',
        key: OVERVIEW_ROUTE_CONST,
        icon: <RiBarChartBoxLine size={18} />
    },
    {
        label: 'Payment',
        key: PAYMENTS_ROUTE_CONST,
        icon: <RiKeyboardBoxLine size={18} />
    },
    {
        label: 'Transactions',
        key: TRANSACTIONS_ROUTE_CONST,
        icon: <TbBoxMultiple size={20} />
    },
    {
        label: 'Accounts',
        key: ACCOUNTS_ROUTE_CONST,
        icon: <FiUser size={20} />
    },
    {
        label: 'Settings',
        key: SETTINGS_ROUTE_CONST,
        icon: <AiOutlineSetting size={22} />
    },
    {
        label: 'Help',
        key: HELP_ROUTE_CONST,
        icon: <IoMdHelpCircleOutline size={22} />
    },
    {
        label: 'Log Out',
        key: 'logout',
        icon: <IoLogOutOutline size={22} />
    },
]