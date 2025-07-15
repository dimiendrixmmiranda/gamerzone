import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        amarelo: "var(--amarelo)",
        ["azul-escuro"]: "var(--azul-escuro)",
        laranja: "var(--laranja)",
        preto: "var(--preto)",
      },
    },
    fontFamily: {
      primaria: ['var(--fonte-primaria)', 'sans-serif'],
      secundaria: ['var(--fonte-secundaria)', 'sans-serif'],
      cursiva: ['var(--fonte-cursiva)', 'sans-serif'],
    },
    screens: {
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
  },
  plugins: [],
} satisfies Config;
