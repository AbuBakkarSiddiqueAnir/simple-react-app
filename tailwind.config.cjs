/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#377DFF',
        secondaryColor:'#F0F5FA',
        heading:{
          '001' : '#323B4B'
        },
        textColor: {
          first: '#8A94A6',
          third:'#B0B7C3',
          forth:'#FF5630',
          fifth:'#4E5D78'
        },
      }
    },
  },
  plugins: [],
}
