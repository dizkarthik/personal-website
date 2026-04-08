import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 24px 60px rgba(37, 32, 24, 0.08)",
        button: "0 4px 0 #1a3a0d",
        outlineButton: "0 4px 0 rgba(0, 0, 0, 0.15)",
      },
      colors: {
        canvas: "#fffaf1",
        ink: "#212329",
        copy: "#383b36",
        moss: "#5a8f22",
        olive: "#5a8f22",
        oliveDark: "#1a3a0d",
        line: "#f0dbb1",
        card: "#fffcf6",
        cardTint: "#fffefb",
      },
      borderRadius: {
        xl2: "2rem",
      },
      fontFamily: {
        sans: [
          "Figtree",
          "Avenir Next",
          "Avenir",
          "Segoe UI",
          "Helvetica Neue",
          "sans-serif",
        ],
        serif: [
          "DM Serif Text",
          "Iowan Old Style",
          "Palatino Linotype",
          "Book Antiqua",
          "Georgia",
          "serif",
        ],
      },
      maxWidth: {
        content: "70rem",
      },
    },
  },
  plugins: [],
};

export default config;
