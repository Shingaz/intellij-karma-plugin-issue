module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: ['test/**/*.test.js'],
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    preprocessors: {
      'test/**/*.test.js': ['webpack'],
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.test.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
        ],
      },
    },
  });
};
