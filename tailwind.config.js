/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'anchal':'#123456'
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
