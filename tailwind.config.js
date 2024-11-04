// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: 0.8},
          '100%': { transform: 'translateY(-100%)', opacity: 0.4},
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 0.8 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-down': 'slideDown 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-in-out',
      }
    }
  },
  plugins: [],
};
