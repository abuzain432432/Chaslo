import React from 'react'
import { Form, Input } from 'antd'
import FormSubmitButton from '../GeneralUI/FormSubmitButton/FormSubmitButton'
import styles from './LandingForm.module.scss'
import { getRequrieRules, getValidateEmailRules } from '../../FN/FormFn'

export default function LandingForm() {
    const formSubmitHandler = () => {
        console.log('finsh')
    }
    return (
        <div className={styles['landing-form']}>
            <Form onFinish={formSubmitHandler} >
                <Form.Item name={'fullName'} rules={[getRequrieRules('fullName')]}>
                    <Input placeholder='Full Name' />
                </Form.Item>
                <Form.Item name={'emil'} rules={[getRequrieRules('email'), getValidateEmailRules()]}>
                    <Input placeholder='Enter your email address' />
                </Form.Item>
                <Form.Item name={'phoneNumber'} rules={[getRequrieRules('phone number')]}>
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
