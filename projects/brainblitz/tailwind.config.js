import colors from './src/styles/tailwind.colors';
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.{html,ts,js,scss}",
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.sans],
        body: ['var(--font-body)', ...fontFamily.mono],
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
