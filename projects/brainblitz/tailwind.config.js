import colors from './src/styles/tailwind.colors';

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
