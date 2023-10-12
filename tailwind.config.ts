import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        orangeBase:'#FE8330'
      },
      textColor:{
        orangeBase:'#FE8330'
      },
      borderColor:{
        orangeBase:'#FE8330'
      },
      height:{
        814:'814px',
        520: '520px',
        650:'650px'
      },
      minWidth:{
        520:'520px',
        250: '250px'
      },
      maxWidth:{
        240:'240px'
      },
      fontSize:{
        56:'56px'
      },
      scale:{
        98:'0.98'
      }
    },
  },
  plugins: [],
}
export default config
