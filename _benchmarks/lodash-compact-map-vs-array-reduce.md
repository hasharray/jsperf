---
title: lodash compact/map vs array reduce
setup: |
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"></script>
  const allSuites = [];
  
  const _filterHook = hook => (
        (this.showHooks === 'always')
        || (this.showHooks === 'failed' && hook.fail)
        || (this.showHooks === 'context' && hook.context)
    )
  
  const _reduceSuites = (acc, suite) => {
      const mapped = this._mapSuites(suite);
      if (mapped) {
        acc.push(mapped);
      }
      return acc;
    }
  
  const _mapSuites = suite => {
      const suites = suite.suites.reduce(this._reduceSuites, []);
  
      const tests = filter(suite.tests, test => (
        (this.showPassed && test.pass)
        || (this.showFailed && test.fail)
        || (this.showPending && test.pending)
        || (this.showSkipped && test.skipped)
      ));
  
      const beforeHooks = filter(suite.beforeHooks, this._filterHook);
      const afterHooks = filter(suite.afterHooks, this._filterHook);
  
      return (beforeHooks.length || afterHooks.length || tests.length || suites.length)
        ? Object.assign({}, suite, { suites, beforeHooks, afterHooks, tests })
        : null;
    }
  
  const _mapSuitesOrig = suite => {
      const suites = compact(map(suite.suites, this._mapSuitesOrig));
      const tests = filter(suite.tests, test => (
        (this.showPassed && test.pass)
        || (this.showFailed && test.fail)
        || (this.showPending && test.pending)
        || (this.showSkipped && test.skipped)
      ));
  
      const beforeHooks = filter(suite.beforeHooks, this._filterHook);
      const afterHooks = filter(suite.afterHooks, this._filterHook);
  
      return (beforeHooks.length || afterHooks.length || tests.length || suites.length)
        ? Object.assign({}, suite, { suites, beforeHooks, afterHooks, tests })
        : null;
    }
tests:
  -
    name: lodash compact/map
    code: |
      return _mapSuitesOrig(allSuites);
  -
    name: array reduce
    code: |
      return _mapSuites(allSuites);
---

