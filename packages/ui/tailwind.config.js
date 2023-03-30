/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        danger: "var(--color-danger)",
        warning: "var(--color-warning)",
        info: "var(--color-info)",
        background: "var(--color-background)",
        white: "var(--color-white)",
        black: "var(--color-black)",
        overlay: "var(--color-overlay)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
