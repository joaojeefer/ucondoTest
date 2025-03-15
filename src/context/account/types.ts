// export enum AccountType {
//    income = 'receita',
//    expense = 'despesa'
// }

export interface Account {
   code: string
   name: string
   // type: AccountType
   type: 'Despesa' | 'Receita'
   acceptEntries: boolean
}