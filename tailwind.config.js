/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        example: "example 4s infinite",
        "color-change": "color-change 6s infinite",
        "bounce-color": "bounce-color 5s infinite",
        "spin-color": "spin-color 8s linear infinite",
        "pulse-color": "pulse-color 3s infinite",
        "slide-in": "slide-in 1.5s ease-out",
        "slide-in-top": "slide-in-top 1.5s ease-out",
        "slide-in-right": "slide-in-right 1.5s ease-out",
        "zoom-in": "zoom-in 2s ease-in-out",
        "flip": "flip 3s infinite",
        'fade-in': 'fade-in 2s ease-out',
        'text-shimmer': 'text-shimmer 3s linear infinite',
        'bounce-text': 'bounce-text 2s infinite',
        'rotate-text': 'rotate-text 4s linear infinite',
      },
      keyframes: {
        example: {
          "0%": { backgroundColor: "red" },
          "25%": { backgroundColor: "yellow" },
          "50%": { backgroundColor: "blue" },
          "100%": { backgroundColor: "green" },
        },
        "color-change": {
          "0%": { backgroundColor: "pink" },
          "25%": { backgroundColor: "purple" },
          "50%": { backgroundColor: "orange" },
          "75%": { backgroundColor: "teal" },
          "100%": { backgroundColor: "cyan" },
        },
        "bounce-color": {
          "0%": { backgroundColor: "coral", transform: "translateY(0)" },
          "50%": {
            backgroundColor: "lightblue",
            transform: "translateY(-20px)",
          },
          "100%": { backgroundColor: "lime", transform: "translateY(0)" },
        },
        "spin-color": {
          "0%": { backgroundColor: "lightgreen", transform: "rotate(0deg)" },
          "50%": { backgroundColor: "lightcoral", transform: "rotate(180deg)" },
          "100%": { backgroundColor: "lightblue", transform: "rotate(360deg)" },
        },
        "pulse-color": {
          "0%": { backgroundColor: "salmon", transform: "scale(1)" },
          "50%": { backgroundColor: "orange", transform: "scale(1.2)" },
          "100%": { backgroundColor: "salmon", transform: "scale(1)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-100%)", opacity: 0 },  // From top
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.5)", backgroundColor: "lightpink" },
          "100%": { transform: "scale(1)", backgroundColor: "lightblue" },
        },
        "flip": {
          "0%": { transform: "rotateY(0deg)", backgroundColor: "lightgreen" },
          "50%": {
            transform: "rotateY(180deg)",
            backgroundColor: "lightcoral",
          },
          "100%": {
            transform: "rotateY(360deg)",
            backgroundColor: "lightblue",
          },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'bounce-text': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'rotate-text': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: 0 },  // From right
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
