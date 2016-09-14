class Benchmark() {
  static compare(tests, callback) {
    var names = Object.keys(tests);

    setTimeout(function next(results) {
      var name = names.shift();
      if (name == null) {
        return setTimeout(callback, 0, results);
      }

      Benchmark.collect(10, 1000, tests[name], function(samples) {
        results[name] = {
          hz: hz,
          samples: samples,
        };
      });
    }, 0, {});
  }

  static collect(count, period, fn, callback) {
  }

  static sample(period, fn, callback) {
  }

  static time(count, fn, callback) {
    var rvalue = fn();

    var start = Date.now();
    do {
      fn();
    } while(--count);
    var end = Date.now();

    setTimeout(callback, 0, end - start);
  }
}
