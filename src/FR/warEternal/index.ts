import { IExpansion } from 'aer-types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const weData: IExpansion = {
  id: "WE",
  name: "Guerre éternelle",
  type: "standalone",
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
