module.exports = {
  theme: {
    extend: {
      colors: {
        low: '#f0c674',
        medium: '#ffbf00',
        high: '#ff5000',
        veryHigh: '#ff0f00',
      },
      animation: {
        fade: 'fade 0.5s ease-in-out',
        bounce: 'bounce 0.5s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};