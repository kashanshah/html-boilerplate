module.exports = {
  mode: 'development',
  entry: './dist/index.js',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./dist/'],
  },
};
