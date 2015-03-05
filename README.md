# mosay [![Build Status](https://travis-ci.org/yeoman/mosay.svg?branch=master)](https://travis-ci.org/yeoman/mosay)

> Tell Yeoman what to say, and do it Mozu style.

Like [cowsay](http://en.wikipedia.org/wiki/Cowsay), but less cow, and like [yosay](https://github.com/yeoman/yosay) but with more stylized M and less Wes Anderson character.

![](screenshot.png)


## Install

```sh
$ npm install --save mosay
```


## Usage

```js
var mosay = require('mosay');

console.log(mosay('Follow the prompts to scaffold a Mozu Extension package.' +
'When the extension framework is installed, you can run `yo mozuxd:action` to' +
'install actions.'));

/*

 ;ppppppppppppppppppppppppppppppppppppppppppppppp,       
 MOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZQp   
 MOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMQ, 
 MOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZp
 MOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZQ
 MOZUMOZUMO ``````````` MOZUMOZUMO '````````'`5MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 BMOZUMOZUM             MOZUMOZUMO             MOZUMOZUMO
 .------------------------------------------------------.
 |    Follow the prompts to scaffold a Mozu Extension   |
 |  package. When the extension framework is installed, |
 |  you can run `yo mozuxd:action` to install actions.  |
 '------------------------------------------------------'

 */
```

*You can style your text with [chalk](https://github.com/sindresorhus/chalk) before passing it to `mosay`.*


## CLI

```
$ npm install --global mosay
```

```
$ mosay --help

  Say it loud. Say it with a large Mozu logo.

  Usage
    mosay <string>
    mosay <string> --maxLength 8
    echo <string> | mosay

  Example
    mosay "Who's ready for seasonal flavors?!"

 ;ppppppppppppppppppppppppppppppppppppppppppppppp,       
 MOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZQp   
 MOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMQ, 
 MOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZp
 MOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZUMOZQ
 MOZUMOZUMO ``````````` MOZUMOZUMO '````````'`5MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 MOZUMOZUMO             MOZUMOZUMO             MOZUMOZUMO
 BMOZUMOZUM             MOZUMOZUMO             MOZUMOZUMO
 .------------------------------------------------------.
 |          Who's ready for seasonal flavors?!          |
 '------------------------------------------------------'


```


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
Copyright (c) Google
