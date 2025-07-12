/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"], //, "./components/**/*.{js,jsx,ts,tsx}"
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        primary : "#030014",
        secondary : "#151312",
        light : {
          100 : "#D6C6FF",
          200 : "#BFA3FF",
          300 : "#9CA4AB"
        },
        accent : "#AB8BFF",
        dark : {
          100 : "#221f3d",
          200 : "#0F0D23",
//          300 : "#221f3d"
        }
      }
    },
  },
  plugins: [],
}