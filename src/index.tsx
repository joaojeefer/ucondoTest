import React from 'react';
import { AccountProvider } from './context';
import { Main } from './ui';

export function App(): React.ReactElement {
   return (
      <AccountProvider>
         <Main />
      </AccountProvider>
   )
}
