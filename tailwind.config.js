module.exports = {
    content: ['src/**/*.vue'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif']
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }

  /* npx tailwindcss -i src/assets/css/dev.css -o src/assets/css/style.css --watch  */