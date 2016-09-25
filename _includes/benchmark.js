var Benchmark = {
  compare: function(tests, size, callback) {
    var names = Object.keys(tests);

    setTimeout(function next(results) {
      var name = names.shift();
      if (name == null) {
        return setTimeout(callback, 0, results);
      }

      var test = tests[name];

      Benchmark.collect(test, size, function(sample) {
        var mean = sample.reduce(function(sum, value) {
          return sum + value;
        }, 0) / sample.length;

        results[name] = {
          mean: mean,
          sample: sample,
        };

        setTimeout(next, 0, results);
      });
    }, 0, {});
  },

  collect: function(fn, size, callback) {
    setTimeout(function next(sample, count) {
      if (sample.length >= size) {
        return setTimeout(callback, 0, sample, count);
      }

      Benchmark.time(count, fn, function(time) {
        if (time < 1) {
          return setTimeout(next, 0, sample, count * 2);
        }

        var value = count / (time / 1000);
        sample.push(value);

        setTimeout(next, 0, sample, count);
      });
    }, 0, [], 1);
  },

  time: function(count, fn, callback) {
    var time = 0;

    do {
      var start = performance.now();
      fn.call();
      var end = performance.now();

      time += end - start;
    } while(--count);

    setTimeout(callback, 0, time);
  },
};
