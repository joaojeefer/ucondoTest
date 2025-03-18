import React, { createContext, useCallback, useState } from "react"
import { Account, AccountContextData, AccountProviderProps } from "./types"
import { accounstListMock } from "../../../mock"

export const AccountContext = createContext({} as AccountContextData)

export function AccountProvider({ children }: AccountProviderProps) {
   const [accounts, setAccounts] = useState<Account[]>(accounstListMock)

   const sortAccounts = useCallback((list: Account[]) => {
      const sortedList = list.sort((a, b) => {
         const aParts = a.code.split('.').map(Number)
         const bParts = b.code.split('.').map(Number)

         for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
            const numA = aParts[i] || 0
            const numB = bParts[i] || 0

            if (numA !== numB) return numA - numB
         }

         return 0
      })

      return sortedList
   }, [])

   function addAccount(newAccount: Account) {
      setAccounts(sortAccounts([...accounts, newAccount]))
   }

   function deleteAccount(code: string) {
      setAccounts(oldList => oldList.filter(account => account.code !== code))
   }

   return (
      <AccountContext.Provider
         value={{
            accounts,
            addAccount,
            deleteAccount,
         }}
      >
         {children}
      </AccountContext.Provider>
   )
}