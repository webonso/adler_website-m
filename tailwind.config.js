/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors: {
        primary: '#203757',
        variantP: '#7C99B9',
        secondary: '#252057',
        complimentary: '#574020',
        'tertiary': '#205257',
        'white-400': 'rgba(255, 255, 255, 0.80)',

        white: '#fff',
        black: '#000',

        'blue-950': '#203757',
        'blue-100': 'rgba(32, 55, 87, 0.87)',
        'blue-300': 'rgba(32, 55, 87, 0.6)',
        'neutral-100': '#f5f5f5',
        'gray-200': 'rgba(0, 0, 0, 0.6)',
        zinc: 'rgba(217, 217, 217, 0.87)',

        'slate-400': '#7c99b9',
        'slate-600': '#475e7d',

        'overlay-color': '#7171714d',

        lightslategray: '#7c99b9',
        gray: 'rgba(0, 0, 0, 0.6)',

        darkslategray: {
          100: '#203757',
          200: 'rgba(32, 55, 87, 0.87)',
          300: 'rgba(32, 55, 87, 0.6)',
        },

        gainsboro: 'rgba(217, 217, 217, 0.87)',
        whitesmoke: '#f5f5f5',
      },
      spacing: {},
      fontFamily: {
        mono: ['var(--font-average)'],
        sans: ['var(--font-averia_libre)'],
        b612: ['var(--font-b612)'],
       
      },
      borderRadius: {
        '11xl': '30px',
        '31xl': '50px',
        '3xs': '10px',
      },
    },
    fontSize: {
      xl: '20px',
      base: '16px',
      '5xl': '24px',
      lgi: '19px',
      '9xl': '28px',
      '3xl': '22px',
      lg: '18px',
      sm: '14px',
      smi: '13px',
      '6xl': '25px',
      '17xl': '36px',
      '31xl': '50px',
      '11xl': '30px',
      '21xl': '40px',
      '13xl': '32px',
      inherit: 'inherit',
    },
    screens: {
      mq1425: {'max': '1425px'},
      lg: {'max': '1200px'},
      mq1325: { 'max': '1325px' },
      mq1225: {'max': '1225px'},
      mq1125: {'max': '1125px'},
      mq1050: {'max': '1050px'},
      mq800: {'max': '800px' },
      mq750: {'max': '750px'},
      mq450: { 'max': '450px'},
    },
  },
  plugins: [],
};
