module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  corePlugins: { preflight: false, container: false },
  important: '#tailwind',
  theme: {
    extend: {
      colors: {
        spader: '#1C52FF',
      },
      maxWidth: {
        xxs: '18rem',
      },
    },
  },
};
