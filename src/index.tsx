import React from 'react';
import { View } from 'react-native';
import { AccountProvider } from './context';

export function App(): React.ReactElement {
   return (
      <AccountProvider>
         <View />
      </AccountProvider>
   )
}
