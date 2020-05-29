import { BasicNemesisCard } from 'aer-types'

export const basicNemesisCards: BasicNemesisCard[] = [
  {
    id: 'Menace',
    expansion: 'promos',
    tier: 1,
    type: 'Attack',
    name: 'Zmora',
    effect: `
      <p>
        Gracze wspólnie odrzucają cztery karty.
      </p>
    `,
  },
  {
    id: 'GlyphEnigma',
    expansion: 'promos',
    tier: 1,
    type: 'Minion',
    name: 'Glif-Pułapka',
    hp: 7,
    effect: `
      <p>
        <b>TRWAŁY:</b> Gravehod otrzymuje 1 obrażenie. Jeżeli ostatnia dobrana karta Nemezis była drugiego rzędu, lub wyższego, 
        Gravehold otrzymuje dodatkowo 2 obrażenia.
      </p>
    `,
  },
  {
    id: 'GravitySplinter',
    expansion: 'promos',
    tier: 2,
    type: 'Power',
    name: 'Ułamek Grawitacji',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 7 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Dwukrotne Wyzwolenie. Gracz z najmniejszą liczbą otwartych Bram otrzymuje 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'WorldPurge',
    expansion: 'promos',
    tier: 3,
    type: 'Power',
    name: 'Oczyszczenie Świata',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Wydaj 8 <span class="aether">&AElig;</span>.<br />
        <br />
        <b>MOC 2:</b> Trzykrotne wyzwolenie.<br />
        <br />
        <span class="or">ALBO</span><br />
        <br />
        Gravehold otrzymuje 7 obrażeń.
      </p>
    `,
  },
  {
    id: 'BaneSire',
    expansion: 'promos',
    tier: 1,
    type: 'Minion',
    name: 'Bane Sire',
    hp: 6,
    effect: `
      <p>
        <b>Persistent:</b> Unleash.
      </p>
    `,
  },
  {
    id: 'Decimate',
    expansion: 'promos',
    tier: 1,
    type: 'Attack',
    name: 'Zdziesiątkowanie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie. Dowolny gracz otrzymuje 2 Ładunki.<br />
        <br />
        <span class="or">ALBO</span><br />
        <br />
        Gravehold otrzymuje 4 obrażenia.
      </p>
    `,
  },
  {
    id: 'SpiritCage',
    expansion: 'promos',
    tier: 1,
    type: 'Power',
    name: 'Cela Duszy',
    power: 3,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Odrzuć z ręki kartę kosztującą 5 <span class="aether">&AElig;</span> lub więcej.<br />
        <br />
        <b>MOC 3:</b> Dwukrotne Wyzwolenie. Dowolny gracz odrzuca z ręki kartę Zaklęcia.
      </p>
    `,
  },
  {
    id: 'BanefulCrux',
    expansion: 'promos',
    tier: 2,
    type: 'Power',
    name: 'Sedno Zguby',
    power: 2,
    effect: `
      <p>
        <b>ABY ODRZUCIĆ:</b> Odrzuć z ręki dwie karty, z których każda kosztuje 4 <span class="aether">&AElig;</span> lub więcej.<br />
        <br />
        <b>MOC 2:</b> Dwukrotne Wyzwolenie. Gravehold otrzymuje 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'Negate',
    expansion: 'promos',
    tier: 2,
    type: 'Attack',
    name: 'Negacja',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Dowolny gracz niszczy najdroższą kartę na ręce.<br />
        <br />
        <span class="or">ALBO</span><br />
        <br />
        Dwukrotne Wyzwolenie. Gravehold otrzymuje 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'Gallowskulk',
    expansion: 'promos',
    tier: 3,
    type: 'Minion',
    name: 'Skrytoszkielet',
    hp: 10,
    effect: `
      <p>
      <b>TRWAŁY:</b> Gracz z najmniejszą liczbą punktów życia otrzymuje 3 obrażenia.
      </p>
    `,
  },
  {
    id: 'Unmake',
    expansion: 'promos',
    tier: 3,
    type: 'Attack',
    name: 'Zniszczenie',
    effect: `
      <p>
        Dwukrotne Wyzwolenie.<br />
        <br />
        Dowolny gracz niszczy trzy wierzchnie karty ze swojej talii i otrzymuje 3 obrażenia.
      </p>
    `,
  },
]
