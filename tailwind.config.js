/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      fontSize: {
        resText: "clamp(0.5rem, -0.0714rem + 1.1905vw, 1rem)",
        resTitle: "clamp(1rem, -.8571rem + 3.869vw, 3rem);",
      },
      screens: {
        xs: { max: "700px" }, // Custom max-width breakpoint
      },
    },
  },
  plugins: [],
};
