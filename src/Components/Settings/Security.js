import React, { useState } from 'react'
import { Form, Input, Switch } from 'antd'
import FormButton from '../GeneralUI/FormSubmitButton/FormSubmitButton'
import styles from './Security.module.scss'
import { getStrongPasswordRules, getRequrieRules, getConfirmPasswordRules } from '../../FN/FormFn'
export default function Security() {
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const formSubmitHandler = (data) => {
        console.log(data)
    }
    const switchChangeHandler = (data) => {
        setTwoFactorAuth(data);
    }
    return (
        <div className={`${styles['security']}`}>
            <Form scrollToFirstError layout='vertical' onFinish={formSubmitHandler}>
                <Form.Item validateTrigger="onChange"
                    validateFirst label='Old Password' name={'oldPass'} rules={[getRequrieRules('Old Password'), getStrongPasswordRules()]}>
                    <Input.Password size='large' />
                </Form.Item>
                <Form.Item label='New Password' rules={[getRequrieRules('New Password'), getStrongPasswordRules()]} name={'newPass'}>
                    <Input.Password size='large' />
                </Form.Item>
                <Form.Item label='Confirm Password' name={'conPass'} dependencies={['newPass']} rules={[getRequrieRules('Confirm Password'),
                getConfirmPasswordRules('newPass')
                ]}>
                    <Input.Password size='large' />
                </Form.Item>
                <div className='d-flex gap-3 mt-4'>
                    <div> <Switch onChange={switchChangeHandler} /></div>
                    <div>2FA Setup</div>
                </div>
                {twoFactorAuth &&
                    (<div className={styles['pass-con']}>
                        <Form.Item rules={[getRequrieRules('2FA Password')]} label='Password' name={'pass'}>
                            <Input.Password size='large' />
                        </Form.Item>
                    </div>)}

                <div className={styles['btn-con']}>
                    <FormButton htmlType='submit' round={true}>Save</FormButton>
                </div>
            </Form>

        </div>
    )
}
