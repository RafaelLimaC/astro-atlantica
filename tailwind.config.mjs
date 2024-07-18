/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: "#fefefe",
        gray8b: "#8b8b8b",
        lightBlue: "#466ffd",
      },
    },
  },
  plugins: [],
};
