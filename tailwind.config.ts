import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        canvas: "hsl(var(--canvas))",
        surface: "hsl(var(--surface))",
        "surface-soft": "hsl(var(--surface-soft))",
        hairline: "hsl(var(--hairline))",
        "hairline-soft": "hsl(var(--hairline-soft))",
        ink: "hsl(var(--ink))",
        "ink-strong": "hsl(var(--ink-strong))",
        charcoal: "hsl(var(--charcoal))",
        slate: "hsl(var(--slate))",
        steel: "hsl(var(--steel))",
        stone: "hsl(var(--stone))",
        "brand-coral": "hsl(var(--brand-coral))",
        "brand-magenta": "hsl(var(--brand-magenta))",
        "brand-blue": "hsl(var(--brand-blue))",
        "brand-blue-deep": "hsl(var(--brand-blue-deep))",
        "brand-blue-700": "hsl(var(--brand-blue-700))",
        "brand-cyan": "hsl(var(--brand-cyan))",
        "brand-blue-200": "hsl(var(--brand-blue-200))",
        "brand-purple": "hsl(var(--brand-purple))",
        "success-bg": "hsl(var(--success-bg))",
        "success-text": "hsl(var(--success-text))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        hero: "32px",
        full: "9999px",
      },
      boxShadow: {
        subtle: "rgba(0, 0, 0, 0.04) 0px 1px 2px 0px",
        card: "rgba(0, 0, 0, 0.08) 0px 4px 6px 0px",
        atmospheric: "rgba(0, 0, 0, 0.08) 0px 0px 22px 0px",
        modal: "rgba(36, 36, 36, 0.08) 0px 12px 16px -4px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/line-clamp")],
} satisfies Config

export default config
