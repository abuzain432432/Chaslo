import React from 'react'
import { Form, Input } from 'antd'
import FormSubmitButton from '../GeneralUI/FormSubmitButton/FormSubmitButton'
import styles from './LandingForm.module.scss'

export default function LandingForm() {
    const formSubmitHandler = () => {
        console.log('finsh')
    }
    return (
        <div className={styles['landing-form']}>
            <Form onFinish={formSubmitHandler}>
                <Form.Item name={'fullName'} >
                    <Input placeholder='Full Name' />
                </Form.Item>
                <Form.Item name={'emil'}>
                    <Input placeholder='Enter your email address' />
                </Form.Item>
                <Form.Item name={'phoneNumber'}>
                    <Input placeholder='Phone Number (optional)' />
                </Form.Item>
                <Form.Item name={'referalCode'}>
                    <Input placeholder='Referal Code' />
                </Form.Item>
                <div className={`${styles['submit-btn-outer-con']} d-flex justify-content-center`}>
                    <div className={styles['submit-btn-inner-con']}>
                        <FormSubmitButton htmlType='submit'>GET EARLY ACCESS</FormSubmitButton>
                    </div>
                </div>
            </Form>
        </div>
    )
}
