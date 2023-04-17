import React from 'react'
import { Form, Input } from 'antd'
import FormSubmitButton from '../GeneralUI/FormSubmitButton/FormSubmitButton'
import { Link } from 'react-router-dom'
import ContinueWithGoogle from '../GeneralUI/ContinueWithGoogle/ContinueWithGoogle'
import ContinueWithApple from '../GeneralUI/ContinueWithApple/ContinueWithApple'
import { Typography } from 'antd'
import FormButtonDivider from '../GeneralUI/FormButtonDivider/FormButtonDivider'
const { Paragraph } = Typography;
export default function UserRegisterForm() {

    return (
        <div className='position-relative'>
            <Form layout='vertical'>
                <Form.Item label='Full Name' name={'fullName'}>
                    <Input placeholder='Enter your full name' />
                </Form.Item>
                <Form.Item label='Email Address' name={'emailAddress'}>
                    <Input placeholder='Enter your email address' />
                </Form.Item>
                <Form.Item label='Password' name={'password'}>
                    <Input placeholder='Enter your password' />
                </Form.Item>
                <Form.Item label='Confirm Password' name={'confirmPassword'}>
                    <Input placeholder='Re-type password' />
                </Form.Item>
                <FormSubmitButton >SIGN UP</FormSubmitButton>
            </Form>
            <FormButtonDivider />
            <ContinueWithGoogle>Continue With Google</ContinueWithGoogle>
            <ContinueWithApple>Continue With Apple</ContinueWithApple>
            <Paragraph className='mb-0 mt-3 text-center'>
                Already have an account?
                <Link className='ms-1' to={'/login'} >Sign in</Link>
            </Paragraph>
        </div>

    )
}
