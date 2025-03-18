import { ReactNode } from "react"

export type AccountContextData = {
   accounts: Account[]
   addAccount: (newAccount: Account) => void
   deleteAccount: (code: string) => void
}

export type AccountProviderProps = {
   children: ReactNode
}

export type Account = {
   code: string
   name: string
   type: 'Despesa' | 'Receita'
   acceptEntries: boolean
}