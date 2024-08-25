import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        grey: {
          100: '#141414',
          90: '#191919',
          80: '#1E1E1E',
          70: '#232323',
          60: '#282828',
          50: '#2D2D2D',
          40: '#323232',
          30: '#373737',
          20: '#3C3C3C',
          10: '#414141',
        }
      },
      opacity: {
        32: '.32',
        56: '.56',
      }
    }
  },
  plugins: [],
};
export default config;
