export interface Wine {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

export const WINE_CATEGORIES = [
  'Sekt',
  'Réserve',
  'Lagenwein',
  'Ortswein',
  'Gutswein',
  'Literwein',
  'Paket',
];

const WINE_BOTTLE_IMAGE = 'https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const WINES: Wine[] = [
  // Sekt
  {
    id: 1,
    name: '2022 Riesling Sekt brut',
    category: 'Sekt',
    description: 'Feinperliger Riesling Sekt mit frischer Apfel- und Pfirsichnote.',
    price: 13.5,
    image: WINE_BOTTLE_IMAGE,
  },
  // Réserve
  {
    id: 2,
    name: '2018 Spätburgunder Réserve',
    category: 'Réserve',
    description: 'Komplexer, gereifter Spätburgunder mit Noten von Kirsche und feiner Würze.',
    price: 22.0,
    image: WINE_BOTTLE_IMAGE,
  },
  // Lagenwein
  {
    id: 3,
    name: '2021 Riesling "Birkweiler Kastanienbusch"',
    category: 'Lagenwein',
    description: 'Mineralischer Lagenriesling mit vielschichtiger Frucht und Eleganz.',
    price: 16.5,
    image: WINE_BOTTLE_IMAGE,
  },
  {
    id: 4,
    name: '2021 Spätburgunder "Birkweiler Mandelberg"',
    category: 'Lagenwein',
    description: 'Eleganter Spätburgunder aus Top-Lage mit feiner Beerenfrucht.',
    price: 18.0,
    image: WINE_BOTTLE_IMAGE,
  },
  // Ortswein
  {
    id: 5,
    name: '2022 Riesling Birkweiler',
    category: 'Ortswein',
    description: 'Typischer Ortswein mit frischer Säure und Zitrusnoten.',
    price: 12.0,
    image: WINE_BOTTLE_IMAGE,
  },
  {
    id: 6,
    name: '2022 Weißburgunder Birkweiler',
    category: 'Ortswein',
    description: 'Fruchtiger Weißburgunder mit feiner Cremigkeit.',
    price: 11.5,
    image: WINE_BOTTLE_IMAGE,
  },
  // Gutswein
  {
    id: 7,
    name: '2022 Riesling trocken',
    category: 'Gutswein',
    description: 'Klassischer, trockener Gutsriesling mit animierender Frische.',
    price: 10.5,
    image: WINE_BOTTLE_IMAGE,
  },
  {
    id: 8,
    name: '2022 Weißburgunder trocken',
    category: 'Gutswein',
    description: 'Saftiger Weißburgunder mit feiner Frucht.',
    price: 10.0,
    image: WINE_BOTTLE_IMAGE,
  },
  {
    id: 9,
    name: '2023 Rosé trocken',
    category: 'Gutswein',
    description: 'Frischer Rosé mit Noten von Erdbeere und Himbeere.',
    price: 9.5,
    image: WINE_BOTTLE_IMAGE,
  },
  // Literwein
  {
    id: 10,
    name: '2023 Riesling trocken 1,0l',
    category: 'Literwein',
    description: 'Unkomplizierter, frischer Riesling im Liter.',
    price: 7.5,
    image: WINE_BOTTLE_IMAGE,
  },
  {
    id: 11,
    name: '2023 Weißburgunder trocken 1,0l',
    category: 'Literwein',
    description: 'Leichter Weißburgunder für jeden Tag.',
    price: 7.5,
    image: WINE_BOTTLE_IMAGE,
  },
  // Paket
  {
    id: 12,
    name: 'Probierpaket Klassiker (6 Flaschen)',
    category: 'Paket',
    description: 'Das beliebte Probierpaket mit 6 Klassikern aus unserem Sortiment.',
    price: 49.0,
    image: WINE_BOTTLE_IMAGE,
  },
];
