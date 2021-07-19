module.exports = {
  images: {
    loader: 'imgix',
    path: '/'
  },
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}
