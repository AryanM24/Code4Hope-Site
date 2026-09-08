import type { Winner } from "@/components/winners-slider-clean";
import c4h2025 from "@/public/c4h2025.png";
import type { StaticImageData } from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface EventData {
  image: string | StaticImageData;
  title: string;
  /** Human-readable date shown on the card. */
  date: string;
  /** ISO start date (YYYY-MM-DD). Drives which events the homepage shows. */
  startDate: string;
  location: string;
  description: string;
  link: string;
  isOver: boolean;
}

export const previousWinnersData: Winner[] = [
  {
    id: 1,
    name: "Ryder H., Randy T.",
    projectName: "LingoBuddy",
    event: "Code4Hope '25",
    year: "2025",
    awardName: "1st Place Winner",
    description: "An innovative language learning platform that connects users with native speakers for personalized conversational practice and cultural exchange.",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/solution_photos/003/546/964/datas/xlarge.png",
    devpostLink: "https://devpost.com/software/lingobuddy-zy8v06",
  },
  {
    id: 2,
    name: "Neil M., Georgiy D., Lakshya D., Advik V.",
    projectName: "ClimaGrid",
    event: "Code4Hope '25",
    year: "2025",
    awardName: "2nd Place Winner",
    description: "A comprehensive climate monitoring and prediction system that helps communities prepare for and adapt to climate change impacts.",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/solution_photos/003/552/901/datas/xlarge.png",
    devpostLink: "https://www.youtube.com/embed/3jUIG-Xd95I",
  },
  {
    id: 3,
    name: "Hritvik S., Vedo B., Varenya G., Rijul R.",
    projectName: "TheraBot",
    event: "Code4Hope '25",
    year: "2025",
    awardName: "3rd Place Winner",
    description: "An AI-powered therapeutic companion that provides mental health support and resources through conversational interfaces and personalized care plans.",
    image: "https://d112y698adiu2z.cloudfront.net/photos/production/solution_photos/003/556/730/datas/xlarge.png",
    devpostLink: "https://www.youtube.com/embed/FPXkf4AanCg",
  },
  {
    id: 4,
    name: "Vasil V., Crep V., Aleksandar H., Dimitar A.",
    projectName: "Quare AI",
    event: "ImpactX '24",
    year: "2024",
    awardName: "1st Place Overall",
    description: "An AI-powered tool that simplifies health decisions, empowers users with accurate insights, and bridges the gap between symptoms and professional care.",
    image: "/QuareAI.png",
    devpostLink: "https://devpost.com/software/quare-ai?_gl=1*1v3yyp9*_gcl_au*MTY0NTM5MTU2My4xNzQ0OTA2NjI0*_ga*MjA4MDkzMTE1NC4xNzMwNzk4NDkz*_ga_0YHJK3Y10M*czE3NDc5NTMzMzckbzE3OCRnMSR0MTc0Nzk1MzYxNCRqMCRsMCRoMA..",
  },
  {
    id: 5,
    name: "Malay P.",
    projectName: "CourseVerse",
    event: "ImpactX '24",
    year: "2024",
    awardName: "2nd Place Overall",
    description: "CourseVerse is a Flutter-based application that enables users to effortlessly create and share personalized courses by simply providing a title and description, making educational content creation accessible to all.",
    image: "/CourseVerse.png",
    devpostLink: "https://devpost.com/software/codeverse-d0z5sb?_gl=1*apqm0r*_gcl_au*MTY0NTM5MTU2My4xNzQ0OTA2NjI0*_ga*MjA4MDkzMTE1NC4xNzMwNzk4NDkz*_ga_0YHJK3Y10M*czE3NDc5NTMzMzckbzE3OCRnMSR0MTc0Nzk1NDEyNyRqMCRsMCRoMA..",
  },
  {
    id: 6,
    name: "Chanmin K., Chris S., Aspen K.",
    projectName: "Paywell",
    event: "ImpactX '24",
    year: "2024",
    awardName: "3rd Place Overall",
    description: "A comprehensive solution designed to help users reduce or eliminate medical debt through personalized financial assistance tools.",
    image: "/PayWell.png",
    devpostLink: "https://devpost.com/software/paywell",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/c4h@hackjps25/c4h@hackjps1.jpeg",
    alt: "Code4Hope Workshop at HackJPS",
    caption: "At JPS Robotics Team 2554's Annual Hackathon, HackJPS, we hosted a 30-minute lecture on turning hackathon projects into...",
  },
  {
    src: "/c4hxdivergent-workshop.JPG",
    alt: "\"Hack to Business\" Workshop at C4H x Divergent 2025",
    caption: "Our \"Hack to Business\" workshop returned for an encore after its debut at C4H'25...",
  },
  {
    src: "/angel@c4h.JPG",
    alt: "Angel Rodriguez at Code4Hope '25",
    caption: "College Professor and Microsoft Technology Strategist Abel Angel Rodriguez hosted a workshop on DevOps and Cloud Computing... ",
  },
  {
    src: "/participants1.JPG",
    alt: "A Room Full of Innovators",
    caption: "About 40 finalists joined us in-person and online for the second round of Code4Hope '25 (Code4Hope's 2025 STEM Hackathon), where they presented...",
  },
];

export const upcomingEvents: EventData[] = [
  {
    image: c4h2025,
    title: "Code4Hope '25",
    date: "June 27-29, 2025 and July 10, 2025",
    startDate: "2025-06-27",
    location: "Times Square, New York City, NY",
    description: "Structured similarly to many entrepreneurship competitions, in this two-round hackathon, participants will work with their teams to develop a solution to a critical issue of a fictional company of random assignment. Their solution will be within four global challenge tracks: sustainability, health, education, or finance.",
    link: "https://code4hope.net/events?event=c4h-2025",
    isOver: true,
  },
  {
    image: "/impactx25-thumbnail.png",
    title: "ImpactX '25",
    date: "Dec 5-7, 2025",
    startDate: "2025-12-05",
    location: "Virtual Event",
    description: "In the second annual ImpactX by Code4Hope, build projects for a better world by solving real-world problems\u2014whether they be health, wellness, and education\u2014where your ideas today shape a brighter, more sustainable tomorrow.",
    link: "https://impactx2025.devpost.com/",
    isOver: true,
  },
  {
    image: "/impactx26-cover.png",
    title: "ImpactX '26",
    date: "Dec 4-6, 2026",
    startDate: "2026-12-04",
    location: "Virtual Event",
    description: "The third annual ImpactX by Code4Hope. Build projects for a better world across sustainability, education, and health and wellness in a fully virtual weekend hackathon open to students worldwide.",
    link: "/events?event=impactx-26",
    isOver: false,
  },
];
