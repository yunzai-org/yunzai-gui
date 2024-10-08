import type { Config } from 'tailwindcss'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // js
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [require('preline/plugin')]
}
export default config
