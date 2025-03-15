import React, { createContext, ReactNode, useState } from "react"
import { Account } from "./types"
import { accounstListMock } from "../../../mock"

interface AccountContextData {
   accounts: Account[]
   addAccount: (newAccount: Account) => void
}

interface AccountProviderProps {
   children: ReactNode
}

export const AccountContext = createContext({} as AccountContextData)

export function AccountProvider({ children }: AccountProviderProps) {
   const [accounts, setAccounts] = useState(accounstListMock)

   function addAccount(newAccount: Account) {
      // adicionar novo Account conforme regra
   }

   return (
      <AccountContext.Provider
         value={{
            accounts,
            addAccount,
         }}
      >
         {children}
      </AccountContext.Provider>
   )
}