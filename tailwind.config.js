/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
      },

      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  extend: {
    animation: {
      spin: "spin 3s linear infinite",
    },
  }
}

