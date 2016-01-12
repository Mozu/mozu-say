'use strict';
var os = require('os');
var stripAnsi = require('strip-ansi');
var assert = require('assert');
var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var mosay = require('../');
var isWindows = os.platform().indexOf('win') === 0;

console.log(mosay(chalk.red('WHO\'S READY FOR SEASONAL FLAVORS???? ') + chalk.yellow('\'ALLO \'ALLO')));

describe('mosay', function () {

  // New test template.
  //
  // it('should _____', function (done) {
  //   var testName = 'short-description';
  //   var expected = mosay('String to test');
  //
  //   // run once, then remove from test:
  //   createFixture(testName, expected);
  //
  //   fs.readFile(getFixturePath(testName), function (err, data) {
  //     assert.ifError(err);
  //     assert.equal(JSON.parse(data), expected);
  //     done();
  //   });
  // });

  it('should return correctly formatted string', function (done) {
    var testName = 'correctly-formatted';
    var expected = mosay('Hi');

    testOutput(testName, expected, done);

  });

  it('should allow customization of line length', function (done) {
    var testName = 'length-customization';
    var expected = mosay('Hi', { maxLength: 8 });

    testOutput(testName, expected, done);

  });

  it('should override a maxLength setting that is too short', function (done) {
    var testName = 'override-maxLength';
    var expected = mosay('Hello, buddy!', { maxLength: 4 });

    testOutput(testName, expected, done);

  });

  describe('ansi', function () {
    it('should display ansi styling correctly', function (done) {
      var testName = 'ansi';
      var expected = mosay(chalk.red.bgWhite('Hi'));

      testOutput(testName, expected, done);

    });

    it('should handle part ansi and part not-ansi', function (done) {
      var testName = 'half-ansi';
      var expected = mosay(chalk.red.bgWhite('Hi') + ' there, sir!');

      testOutput(testName, expected, done);

    });

    it('should wrap ansi styling to the next line properly', function (done) {
      var testName = 'wrap-ansi-styles';
      var expected = mosay(chalk.red.bgWhite('Hi') + ' there, sir! ' + chalk.bgBlue.white('you are looking') + ' swell today!');

      testOutput(testName, expected, done);

    });
  });
})

function createFixture(testName, str) {
  fs.writeFile(getFixturePath(testName), JSON.stringify(str));
}

function getFixturePath(testName) {
  return path.join(__dirname, 'fixture', testName + '.json');
}

function testOutput(testName, output, done) {
  fs.readFile(getFixturePath(testName), 'utf8', function(err, data) {
    assert.ifError(err);
    var fixture = JSON.parse(data);
    if (isWindows) {
      fixture = stripAnsi(fixture);
      output = stripAnsi(output);
    }
    assert.equal(fixture, output);
    done();
  })
}
