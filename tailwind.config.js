/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.html",
    "./js/**/*.js",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius:{
        '120': '120px'
      },
      colors:{
        'color1': 'rgb(19, 19, 19)',
        'color2': 'rgb(14, 122, 129)',
        'color3': 'rgb(255, 255, 255)',
        'color1.7': 'rgba(19, 19, 19, 0.7)',
        'color1.6': 'rgba(19, 19, 19, 0.6)',
        'color1.1': 'rgba(19, 19, 19, 0.1)',
        'color1.03': 'rgba(19, 19, 19, 0.03)',
        'color2.2': 'rgba(14, 122, 129, 0.2)',
        'color2.15': 'rgba(14, 122, 129, 0.15)',
        'color2.1': 'rgba(14, 122, 129, 0.1)',
        'color3.9': 'rgba(255, 255, 255, 0.9)',
        'color3.6': 'rgba(255, 255, 255, 0.6)',
        'color3.05': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily:{
        'Inter': "Inter",
        'Lato': "Lato"
      },
      fontSize:{
        '24':'24px',
        '32': '32px',
        '40':'40px'        
      },
      lineHeight:{
        '29': '29px',
        '32': '32px',
        '48': '48px',
        '88':  '88px'
      },
      padding:{
        '100':'100px',
        '140':'140px'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}