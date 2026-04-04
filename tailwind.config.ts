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
        button: "0 4px 0 rgba(26, 58, 13, 1)",
        outlineButton: "0 4px 0 rgba(0, 0, 0, 0.12)",
      },
      colors: {
        canvas: "#fffaf1",
        ink: "#111111",
        moss: "#45720e",
        olive: "#3c7b1d",
        oliveDark: "#1a3a0d",
        line: "#e7dbc8",
        card: "#fffdf8",
        cardTint: "#fffefb",
      },
      borderRadius: {
        xl2: "2rem",
      },
      fontFamily: {
        sans: [
          "Avenir Next",
          "Avenir",
          "Segoe UI",
          "Helvetica Neue",
          "sans-serif",
        ],
        serif: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Book Antiqua",
          "Georgia",
          "serif",
        ],
      },
      maxWidth: {
        content: "75rem",
      },
    },
  },
  plugins: [],
};

export default config;
