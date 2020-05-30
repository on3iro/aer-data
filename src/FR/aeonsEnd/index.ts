import { IExpansion } from 'aer-types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const aeData: IExpansion = {
  id: "AE",
  name: "Aeon's End",
  type: "standalone",
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
