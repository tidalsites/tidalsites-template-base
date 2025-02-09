import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-alt": "var(--background-alt)",
        accent: "#00838f",
        "fg-alt": "var(--foreground-alt)",
      },
      margin: {
        nav: "var(--navbar-height)",
      },
      padding: {
        nav: "var(--navbar-height)",
      },
    },
  },
  plugins: [],
} satisfies Config;
