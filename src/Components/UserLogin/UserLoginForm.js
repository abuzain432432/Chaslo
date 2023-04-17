import React from 'react'
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import FormButtonDivider from '../GeneralUI/FormButtonDivider/FormButtonDivider'
import FormSubmitButton from '../GeneralUI/FormSubmitButton/FormSubmitButton'
import ContinueWithGoogle from '../GeneralUI/ContinueWithGoogle/ContinueWithGoogle'
import ContinueWithApple from '../GeneralUI/ContinueWithApple/ContinueWithApple'
import { Typography } from 'antd'
const { Paragraph } = Typography;

export default function UserLoginForm() {
    return (
        <div className='position-relative'>
            <Form layout='vertical'>
                <Form.Item label='Email Address' name={'emailAddress'}>
                    <Input placeholder='Enter your email address' />
                </Form.Item>
                <Form.Item label='Password' name={'password'}>
                    <Input placeholder='Enter your password' />
                </Form.Item>
                <FormSubmitButton >LOGIN IN</FormSubmitButton>
            </Form>
            <FormButtonDivider />
            <ContinueWithGoogle>Continue With Google</ContinueWithGoogle>
            <ContinueWithApple>Continue With Apple</ContinueWithApple>
            <Paragraph className='mb-0 mt-3 text-center'>
                Don't have an account?
                <Link className='ms-1' to={'/register'} >Signup now</Link>
            </Paragraph>
        </div>
    )
}
