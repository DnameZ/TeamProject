const eventsMock = [
  {
    id: 1,
    title: 'Kreiraj svoju Pokedex aplikaciju uz ReactJS',
    location: 'Hodnik FOI-a',
    date: 'Ponedjeljak 16.10.',
    time: '09:00 - 16:00h',
    availability: '18/52',
    company: 'Speck',
    shortDescription: `Upoznaj se s praktičnom stranom razvoja aplikacija uz pomoć React JavaScript razvojnog okvira i nauči kako samostalno kreirati svoju Pokedex aplikaciju unutar 90 minuta.
                           Tijekom svih koraka razvoja na raspolaganju će ti biti primjeri i komentari unutar koda koji trebaš riješiti, kao i pomoć Speckovih developera s kojima ćeš prolaziti kroz zadatke.`,
  },
  {
    id: 2,
    title: 'Mogu li “ja” postati konzultant?',
    location: 'Hodnik FOI-a',
    date: 'Ponedjeljak 16.10.',
    time: '09:00 - 16:00h',
    availability: '18/52',
    company: 'Speck',
    shortDescription: `Upoznaj se s praktičnom stranom razvoja aplikacija uz pomoć React JavaScript razvojnog okvira i nauči kako samostalno kreirati svoju Pokedex aplikaciju unutar 90 minuta.
                           Tijekom svih koraka razvoja na raspolaganju će ti biti primjeri i komentari unutar koda koji trebaš riješiti, kao i pomoć Speckovih developera s kojima ćeš prolaziti kroz zadatke.`,
  },
  {
    id: 3,
    title: 'Karijera informatičara nakon FOI-ja',
    location: 'Hodnik FOI-a',
    date: 'Ponedjeljak 16.10.',
    time: '09:00 - 16:00h',
    availability: '18/52',
    company: 'Speck',
    shortDescription: `Upoznaj se s praktičnom stranom razvoja aplikacija uz pomoć React JavaScript razvojnog okvira i nauči kako samostalno kreirati svoju Pokedex aplikaciju unutar 90 minuta.
                           Tijekom svih koraka razvoja na raspolaganju će ti biti primjeri i komentari unutar koda koji trebaš riješiti, kao i pomoć Speckovih developera s kojima ćeš prolaziti kroz zadatke.`,
  },
  {
    id: 4,
    title: 'Kreiraj svoju Pokedex aplikaciju uz ReactJS',
    location: 'Hodnik FOI-a',
    date: 'Ponedjeljak 16.10.',
    time: '09:00 - 16:00h',
    availability: '18/52',
    company: 'Speck',
    shortDescription: `Upoznaj se s praktičnom stranom razvoja aplikacija uz pomoć React JavaScript razvojnog okvira i nauči kako samostalno kreirati svoju Pokedex aplikaciju unutar 90 minuta.
                           Tijekom svih koraka razvoja na raspolaganju će ti biti primjeri i komentari unutar koda koji trebaš riješiti, kao i pomoć Speckovih developera s kojima ćeš prolaziti kroz zadatke.`,
  },
  {
    id: 5,
    title: 'Mogu li “ja” postati konzultant?',
    location: 'Hodnik FOI-a',
    date: 'Ponedjeljak 16.10.',
    time: '09:00 - 16:00h',
    availability: '18/52',
    company: 'Speck',
    shortDescription: `Upoznaj se s praktičnom stranom razvoja aplikacija uz pomoć React JavaScript razvojnog okvira i nauči kako samostalno kreirati svoju Pokedex aplikaciju unutar 90 minuta.
                           Tijekom svih koraka razvoja na raspolaganju će ti biti primjeri i komentari unutar koda koji trebaš riješiti, kao i pomoć Speckovih developera s kojima ćeš prolaziti kroz zadatke.`,
  },
  {
    id: 6,
    title: 'Karijera informatičara nakon FOI-ja',
    location: 'Hodnik FOI-a',
    date: 'Ponedjeljak 16.10.',
    time: '09:00 - 16:00h',
    availability: '18/52',
    company: 'Speck',
    shortDescription: `Upoznaj se s praktičnom stranom razvoja aplikacija uz pomoć React JavaScript razvojnog okvira i nauči kako samostalno kreirati svoju Pokedex aplikaciju unutar 90 minuta.
                           Tijekom svih koraka razvoja na raspolaganju će ti biti primjeri i komentari unutar koda koji trebaš riješiti, kao i pomoć Speckovih developera s kojima ćeš prolaziti kroz zadatke.`,
  },
  {
    id: 7,
    title: 'Kreiraj svoju Pokedex aplikaciju uz ReactJS',
    location: 'Hodnik FOI-a',
    date: 'Ponedjeljak 16.10.',
    time: '09:00 - 16:00h',
    availability: '18/52',
    company: 'Speck',
    shortDescription: `Upoznaj se s praktičnom stranom razvoja aplikacija uz pomoć React JavaScript razvojnog okvira i nauči kako samostalno kreirati svoju Pokedex aplikaciju unutar 90 minuta.
                           Tijekom svih koraka razvoja na raspolaganju će ti biti primjeri i komentari unutar koda koji trebaš riješiti, kao i pomoć Speckovih developera s kojima ćeš prolaziti kroz zadatke.`,
  },
  {
    id: 8,
    title: 'Mogu li “ja” postati konzultant?',
    location: 'Hodnik FOI-a',
    date: 'Ponedjeljak 16.10.',
    time: '09:00 - 16:00h',
    availability: '18/52',
    company: 'Speck',
    shortDescription: `Upoznaj se s praktičnom stranom razvoja aplikacija uz pomoć React JavaScript razvojnog okvira i nauči kako samostalno kreirati svoju Pokedex aplikaciju unutar 90 minuta.
                           Tijekom svih koraka razvoja na raspolaganju će ti biti primjeri i komentari unutar koda koji trebaš riješiti, kao i pomoć Speckovih developera s kojima ćeš prolaziti kroz zadatke.`,
  },
  {
    id: 9,
    title: 'Karijera informatičara nakon FOI-ja',
    location: 'Hodnik FOI-a',
    date: 'Ponedjeljak 16.10.',
    time: '09:00 - 16:00h',
    availability: '18/52',
    company: 'Speck',
    shortDescription: `Upoznaj se s praktičnom stranom razvoja aplikacija uz pomoć React JavaScript razvojnog okvira i nauči kako samostalno kreirati svoju Pokedex aplikaciju unutar 90 minuta.
                           Tijekom svih koraka razvoja na raspolaganju će ti biti primjeri i komentari unutar koda koji trebaš riješiti, kao i pomoć Speckovih developera s kojima ćeš prolaziti kroz zadatke.`,
  },
  {
    id: 10,
    title: 'Karijera informatičara nakon FOI-ja',
    location: 'Hodnik FOI-a',
    date: 'Ponedjeljak 16.10.',
    time: '09:00 - 16:00h',
    availability: '18/52',
    company: 'Speck',
    shortDescription: `Upoznaj se s praktičnom stranom razvoja aplikacija uz pomoć React JavaScript razvojnog okvira i nauči kako samostalno kreirati svoju Pokedex aplikaciju unutar 90 minuta.
                           Tijekom svih koraka razvoja na raspolaganju će ti biti primjeri i komentari unutar koda koji trebaš riješiti, kao i pomoć Speckovih developera s kojima ćeš prolaziti kroz zadatke.`,
  },
];

export default eventsMock;
