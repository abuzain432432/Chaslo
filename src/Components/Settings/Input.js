import React from 'react'
import styles from './Input.module.scss'
import { Form, Input as AntInput } from 'antd'
export default function Input(props) {
    const required = props?.required;
    const rules = required && [{ required: true, message: `Please enter your ${props.tage}` }];
    return (
        <div className={`${styles['input-con']} ${required && styles['top']}`}>
            <p className={`${styles['tage']} mb-0`}>{props.tage}</p>
            <Form.Item rules={rules} name={props.name} label={props.label}>
                <AntInput size='large' />
            </Form.Item>
        </div>
    )
}
