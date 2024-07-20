/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto : ["Roboto", 'sans-serif']
      },
      fontSize: {
        header : '2rem'
      },
      colors:{
        headerColor : '#78350F'
      },
      width: {
        headerList : '40rem',
        headerButton : '9.313rem',
        heroRight  :'30.375rem'
      },
      height : {
        heroRight: '26.438rem'
      },
      maxWidth : {
        heroLeft : '44.625rem',
        heroHeight  :'36.438rem'

      },
      minHeight : {
        heroHeight  :'36.438rem'
      },
      lineHeight : {
        '80' : '5rem'
      }
    },
  },
  plugins: [],
}

