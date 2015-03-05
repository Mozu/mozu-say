#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var yosay = require('./');

require('taketalk')({
  init: function (input, options) {
    console.log(yosay(input, options));
  },
  help: function () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    mosay <string>',
      '    mosay <string> --maxLength 8',
      '    echo <string> | mosay',
      '',
      '  Example',
      '    yosay "Who\'s ready for seasonal flavors?!"',
      yosay("Who\'s ready for seasonal flavors?!")
    ].join('\n'));
  },
  version: pkg.version
});
