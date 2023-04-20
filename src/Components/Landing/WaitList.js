import React from 'react'
import { Typography } from 'antd'
import styles from './WaitList.module.scss'
import ShareUrlButton from '../GeneralUI/ShareUrlButton/ShareUrlButton';
const { Title, Paragraph } = Typography;
export default function WaitList(props) {
    const { waitingMember, email, link } = props;
    return (
        <div className={styles['wait-list']}>
            <Title className={`${styles['thanks-text']} m-0`} level={4}>Thank you!</Title>
            <Paragraph className='m-0 mb-2'>We have added your email to the signup queue</Paragraph>
            <Title className={`${styles['waiting-member']} m-0`} level={2}>{waitingMember} People ahead of you</Title>
            <Paragraph className='m-0'>This reservation is held for ${email}. Is this <span>not you?</span></Paragraph>
            <Title className={`m-0 ${styles['priority-text']}`} level={3}>Interested in priority access?</Title>
            <Paragraph className='m-0'>Get early access by referring your friends.</Paragraph>
            <Paragraph className='m-0'>The more friends that join the sooner you’ll get access.</Paragraph>
            <div className='d-flex gap-2'>
                <ShareUrlButton text='join the chashola for managing your accounts' link={link} platform='twitter'>Twitter</ShareUrlButton>
                <ShareUrlButton text='join the chashola for managing your accounts' link={link} platform='facebook'>Facebook</ShareUrlButton>
                <ShareUrlButton subject={'Check out this website!'} text='join the chashola for managing your accounts' link={link} platform='email'>Email</ShareUrlButton>
                <ShareUrlButton text='join the chashola for managing your accounts' link={link} platform='likendin'>Likendin</ShareUrlButton>
            </div>
            <Title className={`m-0 ${styles['link-title']}`} level={3}>Or share this unique link:</Title>
            <Paragraph className={`m-0 ${styles['link']}`}>{link}</Paragraph>
        </div>
    )
}
