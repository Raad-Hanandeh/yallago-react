/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        'inter': ['Inter']
    },
  extend: {
    colors: {
       gray: {
          light: "#E7E7E7",
          lighte:'#FAFAFB',
          lighter: "#E5E5E6",
          soft: "#676879",
          dark: "#808080",
          buttondark:"#F1EDFE",
          bridge:"#e7e7e6",
          rounded:"#E7E7E9",
          grayborder:"#F0F0F0",
          text:"#9B9DA3",
          textsoft:"#B7B7B7",
          range:"#E3E9ED",
          place:"#B7B7B7;",
          demo:"#ECEAEA",
          "#f9f9f9":"#f9f9f9",
          "#e4e4e4":"#e4e4e4",
          "#F2F2F2":"#F2F2F2",
          "#979797":"#979797"
          },
      black: {
          soft: "#121212",
          dark:"#18202F",
          Neutral:"#200E32",
          "#000":"#000000",
          "#18202F":"#18202F"
        },
      pink: {
        soft: "#FF626A"
      },
      red: {
        soft: "#ED4D55",
        dark:"#D41E27",
        rounded:"#F44A4A",
        button:"#FF626A",
        textpackage:"#F06A71",
        "#F44A4A":"#F44A4A"
      },
      purple: {
        dark: "#5137A6",
        soft:"#8A69F6",
      },
      green:{
        soft:"#34B166"
      }
    },
    margin: {
    },
    height: {
      '484': '30.25rem',
      '340': '21.25rem',
      '426': '26.625rem',
      '551':'34.438rem',
      '654':'40.875rem',
      '600':'37.5rem',
      '490':"30.625rem",
      '544':'34rem'
    },
    width:{
      '462':'28.875rem',
      '341': '21.313rem',
      '312':'19.5rem',
      '616':'38.5rem',
      '107':'6.688rem'
    },     
  },
},
  plugins: [],
}

