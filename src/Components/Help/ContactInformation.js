import React from 'react'
import { List, Typography } from 'antd'
import { TbPhonePause } from 'react-icons/tb';
import { HiOutlineMail } from 'react-icons/hi';
import { FiGlobe } from 'react-icons/fi';
import { TiLocationOutline } from 'react-icons/ti';
import styles from './ContactInformation.module.scss'
const { Title, Paragraph } = Typography;

export default function ContactInformation() {
    return (
        <div className={styles['contact-information']} >
            <Title className={styles['title']} level={3}>Contact Information</Title>
            <Paragraph className={styles['text']}>Fill up the form and our Team will get back to you within 24 hours.</Paragraph>
            <List className='mt-4'>
                <List.Item>
                    <TbPhonePause size={22} />
                    <Paragraph className={`${styles['des-text']} mb-0`}>+91 98765 43210</Paragraph>
                </List.Item>
                <List.Item>
                    <HiOutlineMail size={22} />
                    <Paragraph className={`${styles['des-text']} mb-0`}> support@cashola.money</Paragraph>
                </List.Item>
                <List.Item>
                    <FiGlobe size={22} />
                    <Paragraph className={`${styles['des-text']} mb-0`}> cashola.money</Paragraph>
                </List.Item>
                <List.Item>
                    <TiLocationOutline size={24} />
                    <Paragraph className={`${styles['des-text']} mb-0`}>Works Drive Blountville, TN 37617</Paragraph>
                </List.Item>
            </List>
        </div>
    )
}
