# promise-task-queue
promise task queue, promise queue task, queue promise task, queue task promise

限制promise任务的数量

## Usage

```javascript
var ptq = require('promise-task-queue');

//a function that returns a promise
function fn() {
  return new Promise(function(res) {
    setTimeout(res, 10000);
  });
}

//a function do the same thing above but only 10 are running at the same time
var fnn = ptq(fn, 10);
```
