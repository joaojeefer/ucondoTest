import { DetailsNavigationProp, DetailsRouteProp } from "../../routes/types"

export type DetailsFormValues = {
   parentCode: string
   code: string
   name: string
   accountType: string
   acceptEntries: boolean
}

export type DetailsProps = {
   navigation: DetailsNavigationProp
   route: DetailsRouteProp
}