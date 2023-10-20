/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    minWidth: {
      '1/2': '50%',
      '1/3': '33.3333333333%',
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

