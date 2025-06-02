/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors: {
        primary: {
          DEFAULT: '#0066ff',
          light: '#3385ff',
          dark: '#0052cc'
        },
        secondary: {
          DEFAULT: '#ff4500',
          light: '#ff6633',
          dark: '#cc3700'
        },
        accent: {
          DEFAULT: '#ff1493',
          light: '#ff47a6',
          dark: '#cc1075'
        },
        gold: {
          DEFAULT: '#ffd700',
          light: '#ffeb3b',
          dark: '#e6c200'
        },
        surface: {
          50: '#fafbff',
          100: '#f0f4ff',
          200: '#dbeafe',
          300: '#bfdbfe',
          400: '#93c5fd',
          500: '#60a5fa',
          600: '#3b82f6',
          700: '#2563eb',
          800: '#1d4ed8',
          900: '#1e40af'
        }
      },
      fontFamily: {
        sans: ['Nunito', 'Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Fredoka', 'Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['Fredoka', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'soft': '0 4px 20px -3px rgba(0, 102, 255, 0.15), 0 10px 25px -2px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 25px -5px rgba(0, 102, 255, 0.2), 0 4px 12px -2px rgba(0, 0, 0, 0.15)',
        'vibrant': '0 10px 40px -10px rgba(255, 69, 0, 0.4), 0 4px 25px -5px rgba(255, 20, 147, 0.3)',
        'electric': '0 0 30px rgba(0, 102, 255, 0.5), 0 0 60px rgba(255, 20, 147, 0.3)',
        'glow': '0 0 25px rgba(255, 215, 0, 0.6), 0 0 50px rgba(255, 69, 0, 0.4)'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      backgroundImage: {
        'bollywood-burst': 'radial-gradient(circle at 30% 30%, rgba(0, 102, 255, 0.2) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(255, 69, 0, 0.2) 0%, transparent 60%), radial-gradient(circle at 50% 10%, rgba(255, 20, 147, 0.15) 0%, transparent 50%)',
        'electric-gradient': 'linear-gradient(135deg, #0066ff 0%, #ff1493 50%, #ffd700 100%)',
        'vibrant-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}