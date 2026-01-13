import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        foreground: '#fafafa',
        primary: '#18181b',
        'primary-foreground': '#fafafa',
        muted: '#27272a',
        'muted-foreground': '#a1a1aa',
        accent: '#3b82f6',
        border: '#27272a'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
