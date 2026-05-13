export interface Project {
  id: string;
  title: string;
  year: string;
  image: string;
  logoText: string;
  description?: string;
  icon?: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "ROAST OF KEVIN HART",
    year: "2026",
    image: "/1s.png", // Comedy stage/audience
    logoText: "Netflix Original",
    description: "Netflix's biggest comedy roast event featuring Kevin Hart",
  },
  {
    id: "2",
    title: "LIFT",
    year: "2024",
    image: "/Re.png", // Heist/action scene
    logoText: "Netflix",
    description: "Action heist thriller starring Kevin Hart",
  },
  {
    id: "3",
    title: "BORDERLANDS",
    year: "2024",
    image: "/Re2.jpg.jpeg", // Sci-fi/post-apocalyptic
    logoText: "Lionsgate",
    description: "Video game adaptation featuring Kevin Hart as Roland",
  },
  {
    id: "4",
    title: "THE SECRET LIFE OF PETS",
    year: "2016-2019",
    image: "/Re4.jpg.jpeg", // Animated/colorful
    logoText: "Illumination",
    description: "Voice of Snowball - Kevin Hart's iconic animated role",
  },
  {
    id: "5",
    title: "JUMANJI: WELCOME TO THE JUNGLE",
    year: "2017-2019",
    image: "/Re6.jpg.jpeg", // Jungle/adventure
    logoText: "Sony Pictures",
    description: "Blockbuster franchise starring Kevin Hart as Franklin 'Mouse' Finbar",
  },
  {
    id: "6",
    title: "WHAT NOW? TOUR",
    year: "2016",
    image: "/Re5.png", // Concert/stadium
    logoText: "Live Nation",
    description: "Record-breaking stand-up comedy tour sold out stadiums worldwide",
  },
];

export const STATS = [
  {
    id: "01",
    value: "$4.5B+",
    title: "Global Box Office",
    description: "Kevin Hart's films have grossed over $4.5 billion worldwide across 50+ successful productions.",
    type: "projects"
  },
  {
    id: "02",
    value: "100M+",
    title: "Global Audience Reach",
    description: "Over 100 million followers across social media and sold-out arenas worldwide.",
    type: "satisfaction"
  }
];