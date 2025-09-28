"use client";

import { Suspense } from "react";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react"; // Added ExternalLink icon

import impactX from "@/public/ImpactX (1).png";
import c4h2025 from "@/public/c4h2025.png";
// --- DATA POPULATED WITH ACCURATE, DETAILED CONTENT ---
const events = [
  {
    id: "impactx-25",
    name: "ImpactX'25",
    status: "Upcoming",
    startDate: "2025-12-05",
    endDate: "2025-12-07",
    tagline: "Building on our success, innovating for tomorrow!",
    cardDescription: "The highly anticipated second edition of our flagship hackathon, bringing together young innovators to tackle global challenges with technology.",
    logo: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/071/021/datas/medium_square.png?height=400&width=400",
    fullDescription: "Following the tremendous success of ImpactX'24, we're excited to announce ImpactX'25! This year's hackathon will once again challenge participants from around the world to build technology that addresses key social issues. Building on the foundation of our debut event, we're expanding our reach and impact, providing even more opportunities for young innovators to create meaningful solutions. Stay tuned for more details about prizes, judges, and registration!",
    prizes: [
        { tier: "🏆 1st Best Overall Hack", value: "The best overall hack submitted to ImpactX 2025." },
        { tier: "🥈 2nd Best Overall Hack", value: "The second best overall hack submitted to ImpactX 2025." },
        { tier: "🥉 3rd Best Overall Hack", value: "The third best overall hack submitted to ImpactX 2025." },
        { tier: "🌱 Sustainability Track Prize", value: "The best project submitted for the Sustainability Track." },
        { tier: "🧑‍🏫 Education Track Prize", value: "The best project submitted for the Education Track." },
        { tier: "💊 Health and Wellness Prize", value: "The best project submitted for the Health and Wellness Track." },
    ],
    sponsors: [
        { name: "AidSnap", logo: "https://www.aidsnap.com/logo2.png?height=32&width=120&text=AidSnap+Logo" },
    ],
    links: [
        { name: "Register Now", url: "https://forms.gle/7u54tvfrMfr6kvvc8", type: "primary" as const },
        { name: "Join Discord", url: "https://discord.gg/hu8e25c6cy", type: "primary" as const },
        { name: "Learn More", url: "https://impactx2025.devpost.com/", type: "secondary" as const },
    ],
    faq: [
        { question: "When will registration open?", answer: "Registration details will be announced soon. Join our Discord for the latest updates!" },
        { question: "Will this event be virtual?", answer: "Yes, ImpactX'25 will be a fully remote, virtual hackathon accessible to participants worldwide." },
        { question: "What tracks will be available?", answer: "We'll have multiple tracks including Sustainability, Education, Health and Wellness, and more to be announced." },
    ],
  },
  {
    id: "c4h-2026",
    name: "Code4Hope Hackathon 2026",
    status: "Upcoming",
    startDate: "2026-07-15",
    endDate: "2026-07-17",
    tagline: "Code for Tomorrow. Build for Hope.",
    cardDescription: "The next iteration of our flagship Code4Hope hackathon, empowering young innovators to create technology solutions for global challenges.",
    logo: "placeholder.svg",
    fullDescription: "Building on the tremendous success of Code4Hope 2025, we're excited to announce Code4Hope Hackathon 2026! Following our proven format of empowering high school students to tackle real-world challenges through innovative technology solutions, this year's event promises to be bigger and better than ever. Participants will work on meaningful projects across multiple tracks, with mentorship from industry professionals and the opportunity to make a real impact. Stay tuned for more details about format, prizes, and registration!",
    prizes: [
        { tier: "🏆 1st Place", value: "To be announced - stay tuned for exciting prizes!" },
        { tier: "🥈 2nd Place", value: "To be announced - stay tuned for exciting prizes!" },
        { tier: "🥉 3rd Place", value: "To be announced - stay tuned for exciting prizes!" },
    ],
    sponsors: [
      { name: "YRI Science", logo: "https://www.yriscience.com/logo.png" },
    ],
    links: [
        { name: "Event Website", url: "https://hack.code4hope.net", type: "primary" as const },
        { name: "Join Discord", url: "https://discord.gg/hu8e25c6cy", type: "primary" as const },
    ],
    faq: [
        { question: "When will registration open?", answer: "Registration details will be announced soon. Visit our website and join our Discord for the latest updates!" },
        { question: "Who can participate?", answer: "Details about eligibility will be announced closer to the event date." },
        { question: "What format will the event follow?", answer: "Event format details will be shared as we get closer to the hackathon. Follow our updates for more information!" },
    ],
  },
  {
    id: "c4h-2025",
    name: "Code4Hope Hackathon 2025",
    status: "Completed",
    rounds: [
      { name: "Round 1 (Online)", startDate: "2025-06-27", endDate: "2025-06-29" },
      { name: "Round 2 (In-Person)", startDate: "2025-07-10", endDate: "2025-07-10" },
    ],
    tagline: "Build for Change. Shape Tomorrow.",
    cardDescription: "A hybrid two-round hackathon where high schoolers solved real-world challenges for fictional companies involving 4 global challenge tracks: sustainability, health, education, and finance.",
    logo: c4h2025,
    fullDescription: "Code4Hope 2025 was our first-ever hybrid hackathon, hosted by Code4Hope—a non-profit dedicated to empowering young innovators to tackle global challenges through technology. The event unfolded in two rounds: Round 1 was a 3-day virtual hackathon from June 27–29, 2025, where all registered teams competed remotely. The top 12 teams then advanced to Round 2, an exclusive in-person finals on July 10 at the Microsoft Office in Times Square, NYC, where finalists pitched their projects live to a panel of expert judges. Each team was assigned a fictional company and tasked with building a solution within one of four global tracks: sustainability, health, education, or finance. Throughout both rounds, participants gained access to mentorship and workshops from industry professionals. The event was a tremendous success in fostering innovation, collaboration, and real impact.",
    prizes: [
      { tier: "🏆 1st Place (Round 2)", value: "Beats Studio Buds Plus (4), 1 year Nord Security Bundle (4), Flatlogic AI Generator (4)" },
      { tier: "🥈 2nd Place (Round 2)", value: "$25 Amazon Gift Card (4), 1 year Nord Security Bundle (4)" },
      { tier: "🥉 3rd Place (Round 2)", value: "$15 Amazon Gift Card (4), AOPS Coupons (4)" },
      { tier: "🎆 Round 1: Top 15 Finalists", value: "The 15 teams that advanced to Round 2 of Code4Hope 2025" },
    ],
    judges: [
      { name: "Rajesh Mittal", title: "Customer Success Leader at Microsoft", image: "https://d112y698adiu2z.cloudfront.net/photos/production/judge_photos/003/226/841/datas/large.png" },
      { name: "Harpreet Kaur Chawla", title: "Senior Software Engineer at Amazon", image: "https://d2dmyh35ffsxbl.cloudfront.net/assets/defaults/no-avatar-100-b164b29ca37cbce6b6dbcf4d61d40ba7a3081dfd121a32e2a773eb8f018f0a1f.png" },
      { name: "Nitin Kumar", title: "Director of Data Science at Marriott International", image: "https://d112y698adiu2z.cloudfront.net/photos/production/judge_photos/003/486/971/datas/large.png" },
      { name: "Vipin Kataria", title: "Lead Architect at Picarro", image: "https://lh3.googleusercontent.com/a/ACg8ocJ6BUj03xe-PuFJUuL3HIMkqLOc4jUYhm_EDnrWryadE-onCZzM=s96-c?type=normal" },
      { name: "Ahmed Ibrahim", title: "Technical Staff at OpenAI", image: "https://media.licdn.com/dms/image/v2/C5603AQEJctR3Fg0bEg/profile-displaypho" },
      { name: "Louis Demeslay", title: "CTO at Zealy", image: "https://d112y698adiu2z.cloudfront.net/photos/production/judge_photos/003/521/315/datas/large.png" },
      { name: "Anand Desai", title: "Senior Software Engineer at Microsoft", image: "https://d112y698adiu2z.cloudfront.net/photos/production/judge_photos/003/488/497/datas/large.png" },
      { name: "Prankur Gupta", title: "Software Engineer at Meta", image: "https://d112y698adiu2z.cloudfront.net/photos/production/judge_photos/003/486/972/datas/large.png" },
      { name: "Sakshi Gupta", title: "Software Engineer at Harvey AI", image: "https://d112y698adiu2z.cloudfront.net/photos/production/judge_photos/003/486/973/datas/large.png" },
      { name: "Sachin Telalwar", title: "Senior Software Engineer at Zocdoc", image: "https://d112y698adiu2z.cloudfront.net/photos/production/judge_photos/003/511/029/datas/large.png" },
      { name: "Shaghayegh Moradirad", title: "Software Engineer at LinkedIn", image: "https://d112y698adiu2z.cloudfront.net/photos/production/judge_photos/003/517/669/datas/large.png" },
    ],
    sponsors: [
        { name: "AOPS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXGyPxZeamAT_wi52xpGLJIlZnkIFCTSO0A&s" },
        { name: "Gradescout", logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHUzfo8Dps0LQ/company-logo_200_200/company-logo_200_200/0/1673745814175?e=2147483647&v=beta&t=6RQfGMfn-iIs0QocOv_TYlpHQM8LmyZBN03OMeJx-Kc" },
        { name: "Nord Security", logo: "https://ml-eu.globenewswire.com/Resource/Download/1b17f25b-6152-4d92-9b81-8ef247a4c54c" },
        { name: "Flatlogc", logo: "https://avatars.githubusercontent.com/u/8533408?s=280&v=4" },
        { name: "The Python Lab", logo: "https://s3.amazonaws.com/challengepost/sponsors/logos/000/038/291/highres/DALL%C2%B7E_2024-12-04_16.13.32_-_A_modern_and_professional_logo_for_'The_Python_Lab'_incorporating_the_Python_logo_%28a_snake_coiled_into_the_shape_of_a_'P'%29._The_design_features_a_slee.png" },
    ],
    links: [
        { name: "View Results", url: "https://docs.google.com/presentation/d/1VByYEq0a-eG6OrIcFkCtOJUKHSuLTiW9lv49HT0WaqI/edit?usp=sharing", type: "primary" as const },
        { name: "Project Gallery", url: "https://impactx-code4hope.devpost.com/project-gallery", type: "primary" as const },
        { name: "Event Page", url: "https://impactx-code4hope.devpost.com/", type: "secondary" as const },
    ],
    faq: [
        { question: "Who was eligible to participate?", answer: "All current high school students from any country were eligible." },
        { question: "Was this event free?", answer: "There was a five dollar registration fee which could be paid through the donation portal." },
        { question: "What was the team size?", answer: "Teams could be formed of up to 4 members." },
    ],
    videoEmbed: "https://www.youtube.com/embed/eopsGRpNrVY",
  },
  {
    id: "impactx-24",
    name: "ImpactX'24",
    status: "Completed",
    startDate: "2024-12-13",
    endDate: "2024-12-15",
    tagline: "Our debut hackathon for social good!",
    cardDescription: "C4H's debut hackathon, with over 130+ participants and $25k+ in prizes. A huge success!",
    logo: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/071/021/datas/medium_square.png?height=400&width=400",
    fullDescription: "Hosted in December of 2024, ImpactX was Code4Hope's debut virtual hackathon. The event challenged over 130 participants from around the world to build technology that addressed key social issues. With over $25,000 in prizes from a variety of tech industry sponsors, it set a high bar for our future events and demonstrated the power of coding for social impact.",
    prizes: [
        { tier: "🏆 1st Best Overall Hack", value: "The best overall hack submitted to ImpactX 2024." },
        { tier: "🥈 2nd Best Overall Hack", value: "The second best overall hack submitted to ImpactX 2024." },
        { tier: "🥉 3rd Best Overall Hack", value: "The third best overall hack submitted to ImpactX 2024." },
        { tier: "🌱 Sustainability Track Prize", value: "The best project submitted for the Sustainability Track." },
        { tier: "🧑‍🏫 Education Track Prize", value: "The best project submitted for the Education Track." },
        { tier: "💊 Health and Wellness Prize", value: "The best project submitted for the Health and Wellness Track." },
        { tier: "✨ Public Choice Award", value: "After submissions  ended, participants voted on their favorite project through a google form sent out via email." },
    ],
    sponsors: [],
    links: [
        { name: "View Results", url: "https://docs.google.com/presentation/d/1VByYEq0a-eG6OrIcFkCtOJUKHSuLTiW9lv49HT0WaqI/edit?usp=sharing", type: "primary" as const },
        { name: "Project Gallery", url: "https://impactx-code4hope.devpost.com/project-gallery", type: "primary" as const },
        { name: "Event Page", url: "https://impactx-code4hope.devpost.com/", type: "secondary" as const },
    ],
    faq: [
        { question: "Where were the projects submitted?", answer: "All projects were submitted through our Devpost platform." },
        { question: "Was this event virtual?", answer: "Yes, ImpactX'24 was a fully remote, virtual hackathon." },
    ],
    videoEmbed: "https://www.youtube.com/embed/EB9dBGkqFoc",
  },
];
// --- Helper to format dates ---
function formatEventDate(start: string, end: string) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    
    // If it's a single day event
    if (start === end) {
        const month = startDate.toLocaleString('default', { month: 'short' });
        return `${month} ${startDate.getUTCDate()}, ${startDate.getFullYear()}`;
    }
    
    // Multi-day event
    const startMonth = startDate.toLocaleString('default', { month: 'short' });
    const endMonth = endDate.toLocaleString('default', { month: 'short' });
    if (startMonth === endMonth) {
        return `${startMonth} ${startDate.getUTCDate()} - ${endDate.getUTCDate()}, ${endDate.getFullYear()}`;
    } else {
        return `${startMonth} ${startDate.getUTCDate()} - ${endMonth} ${endDate.getUTCDate()}, ${endDate.getFullYear()}`;
    }
}

