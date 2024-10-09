/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iranyekan"],
      },
      colors: {
        primary_900: "#4A6DFF",
        secondary_900: "#2A2D53",
        secondary_800: "#3F4264",
        secondary_700: "#555775",
        secondary_600: "#6A6C87",
        secondary_200: "#BFC0CB",
        other_warning: "#FF9900",
        secondary_red: "#FF0000CC",
      },
      fontSize: {
        "6px": "6px",
      },
    },
  },
  plugins: [],
};
