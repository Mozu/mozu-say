#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var mosay = require('./');

require('taketalk')({
  init: function (input, options) {
    console.log(mosay(input, options));
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
      '    mosay "Who\'s ready for seasonal flavors?!"',
      mosay("Who\'s ready for seasonal flavors?!")
    ].join('\n'));
  },
  version: pkg.version
});
