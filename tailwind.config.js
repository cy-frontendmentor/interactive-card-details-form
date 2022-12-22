/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1300px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-spaceGrotesk)"],
      },
      colors: {
        red: "hsl(0, 100%, 66%)",
        white: "hsl(0, 0%, 100%)",
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
        "linear-gradient-01": "hsl(249, 99%, 64%)",
        "linear-gradient-02": "hsl(278, 94%, 30%)",
      },
    },
  },
  plugins: [],
};
