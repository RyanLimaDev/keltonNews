import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'header': '#053165',
      'black': 'rgb(0 0 0)',
      'font-news': "#333333",
      'font-white': "#ffffff"
    }
  },
  plugins: [],
}
export default config
