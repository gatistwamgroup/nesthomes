/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
 extend: {
   colors: {
      primary:"#355B5E",
      secondary:"#A8C9C7",
      background:"#F8F6F2",
      text:"#2A2A2A"
   },

   fontFamily:{
      heading:["Cormorant Garamond"],
      body:["Inter"]
   },

   boxShadow:{
      card:"0 20px 60px rgba(0,0,0,0.08)"
   }
 }
  }
}