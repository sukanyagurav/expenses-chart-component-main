/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens:{
      sm:'490px',
      md:'600px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        softRed:'hsl(10, 79%, 65%)',
        cyan:'hsl(186, 34%, 60%)',
        darkBrown:'hsl(25, 47%, 15%)',
        mediumBrown:'hsl(28, 10%, 53%)',
        cream:'hsl(27, 66%, 92%)',
        paleOrange:'hsl(33, 100%, 98%)'
      },
      fontFamily:{
        sans:['DM Sans','sans-serif']
      },
      keyframes: {
        
        fromTop: {
          'from': {
              opacity: '0',
              transform: 'translateY(20px)'
          },
      
          'to': {
              opacity: '1',
              transform: 'translateY(0)'
          }
      },
      
    },
      animation: {
        fromTop: 'fromTop 0.7s ease-in-out both',
        textClip:'textClip 1s ease-in-out both',
        increaseBar:'increaseBar 2.2s ease-in-out both'
      }
    },
  },
  plugins: [

    require('tailwind-clip-path')
  ],
}

