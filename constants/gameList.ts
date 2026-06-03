type Game = {
  id: number;
  name: string;
  slug: string;
  image: string;
  startedFrom: string;
};

export const gameNames: Game[] = [
  {
    id: 1,
    name: "Patches",
    slug: "patches",
    image: "/images/patches.svg",
    startedFrom: "2026-03-18",
  },
  {
    id: 2,
    name: "Zip",
    slug: "zip",
    image: "/images/zip.svg",
    startedFrom: "2025-03-12",
  },
  {
    id: 3,
    name: "Mini-Sudoku",
    slug: "mini-sudoku",
    image: "/images/mini-sudoku.svg",
    startedFrom: "2025-08-12",
  },
  {
    id: 4,
    name: "Tango",
    slug: "tango",
    image: "/images/tango.svg",
    startedFrom: "2024-10-08",
  },
  {
    id: 5,
    name: "Queens",
    slug: "queens",
    image: "/images/queens.svg",
    startedFrom: "2024-05-01",
  },
  {
    id: 6,
    name: "Pinpoint",
    slug: "pinpoint",
    image: "/images/pinpoint.svg",
    startedFrom: "2024-05-01",
  },
  {
    id: 7,
    name: "Crossclimb",
    slug: "crossclimb",
    image: "/images/crossclimb.svg",
    startedFrom: "2024-05-01",
  },
];
