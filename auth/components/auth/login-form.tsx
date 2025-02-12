import React from 'react'
import {CardWrapper} from "./card-wrapper";
export const LoginForm = () => {
  return (
    <CardWrapper
    headerLabel='Welcome back'
    backButtonHref='/auth/register'
    backButtonLabel="Don't have an account ?"
    showsocial
    >
      login-form!
    </CardWrapper>
  )
}
