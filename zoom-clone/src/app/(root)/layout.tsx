import { Route } from 'next'
import React, { Children, ReactNode } from 'react'

const RootLayout = ({children}:{children : ReactNode }) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default RootLayout