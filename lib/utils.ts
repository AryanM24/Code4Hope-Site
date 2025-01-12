import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
declare  global {
  var sponsors: [];
}
globalThis.sponsors = [
  {
    name: "Nord Security",
    description: "World-leading cybersecurity tools for people and global businesses.",
    logo: "https://brandergroup.net/wp-content/uploads/2023/12/ISP-Carriers-Nord-1200x900.png",
    devpostLink: "https://nordsecurity.com/",
  },
  {
    name: "Flatlogic",
    description: "Business Software: AI Solutions at Speed",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/892/highres/Logo_%281%29.png",
    devpostLink: "https://flatlogic.com/",
  },
  {
    name: "Desmos",
    description: "",
    logo: "https://cdn.mos.cms.futurecdn.net/mfRWxBbBCSEL9rtoYmxDiR.jpg",
    devpostLink: "https://www.desmos.com/",
  },
  {
    name: "Refact.ai",
    description: "",
    logo: "https://web-summit-avenger.imgix.net/production/logos/original/7a7b2abcb3b7e15a1c643880b90cc2beb1ab68be.png?ixlib=rb-3.4.0&auto=format&fit=fill&fill-color=white",
    devpostLink: "https://refact.ai/?utm_source=megahack&utm_medium=website&utm_campaign=partnership",
  },
  {
    name: "Balsamiq",
    description: "",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/835/highres/balsamiq-1690452164916-2x.jpg",
    devpostLink: "https://balsamiq.com/",
  },{
    name: "PrismView",
    description: "",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/496/highres/PrismView.png",
    devpostLink: "https://www.prismview.ai/",
  },{
    name: "CampusCrew",
    description: "",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/497/highres/CampusCrew.png",
    devpostLink: "https://open.spotify.com/show/3XUlgjWF9rx9WwsLVRn32j?si=ff2b81eb52f44ff9",
  },
  {
    name: "Interview Buddy",
    description: "",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/935/highres/g30.png",
    devpostLink: "https://interviewbuddy.net/",
  },{
    name: "The Python Lab",
    description: "",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/038/291/highres/DALL%C2%B7E_2024-12-04_16.13.32_-_A_modern_and_professional_logo_for_'The_Python_Lab'_incorporating_the_Python_logo_%28a_snake_coiled_into_the_shape_of_a_'P'%29._The_design_features_a_slee.png",
    devpostLink: "https://aryanm24.github.io/The-Python-Lab/",
  },
  {
    name: ".XYZ",
    description: "",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/636/highres/xyz-logo-color.png",
    devpostLink: "https://gen.xyz/",
  },
];