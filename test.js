const assert = require('assert');
const RegMaker = require('./');

let regMaker = new RegMaker('\\w+');

assert.deepEqual( regMaker.make(), /\w+/g );

// It's an invalid regex just return false
let regMaker2 = new RegMaker('{2}\d');

assert.deepEqual( regMaker2.make(), false );

// Empty input
let regMaker3 = new RegMaker('');

assert.deepEqual( regMaker3.make(), /(?:)/g );