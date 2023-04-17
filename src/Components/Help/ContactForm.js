import React from 'react'
import { Button, Form, Input } from 'antd'
import styles from './ContactForm.module.scss'
import Card from '../GeneralUI/Card/Card'
import PhoneInput from 'react-phone-number-input'
export default function ContactForm() {
    const formFinshHandler = (data) => {
        console.log(data)
    }
    return (
        <Card className={styles['contact-form']}>
            <Form layout='vertical' onFinish={formFinshHandler}>
                <div className={`${styles['form-control']} d-flex`}>
                    <Form.Item name={'firstName'} label='First Name'>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'lastName'} label='Last Name'>
                        <Input />
                    </Form.Item>
                </div>
                <div className={`${styles['form-control']} d-flex`}>
                    <Form.Item name={'email'} label='Email'>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'phone'} label='Phone'>
                        {/* <Input /> */}
                        <PhoneInput
                        />
                    </Form.Item>
                </div>
                <Form.Item name={'message'} label='Message'>
                    <Input.TextArea placeholder='Write your message' />
                </Form.Item>
                <div className='d-flex justify-content-end'>
                    <Button htmlType='sumbit'>Send Message</Button>
                </div>
            </Form>
        </Card>
    )
}
