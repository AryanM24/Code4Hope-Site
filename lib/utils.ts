import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Remote images are served straight from their origin rather than through the
// Next image optimizer: several of the third-party hosts we use block
// server-side fetches, which would turn those logos into broken images.
export function isRemoteImage(src?: unknown) {
  return typeof src === "string" && /^https?:\/\//.test(src)
}
declare  global {
  var sponsors: Array<{
    name: string;
    description: string;
    logo: string;
    devpostLink: string;
    invertColors?: boolean;
  }>;
}
globalThis.sponsors = [
  {
    name: "Drift",
    description: "A calm personal planning app that brings your calendar, email, and tasks together into one clear view of what's next.",
    logo: "/drift.png",
    devpostLink: "https://usedrift.us",
  },
  {
    name: "Gradescout",
    description: "GradeScout is a student-focused platform that enhances K–12 grade portals by offering real-time grade notifications, GPA calculations, and predictive tools within a sleek, user-friendly interface. ",
    logo: "https://digitalpress.fra1.cdn.digitaloceanspaces.com/4at5wal/2023/06/GradeScout-Logo.png",
    devpostLink: "https://gradescout.live/welcome",
  },
  {
    name: "AidSnap",
    description: "A personalized, AI-powered first aid assistant with agentic AI that provides instant, life-saving emergency guidance when every second counts.",
    logo: "/AidSnap.png",
    devpostLink: "https://aidsnap.com",
  },
  {
  name: "YRI Fellowship",
  description: "A research and innovation fellowship that empowers high school students to explore STEM through hands-on projects and mentorship.",
  logo: "https://hack.code4hope.net/yri-white-horizontal.png",
  devpostLink: "https://yriscience.com",
  invertColors: true,
  },
  {
    name: "Koda Finance",
    description: "An AI-powered personal finance tracker that automates budgeting, spending insights, and saving recommendations, built for Gen Z and students.",
    logo: "/kodafinance.png",
    devpostLink: "https://kodafinance.com",
  },
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
    name: ".XYZ",
    description: "A leading domain provider offering modern and innovative domain names for developers and businesses.",
    logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/037/636/highres/xyz-logo-color.png",
    devpostLink: "https://gen.xyz/",
  },
  {
    name: "Codecrafters.io",
    description: "Hands-on coding challenges where you build real-world systems from scratch, like Docker, Git, or Redis.",
    logo: "/codecrafters.png",
    devpostLink: "https://codecrafters.io/",
  },
];
