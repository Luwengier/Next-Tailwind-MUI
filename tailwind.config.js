/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors: {
    //   blue: {
    //     light: '#85d7ff',
    //     DEFAULT: '#1fb6ff',
    //     dark: '#009eeb',
    //   },
    //   pink: {
    //     light: '#ff7ce5',
    //     DEFAULT: '#ff49db',
    //     dark: '#ff16d1',
    //   },
    //   gray: {
    //     darkest: '#1f2d3d',
    //     dark: '#3c4858',
    //     DEFAULT: '#c0ccda',
    //     light: '#e0e6ed',
    //     lightest: '#f9fafc',
    //   }
    // },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
