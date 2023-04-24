import React from 'react'
import { UserAuth } from '../context/AuthContext'
import UserStack from './UserStack'
import AuthStack from './AuthStack'

const Root = () => {
    const { user } = UserAuth()
    return user && user.emailVerified ? <UserStack/> : <AuthStack/>
}

export default Root