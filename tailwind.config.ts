import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nabin/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['var(--font-switzer)'],
      },
      colors:{
        primary: '#2C57C6',
        secondary: '#91D8D8',
        accent: '#FCC130',
        background: '#EAEFF3',
        text: '#000000',
      },
      gradientColorStops: {
        'custom-gray': '#EAEFF3',
        'custom-teal': '#91D8D8',
        'custom-green': '#2DB7C9',
      },
      screens: {
        '2xl': '1240px',
      }
    },
  },
  plugins: [],
}
export default config
