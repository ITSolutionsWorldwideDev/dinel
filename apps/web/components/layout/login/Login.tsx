import React from 'react'
import LoginForm from './LoginForm'
import LoginImage from '../../ui/FormSideImage'

const Login = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <LoginForm />
        <LoginImage/>
        </div>
  )
}

export default Login