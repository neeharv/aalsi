module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Aalsi',
      externals: {
        react: 'React'
      }
    }
  }
}
