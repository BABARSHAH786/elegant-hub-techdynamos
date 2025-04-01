/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Example: For plain HTML projects

    "./src/**/*.{js,jsx,ts,tsx}", // Scan these files for Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};