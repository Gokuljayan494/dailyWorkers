/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "inter-regular": ["inter_regular", "sans-serif"],
        "inter-medium": ["inter_medium", "sans-serif"],
        "inter-semibold": ["inter_semibold", "sans-serif"],
        "inter-bold": ["inter_bold", "sans-serif"],
        "inter-light": ["inter_light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
