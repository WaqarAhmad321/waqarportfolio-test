import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xss: "380px",
        xs: "470px",
      },
      colors: {
        special: "rgb(44, 115, 248)",
        "heading-color": "#1A202C",
        "rich-black": "#001220",
        "pastel-red": "#FA7268",
        "dogwood-rose": "#C62368",
        "light-camrine-pink": "#EF5F67",
        "dark-tera-cota": "#E34C67",
        cherry: "#D53867",
      },
      keyframes: {
        updown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
      },
      animation: {
        updown: "updown 7s ease-in-out infinite",
      },
      backgroundImage: {
        "blob-image": "url('/background/blob-scene.svg')",
      },
      fontFamily: {
        barlow: ["var(--font-barlow)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
