// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    
    plugins: [
      require('karma-jasmine'),
      require('@hirez_io/karma-jasmine-given'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-jasmine-diff-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    
    // TRIGGER
    autoWatch: true,
    singleRun: false,

    // BUILD
    frameworks: ['@hirez_io/jasmine-given', 'jasmine', '@angular-devkit/build-angular'],
    basePath: '',

    // RUN
    port: 9876,
    browsers: ['Chrome'],

    // REPORT
    colors: true,
    logLevel: config.LOG_INFO,

    reporters: ['jasmine-diff', 'mocha'],

    jasmineDiffReporter: {
      color: {
        expectedBg: 'bgMagenta',
        expectedWhitespaceBg: 'bgMagenta',
        actualBg: 'bgBlue',
        actualWhitespaceBg: 'bgBlue'
      },
      legacy: true
    },

    mochaReporter: {
      output: 'minimal'
    },

    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    }
    
  });
};
