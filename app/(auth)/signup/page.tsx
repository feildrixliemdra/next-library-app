'use client'

import React from 'react'
import { signUpSchema } from '../../../lib/validation'
import AuthForm from '../../../components/AuthForm'
import { signUp } from '../../../lib/action/auth'

const SignUp = () => {
  return (
    <AuthForm
      type='SIGN_UP'
      schema={signUpSchema}
      defaultValue={{
        email: '',
        password: '',
        fullName: '',
        universityId: 0,
        universityCard: '',
      }}
      onSubmit={signUp}
    />
  )
}

export default SignUp
