# parallel-task

parallel excution with concurrency limit

限制同时运行promise任务的数量

## Installation

```
$ npm install parallel-task
```

## Example

```js
var parallel = require('parallel-task');

//a function that returns a promise
function fn(param) {
  return new Promise(function(res) {
    setTimeout(function() {
      res(param);
    }, 10000);
  });
}

//a function do the same thing above but only 10 are running at the same time
var fnn = parallel(fn, 10);
```

## API

### parallel(genPromiseFn, concurrency)

输入一个返回promise的函数，输出带有并发限制的函数

# License

MIT
