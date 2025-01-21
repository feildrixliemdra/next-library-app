'use client'

import React from 'react'
import AuthForm from '../../../components/AuthForm'
import { signInSchema } from '../../../lib/validation'

const SignIn = () => {
  return (
    <AuthForm
      type='SIGN_IN'
      schema={signInSchema}
      defaultValue={{
        email: '',
        password: '',
      }}
      onsubmit={() => {}}
    />
  )
}

export default SignIn
