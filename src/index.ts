import ENG from './ENG'
import FR from './FR'

import { MARKETSETUPS } from './marketSetups'
import { TURNORDERSETUPS, TURNORDERCARDS } from './turnOrderSetups'

import { createNormalizedData } from './createNormalizedData'


const DEFAULTSUPPLYCOUNT = 9

export default {
  normalizedData: {
    ENG: createNormalizedData(ENG),
    FR: createNormalizedData(FR),
  },
  defaultSupplyCount: DEFAULTSUPPLYCOUNT,
  marketsetups: MARKETSETUPS,
  turnordersetups: TURNORDERSETUPS,
  turnordercards: TURNORDERCARDS,
}
