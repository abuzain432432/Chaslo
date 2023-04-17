import React from 'react'
import UserRegisterForm from '../../Components/UserRegister/UserRegisterForm'
import LoginOrRegisterTemplete from '../../Components/GeneralUI/LoginOrRegisterTemplete/LoginOrRegisterTemplete'
export default function UserRegister() {
    return (
        <LoginOrRegisterTemplete>
            <UserRegisterForm />
        </LoginOrRegisterTemplete>
    )
}
