module.exports = function(fn, max) {
  var tasks = [];
  var count = 0;

  function next() {
    if(tasks.length > 0) {
      var task = tasks.shift();
      fn.apply(null, task.param).then(task.res, task.rej).then(next);
    }
    else {
      count--;
    }
  };

  return function() {
    var param = Array.prototype.slice.apply(arguments);
    if(count < max) {
      count++;
      return new Promise(function(res, rej) {
        fn.apply(null, param).then(res, rej).then(next);
      });
    }
    else {
      return new Promise(function(res, rej) {
        tasks.push({
          res: res,
          rej: rej,
          param: param
        });
      });
    }
  };
};