// Helper for multi-round events
function formatRounds(rounds: { name: string; startDate: string; endDate: string }[]) {
  return (
    <div className="space-y-1">
      {rounds.map((r: { name: string; startDate: string; endDate: string }) => (
        <div key={r.name} className="text-sm">
          <span className="font-semibold text-primary">{r.name}:</span>{" "}
          <span className="text-primary">{formatEventDate(r.startDate, r.endDate)}</span>
        </div>
      ))}
    </div>
  );
}

// --- Reusable Event Card Component ---
interface EventType {
  id: string;
  name: string;
  status: string;
  startDate?: string;
  endDate?: string;
  tagline: string;
  cardDescription: string;
  logo: any;
  fullDescription: string;
  prizes: { tier: string; value: string }[];
  judges?: { name: string; title: string; image: string }[];
  schedule?: { time: string; event: string }[];
  sponsors: { name: string; logo: string }[];
  links?: { name: string; url: string; type: 'primary' | 'secondary' }[];
  faq: { question: string; answer: string }[];
  rounds?: { name: string; startDate: string; endDate: string }[];
  videoEmbed?: string;
}

function EventCard({ event, onLearnMore }: { event: EventType; onLearnMore: (event: EventType) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 w-full md:w-52 h-48 md:h-52 relative bg-gray-50 flex items-center justify-center">
          <Image 
            src={event.logo} 
            alt={`${event.name} logo`} 
            width={200}
            height={200}
            className="object-contain max-w-full max-h-full p-4"
          />
        </div>
        <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-2">{event.name}</h3>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap self-start sm:self-auto ${
                event.status === "Upcoming" 
                  ? "bg-primary/10 text-primary" 
                  : "bg-gray-100 text-gray-600"
              }`}>
                {event.status}
              </span>
            </div>
            
            <div className="text-sm">
              {event.rounds ? (
                formatRounds(event.rounds)
              ) : (
                event.startDate && event.endDate && (
                  <p className="font-semibold text-primary">{formatEventDate(event.startDate, event.endDate)}</p>
                )
              )}
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{event.cardDescription}</p>
          </div>
          
          <div className="mt-4 pt-4">
            <Button 
              onClick={() => onLearnMore(event)}
              className="w-full sm:w-auto text-sm"
              size="sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Detailed Event Modal Component ---
function EventDetailModal({ event, onClose }: { event: EventType | null; onClose: () => void }) {
    if (!event) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-stretch p-2 md:p-4 overflow-y-auto"
            style={{ maxHeight: '100vh' }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-lg md:rounded-xl shadow-2xl w-full max-w-4xl flex flex-col max-h-full overflow-hidden relative"
                style={{ maxHeight: '100%', minHeight: 0 }}
                onClick={(e) => e.stopPropagation()} 
            >
                {/* Fixed Header */}
                <div className="sticky top-0 bg-white p-4 md:p-6 border-b flex justify-between items-start">
                    <div className="flex-1 mr-4">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 pr-8">{event.name}</h2>
                        <div className="text-sm md:text-base">
                            {event.rounds ? (
                                formatRounds(event.rounds)
                            ) : (
                                event.startDate && event.endDate && (
                                    <p className="text-primary font-semibold">{formatEventDate(event.startDate, event.endDate)}</p>
                                )
                            )}
                        </div>
                        <p className="text-gray-600 mt-2 text-sm md:text-base">{event.tagline}</p>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="flex-shrink-0 text-gray-600 hover:text-gray-800 p-1"
                    >
                        <X size={20} className="md:w-6 md:h-6" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto min-h-0">
                    <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Video Embed Section */}
                            {event.videoEmbed && (
                                <section>
                                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                        <iframe
                                            src={event.videoEmbed}
                                            title={`${event.name} Video`}
                                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        />
                                    </div>
                                </section>
                            )}

                            <section>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold border-l-4 border-primary pl-4 mb-4">About</h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{event.fullDescription}</p>
                            </section>

                            {/* Links Section */}
                            {event.links && event.links.length > 0 && (
                                <section>
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold border-l-4 border-primary pl-4 mb-4">Quick Links</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {event.links.map((link) => (
                                            <a
                                                key={link.name}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:scale-[1.02] text-sm md:text-base ${
                                                    link.type === 'primary' 
                                                        ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                                                        : 'bg-gray-100 hover:bg-gray-100/80 text-gray-800'
                                                }`}
                                            >
                                                <span className="font-medium">{link.name}</span>
                                                <ExternalLink size={16} className="flex-shrink-0" />
                                            </a>
                                        ))}
                                    </div>
                                </section>
                            )}
                            
                            {event.schedule && event.schedule.length > 0 && (
                                <section>
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold border-l-4 border-primary pl-4 mb-4">Schedule</h3>
                                    <div className="space-y-3">
                                        {(event.schedule ?? []).map((item: { time: string; event: string }) => (
                                            <div key={item.event} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                                                <div className="font-semibold text-primary text-sm sm:min-w-[140px]">{item.time}</div>
                                                <div className="text-sm sm:text-base">{item.event}</div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                            
                            {event.faq?.length > 0 && (
                                <section>
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold border-l-4 border-primary pl-4 mb-4">FAQ</h3>
                                    <div className="space-y-4">
                                        {event.faq.map((item: { question: string; answer: string }) => (
                                            <div key={item.question} className="space-y-2">
                                                <h4 className="font-semibold text-sm md:text-base">{item.question}</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                        
                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-4 md:space-y-6">
                            {event.prizes?.length > 0 && (
                                <section className="bg-gray-50 p-4 rounded-lg border">
                                    <h3 className="text-base md:text-lg font-bold mb-3">Prizes</h3>
                                    <div className="space-y-3">
                                        {event.prizes.map((p: { tier: string; value: string }) => (
                                            <div key={p.tier} className="space-y-1">
                                                <div className="font-semibold text-sm">{p.tier}</div>
                                                <div className="text-gray-600 text-xs leading-relaxed">{p.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                            
                            {event.judges && event.judges.length > 0 && (
                                <section>
                                    <h3 className="text-base md:text-lg font-bold mb-4">Judges</h3>
                                    <div className="space-y-3 md:space-y-4">
                                        {(event.judges ?? []).map((j: { name: string; title: string; image: string }) => (
                                            <div key={j.name} className="flex items-center gap-3">
                                                <Image 
                                                    src={j.image} 
                                                    alt={j.name} 
                                                    width={36} 
                                                    height={36} 
                                                    className="rounded-full flex-shrink-0 md:w-10 md:h-10" 
                                                />
                                                <div className="min-w-0 flex-1">
                                                    <p className="font-semibold text-xs md:text-sm truncate">{j.name}</p>
                                                    <p className="text-xs text-gray-600 leading-tight">{j.title}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                            
                            {event.sponsors?.length > 0 && (
                                <section>
                                    <h3 className="text-base md:text-lg font-bold mb-4">Sponsors</h3>
                                    <div className="flex flex-wrap gap-3 md:gap-4 items-center">
                                        {event.sponsors.map((s: { name: string; logo: string }) => (
                                            <div key={s.name} className="relative w-8 h-8 md:w-10 md:h-10">
                                                <Image 
                                                    src={s.logo} 
                                                    alt={s.name} 
                                                    fill
                                                    title={s.name} 
                                                    className="object-contain"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function EventsPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const eventTypes = useMemo(() => {
    const types = new Set(events.map(event => event.name.replace(/'\d{2}$| \d{4}$/, '')));
    return ["All", "ImpactX", ...Array.from(types).filter(t => t !== "ImpactX")];
  }, []);

  const filteredEvents = useMemo(() => {
    let result = events;
    
    // Filter by tab
    if (activeTab !== "All") {
      result = result.filter(event => event.name.includes(activeTab));
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (event) =>
          event.name.toLowerCase().includes(query) ||
          event.tagline.toLowerCase().includes(query) ||
          event.cardDescription.toLowerCase().includes(query) ||
          event.fullDescription.toLowerCase().includes(query)
      );
    }
    
    return result;
  }, [activeTab, searchQuery]);

  // Handle URL-based modal opening
  useEffect(() => {
    const eventId = searchParams.get('event');
    if (eventId) {
      const event = events.find(e => e.id === eventId);
      if (event) {
        setSelectedEvent(event);
      }
    } else {
      setSelectedEvent(null);
    }
  }, [searchParams]);

  // Handle opening modal with URL update
  const handleLearnMore = (event: EventType) => {
    const url = new URL(window.location.href);
    url.searchParams.set('event', event.id);
    window.history.pushState({}, '', url.toString());
    setSelectedEvent(event);
  };

  // Handle closing modal with URL cleanup
  const handleCloseModal = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('event');
    window.history.pushState({}, '', url.toString());
    setSelectedEvent(null);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const eventId = new URLSearchParams(window.location.search).get('event');
      if (eventId) {
        const event = events.find(e => e.id === eventId);
        setSelectedEvent(event || null);
      } else {
        setSelectedEvent(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <>
      <AnimatePresence>
        {selectedEvent && <EventDetailModal event={selectedEvent} onClose={handleCloseModal} />}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="container mx-auto px-4 text-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">Events</h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Here is where you can find info about our previous and upcoming events!
              </p>
            </motion.div>
          </section>
          
          {/* Events Content */}
          <ScrollReveal>
            <section className="py-8 md:py-12">
              <div className="container mx-auto px-4">
                {/* Controls Section */}
                <div className="max-w-4xl mx-auto mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-center md:items-center space-y-4 md:space-y-0">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
                      {eventTypes.map(type => (
                        <button
                          key={type}
                          onClick={() => setActiveTab(type)}
                          className={`px-3 md:px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 flex-shrink-0 ${
                            activeTab === type 
                              ? "bg-primary text-primary-foreground shadow-md" 
                              : "text-gray-600 hover:bg-white/50 hover:text-gray-800"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    
                    {/* Search Bar */}
                    <div className="relative w-full md:w-auto md:min-w-[250px]">
                      <input
                        type="text"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 border rounded-full w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <svg
                        className="absolute left-3 top-2.5 h-4 w-4 md:h-5 md:w-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Events Grid */}
                {filteredEvents.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-800">No events found</h3>
                    <p className="mt-1 text-gray-600">Try adjusting your search or filter criteria.</p>
                    <button
                      onClick={() => {
                        setActiveTab("All")
                        setSearchQuery("")
                      }}
                      className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
                    {filteredEvents.map(event => (
                      <EventCard 
                        key={event.id} 
                        event={event} 
                        onLearnMore={handleLearnMore} 
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </ScrollReveal>
        </main>
      </div>
    </>
  );
}

export default function EventsPage() {
  // This remains a server component
  return (
    <Suspense>
      <EventsPageContent />
    </Suspense>
  );
}
