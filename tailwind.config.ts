import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        // white 
        'bleached-silk': 'rgb(211, 211, 211)',
        'off-white': 'rgba(244, 242, 238, 0.46)',

        // gray
        'gray-light': ' #D9D9D9',

        // black
        'black-wash': ' #0D0D0D',

        // green
        'hover-glow': ' #4bd360',

        // dark blue
        'gunmetal': ' #121826',
        'dark-navy-blue': ' #0F1117',
        'midnight-blue': ' #030712',

        //green
        'turquoise': ' #2bfdbe', 
        'mint-green': ' #96f0a0', 

        // teal
        'teal': ' #022e2e', 
        'teal-primary': ' #04bc9c', 
        'teal-primary-opc': 'rgba(4, 188, 157, 0.9)', 
        'teal-secundary': ' #034444',
        'teal-secundary-opc': ' #044444',
      },
      opacity: {
        '99': '0.99',
      },
      blur: {
        xs: '2px',
      },
      screens: {
        'md-lg': '900px',
      }
    },
  },
  plugins: [],
} satisfies Config;