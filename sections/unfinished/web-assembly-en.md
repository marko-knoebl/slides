## example program

source: https://blog.scottlogic.com/2018/04/26/webassembly-by-hand.html

Web assembly program that defines a function called _answer_.

When called the function returns 42.

```wat
(module
  (func (result i32)
    (i32.const 42)
  )
  (export "answer" (func 0))
)
```

## compiling

via npm package _wabt_:

```js
// compile.js
const { readFileSync, writeFileSync } = require('fs');
const wabt = require('wabt');

const inputWat = 'answer.wat';
const outputWasm = 'answer.wasm';

const wasmModule = wabt().parseWat(
  inputWat,
  readFileSync(inputWat, 'utf8')
);
const { buffer } = wasmModule.toBinary({});

writeFileSync(outputWasm, new Buffer(buffer));
```

## executing

```js
// run.js
const { readFileSync } = require('fs');

const run = async () => {
  const buffer = readFileSync('./answer.wasm');
  const module = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(module);
  console.log(instance.exports.answer());
};

run();
```
