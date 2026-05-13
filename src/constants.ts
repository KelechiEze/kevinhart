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
    image: "https://images.unsplash.com/photo-1501436513145-30f24e4f8bf8?q=80&w=2000&auto=format&fit=crop", // Comedy stage/audience
    logoText: "Netflix Original",
    description: "Netflix's biggest comedy roast event featuring Kevin Hart",
  },
  {
    id: "2",
    title: "LIFT",
    year: "2024",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=2000&auto=format&fit=crop", // Heist/action scene
    logoText: "Netflix",
    description: "Action heist thriller starring Kevin Hart",
  },
  {
    id: "3",
    title: "BORDERLANDS",
    year: "2024",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop", // Sci-fi/post-apocalyptic
    logoText: "Lionsgate",
    description: "Video game adaptation featuring Kevin Hart as Roland",
  },
  {
    id: "4",
    title: "THE SECRET LIFE OF PETS",
    year: "2016-2019",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=2000&auto=format&fit=crop", // Animated/colorful
    logoText: "Illumination",
    description: "Voice of Snowball - Kevin Hart's iconic animated role",
  },
  {
    id: "5",
    title: "JUMANJI: WELCOME TO THE JUNGLE",
    year: "2017-2019",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000&auto=format&fit=crop", // Jungle/adventure
    logoText: "Sony Pictures",
    description: "Blockbuster franchise starring Kevin Hart as Franklin 'Mouse' Finbar",
  },
  {
    id: "6",
    title: "WHAT NOW? TOUR",
    year: "2016",
    image: "https://images.unsplash.com/photo-1501436513145-30f24e4f8bf8?q=80&w=2000&auto=format&fit=crop", // Concert/stadium
    logoText: "Live Nation",
    description: "Record-breaking stand-up comedy tour sold out stadiums worldwide",
  },
];

export const STATS: Stat[] = [
  {
    id: "1",
    value: "$450M+",
    label: "01",
    description: "Box office revenue from film franchises",
  },
  {
    id: "2",
    value: "100M+",
    label: "02",
    description: "Social media followers across platforms",
  },
  {
    id: "3",
    value: "50+",
    label: "03",
    description: "Blockbuster films and counting",
  },
  {
    id: "4",
    value: "3x",
    label: "04",
    description: "Grammy Award nominations",
  },
];