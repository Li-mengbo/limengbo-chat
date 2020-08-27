module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: [], // 不进行转换的css类名
      minPixelValue: 1,
      mediaQuery: false,
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
    },
  },
};
