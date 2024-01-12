import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
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
        normalGray: '#e3e3e3',
        text: '#000000',
        darkGray: '#515151',
      },
      
      gradientColorStops: {
        'custom-gray': '#EAEFF3',
        'custom-dark-gray': '#515151',
        'custom-dark-black': '#000000',
        'custom-teal': '#91D8D8',
        'custom-green': '#2DB7C9',
      },
      screens: {
        '2xl': '1240px',
      },
      boxShadow: {
        'custom': '0px 0px 4px #e0e6ec inset',
        'glass':' 0px 1px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.05) inset, 0px -4px 4px 0px #FFF inset',
      }
       
    },
  },
  plugins: [],
}
export default config
