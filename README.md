# Make Regex
This module makes regex pattern easily.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save make-regex
```
    
```js

const RegMaker = require('make-regex');

let regMaker = new RegMaker('\\w+');

regMaker.make();

// It's an invalid regex just return false
let regMaker2 = new RegMaker('{2}\d');

regMaker2.make(); // It will return false.

// Empty input
let regMaker3 = new RegMaker('');

regMaker3.make(); // It will return /(?:)/g
```

### Running tests
```sh
$ node test.js
```

### License

Released under the [MIT License](LICENSE).