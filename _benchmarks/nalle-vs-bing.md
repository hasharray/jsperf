---
title: nalle vs bing
setup: |
  
tests:
  -
    name: nalle
    code: |
      function cartesian() {
          return (cartesian.cache[arguments.length] || cartesian.compile(arguments.length)).apply(null, arguments);
      }
      cartesian.cache = [];
      cartesian.compile = function compile(n) {
          var args = [],
              indent = "",
              up = "",
              down = "";
          for (var i=0; i<n; i++) {
              var arr = "$"+String.fromCharCode(97+i),
                  ind = String.fromCharCode(105+i);
              args.push(arr);
              up += indent+"for (var "+ind+"=0, l"+arr+"="+arr+".length; "+ind+"<l"+arr+"; "+ind+"++) {\n";
              down = indent+"}\n"+down;
              indent += "  ";
              up += indent+"arr["+i+"] = "+arr+"["+ind+"];\n";
          }
          var body = "var res=[],\n    arr=[];\n"+up+indent+"res.push(arr.slice());\n"+down+"return res;";
          return cartesian.cache[n] = new Function(args, body);
      }
  -
    name: bing
    code: |
      function cartesian() {
          var r = [], args = Array.from(arguments);
          args.reduceRight(function(cont, factor, i) {
              return function(arr) {
                  for (var j=0, l=factor.length; j<l; j++) {
                      var a = arr.slice(); // clone arr
                      a[i] = factor[j];
                      cont(a);
                  }
              };
          }, Array.prototype.push.bind(r))(new Array(args.length));
          return r;
      }
---

