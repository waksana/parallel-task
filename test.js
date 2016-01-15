var parallel = require('.');

var times = 10;
var running = false;

var fn = function() {
  if(running)
      throw new Error('some other promise is running');
  running = true;
  return new Promise(function(res) {
      process.nextTick(function() {
          running = false;
          res();
      });
  });
};

var pfn = parallel(fn, 1);

while(times--) {
  pfn().catch(function(e) {
      console.error(e.stack);
      process.exit(1);
  });
}
