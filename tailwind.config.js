/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EDECEC",
        seccondary: "#D05A68",
        click: "#E87986",
      },
    },
  },
  plugins: [],
};
