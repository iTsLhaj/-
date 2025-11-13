/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ← This is KEY!
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#010101',
        'text-strong': '#FFFFFF',
        'text-weak': '#A0A0A0BC',
        'accent': '#bb1f8c',
      },
      fontFamily: {
        'mono': ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}