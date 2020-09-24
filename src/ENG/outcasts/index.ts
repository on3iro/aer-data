import { IExpansion } from 'aer-types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { basicNemesisCards } from './basicNemesisCards'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'

export const outcastsData: IExpansion = {
  id: 'O',
  name: 'Outcasts',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  treasures,
  basicNemesisCards,
  upgradedBasicNemesisCards
}