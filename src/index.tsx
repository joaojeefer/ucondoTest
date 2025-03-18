import React from 'react'
import { AccountProvider } from './context'
import { RootStack } from './ui/routes'

export function App() {
   return (
      <AccountProvider>
         <RootStack />
      </AccountProvider>
   )
}
