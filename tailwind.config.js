// 
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js'
  ],
  theme: {    extend: {},  },  plugins: [],
  plugins: [
    require('daisyui'),
  ],
  // ...
}
