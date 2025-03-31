import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
declare  global {
  var sponsors: Array<{
    name: string;
    description: string;
    logo: string;
    devpostLink: string;
  }>;
}
globalThis.sponsors = [
  {
    name: "NordVPN",
    description: "Protect your internet traffic with the world’s leading VPN service.",
    logo: "https://a.storyblok.com/f/157611/284x64/116a8617cc/nordvpn-logo.png/m/828x0/filters:quality(60):format(avif)",
    devpostLink: "https://nordvpn.com/hackathons",
  },
  {
    name: "NordPass",
    description: "Secure and simplify your passwords with NordPass, the password manager from Nord Security.",
    logo: "https://media.tekpon.com/2021/06/NordPass-logo.webp",
    devpostLink: "https://nordpass.com/",
  },
  {
    name: "Incogni",
    description: "Take control of your personal data and remove it from data brokers with Incogni.",
    logo: "https://www.security.org/app/uploads/2024/05/incogni-logo.png",
    devpostLink: "https://incogni.com/",
  },
  {
    name: "Saily",
    description: "An advanced AI-powered search tool designed to help businesses uncover insights from vast data sources.",
    logo: "https://www.monpetitforfait.com/wp-content/uploads/2024/04/saily-logo-black1.png",
    devpostLink: "https://saily.com/",
  },
  {
    name: "Flatlogic",
    description: "Business Software: AI Solutions at Speed.",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/892/highres/Logo_%281%29.png",
    devpostLink: "https://flatlogic.com/",
  },
  {
    name: "Desmos",
    description: "Powerful and interactive graphing calculator tools for students and educators.",
    logo: "https://cdn.mos.cms.futurecdn.net/mfRWxBbBCSEL9rtoYmxDiR.jpg",
    devpostLink: "https://www.desmos.com/",
  },
  {
    name: "Refact.ai",
    description: "AI-powered coding assistant that helps developers write better code faster.",
    logo: "https://web-summit-avenger.imgix.net/production/logos/original/7a7b2abcb3b7e15a1c643880b90cc2beb1ab68be.png?ixlib=rb-3.4.0&auto=format&fit=fill&fill-color=white",
    devpostLink: "https://refact.ai/?utm_source=megahack&utm_medium=website&utm_campaign=partnership",
  },
  {
    name: "Balsamiq",
    description: "A rapid wireframing tool that helps teams build great user interfaces.",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/835/highres/balsamiq-1690452164916-2x.jpg",
    devpostLink: "https://balsamiq.com/",
  },
  {
    name: "CampusCrew",
    description: "A student-driven podcast sharing insights on career growth and university life.",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/497/highres/CampusCrew.png",
    devpostLink: "https://open.spotify.com/show/3XUlgjWF9rx9WwsLVRn32j?si=ff2b81eb52f44ff9",
  },
  {
    name: "Interview Buddy",
    description: "A platform that offers mock interviews with experts to help candidates ace job interviews.",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/935/highres/g30.png",
    devpostLink: "https://interviewbuddy.net/",
  },
  {
    name: "The Python Lab",
    description: "A community-driven platform for Python learners, offering tutorials and projects.",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/038/291/highres/DALL%C2%B7E_2024-12-04_16.13.32_-_A_modern_and_professional_logo_for_'The_Python_Lab'_incorporating_the_Python_logo_%28a_snake_coiled_into_the_shape_of_a_'P'%29._The_design_features_a_slee.png",
    devpostLink: "https://aryanm24.github.io/The-Python-Lab/",
  },
  {
    name: ".XYZ",
    description: "A leading domain provider offering modern and innovative domain names for developers and businesses.",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/636/highres/xyz-logo-color.png",
    devpostLink: "https://gen.xyz/",
  },
];