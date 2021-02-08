module.exports = {
    devServer: {
      proxy: {
        '^/users': {
          target: 'http://localhost:8080',
          changeOrigin: true
        },
      }
    }
  }