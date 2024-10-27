/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customdarkblue: '#3D348B',   // rgb(61, 52, 139)
        custommediumblue: '#5A56BC', // rgb(90, 86, 188)
        customirisblue: '#9788B2',    // rgb(151, 136, 178)
        customlightblue: '#7678ED',   // rgb(118, 120, 237)
        custombrown: '#B79877',       // rgb(183, 152, 119)
        customash: '#A79095',         // rgb(167, 144, 149)
        customyellow: '#F7B801',      // rgb(247, 184, 1)
        customorange: '#F18701',      // rgb(241, 135, 1)
        customered: '#F35B04'         // rgb(243, 91, 4)

        
       },


    },
  },
  plugins: [],
}

