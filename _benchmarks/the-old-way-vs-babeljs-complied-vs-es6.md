---
title: The old way vs BabelJS complied vs ES6
setup: |
  
tests:
  -
    name: The old way
    code: |
      function foo( bar, baz, bam ) {
         var bar = bar || 'bar', baz = baz || 'baz', bam = bam || 'bam';
         console.log( bar, baz, bam );
      }
  -
    name: BabelJS complied
    code: |
      var foo = function foo() {
        var bar = arguments.length <= 0 || arguments[0] === undefined ? 'bar' : arguments[0];
        var baz = arguments.length <= 1 || arguments[1] === undefined ? 'baz' : arguments[1];
        var bam = arguments.length <= 2 || arguments[2] === undefined ? 'bam' : arguments[2];
        return console.log(bar, baz, bam);
      };
  -
    name: ES6
    code: |
      const foo = (bar = 'bar', baz = 'baz', bam = 'bam') => console.log( bar, baz, bam )
---
default arguments with JS arguments or ||
