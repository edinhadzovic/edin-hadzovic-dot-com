module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 4s infinite',
        'move-up-down': 'move-up-down 2s ease-in-out infinite alternate',
        'bubble-up': 'bubble-up 0.5s ease-in-out forwards',
        'bubble-down': 'bubble-down 0.5s ease-in-out forwards',
        'move-right': 'move-right 0.5s ease-in-out ifinite alternate',
        'rotate-45': 'rotate-45 0.5s ease-in-out forwards'
      },
      keyframes: {
        'move-up-down': {
          '0%': {
            transform: 'translateX(-50%) translateY(calc(-50% + 10px))',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(calc(-50% - 10px))'
          },
        },
        'bubble-up': {
          '100%': {
            width: '8.5rem',
            height: '8.5rem'
          }
        },
        'bubble-down': {
          '0%': {
            width: '8.5rem',
            height: '8.5rem'
          },
          '100%': {
            width: '3.5rem',
            height: '3.5rem'
          }
        },
        'move-right': {
          '100%': {
            transform: 'translateX(10%)'
          }
        },
        'rotate-45': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(-45deg)'
          }
        }
      }
    },
  },
  plugins: [],
}
