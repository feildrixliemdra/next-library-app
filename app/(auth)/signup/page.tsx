'use client'

import React from 'react'
import { signUpSchema } from '../../../lib/validation'
import AuthForm from '../../../components/AuthForm'

const SignUp = () => {
  return (
    <AuthForm
      type='SIGN_UP'
      schema={signUpSchema}
      defaultValue={{
        email: '',
        password: '',
        fullName: '',
        universityId: '',
        universityCard: '',
      }}
      onsubmit={() => {}}
    />
  )
}

export default SignUp
