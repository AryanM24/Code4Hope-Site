import type { RefObject } from "react"

export type Section = {
  id: string
  ref: RefObject<HTMLElement>
}

export type NavItem = {
  id: string
  label: string
  ref: RefObject<HTMLElement>
}

export type Skill = {
  skill: string
  level: number
}

export type TimelineEntry = {
  title: string
  subtitle: string
  period: string
  description: string
}

export type Project = {
  title: string
  category: string
  image: string
  description: string
}

export type ContactInfo = {
  title: string
  value: string
  icon: any
}

