/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "bookmark-purple":"#5267DF",
        "bookmark-red":"#FA5959",
        "bookmark-blue":"#242A45",
        "bookmark-grey":"#9194A2",
        "bookmark-white":"#f7f7f7"
      }
    },
    container:{
      center:true,
      padding: '1rem',
      screens:{
        xl:"1124px",
        lg:"1124px",
        "2xl":"1124px",
      }

    }
  },
  plugins: [],
}

