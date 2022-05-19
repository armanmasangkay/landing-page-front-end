module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'a-white': 'hsl(0, 0%, 98%)',
        'a-black': 'hsl(0, 0%, 8%)',
        'm-grey': 'hsl(0, 0%, 41%)',
      },
    },
  },
  plugins: [],
}
