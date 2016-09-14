
class Benchmark {
  static compare(tests, count, period, callback) {
    var names = Object.keys(tests);

    setTimeout(function next(results) {
      var name = names.shift();
      if (name == null) {
        return setTimeout(callback, 0, results);
      }

      Benchmark.collect(count, period, tests[name], function(samples) {
        var mean = samples.reduce(function(sum, sample) {
          return sum + ((sample.calls * 1000) / sample.time);
        }, 0) / samples.length;

        results[name] = {
          mean: mean,
          samples: samples,
        };

        setTimeout(next, 0, results);
      });
    }, 0, {});
  }

  static collect(count, period, fn, callback) {
    setTimeout(function next(samples) {
      if (samples.length == count) {
        return setTimeout(callback, 0, samples);
      }

      Benchmark.sample(period, fn, function(sample) {
        samples.push(sample);
        setTimeout(next, 0, samples);
      });
    }, 0, []);
  }

  static sample(period, fn, callback) {
    setTimeout(function next(calls, time, count) {
      if (time > period) {
        return setTimeout(callback, 0, {
          calls: calls,
          time: time,
        });
      }

      Benchmark.time(count, fn, function(delta) {
        if (delta < (period / 100)) {
          count *= 2;
        } else {
          calls += count;
          time += delta;
        }

        setTimeout(next, 0, calls, time, count);
      });
    }, 0, 0, 0, 2);
  }

  static time(count, fn, callback) {
    var start = performance.now();
    do {
      fn();
    } while(--count);
    var end = performance.now();

    setTimeout(callback, 0, end - start);
  }
}
