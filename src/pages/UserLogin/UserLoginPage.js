import React from 'react'
import UserLoginForm from '../../Components/UserLogin/UserLoginForm'
import LoginOrRegisterTemplete from '../../Components/GeneralUI/LoginOrRegisterTemplete/LoginOrRegisterTemplete'

export default function UserLoginPage() {
    return (
        <LoginOrRegisterTemplete>
            <UserLoginForm />
        </LoginOrRegisterTemplete>
    )
}
