const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "dawood-a": {
          "primary": "#4e8cff",
          "primary-content": "#ffffff",

          "secondary": "#7c3aed",
          "secondary-content": "#ffffff",

          "accent": "#f472b6",
          "accent-content": "#ffffff",

          "neutral": "#2a2e37",
          "neutral-content": "#f3f4f6",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",

          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
};

