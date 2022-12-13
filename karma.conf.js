// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    browsers: ['Firefox'],
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      // require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-structured-json-reporter'), //Added by me
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: true, // leave Jasmine Spec Runner output visible in browser (Modified)
      captureConsole: false //Added by me
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    angularCli: { //Added by me
      environment: 'dev'
    },
    customLaunchers: { //Added by me
      FirefoxHeadless: {
        base: 'Firefox',
        flags: [
          '-headless',
          '--disable-gpu',
          '--disable-extensions',
          '--disable-translate',
          // Without a remote debugging port, Google Chrome exits immediately.
          '--remote-debugging-port=9222',
        ],
      }
    },
    reporters: ['json-result', 'progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['FirefoxHeadless'],
    singleRun: true,
    browserDisconnectTolerance: 4,
    browserNoActivityTimeout: 50000,
    //Added by me
    jsonResultReporter: {
      outputFile: "result.json",
      isSynchronous: true
    },
  });
};