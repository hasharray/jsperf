---
title: Plain vs http://packer.50x.eu/ vs https://javascriptobfuscator.com/
setup: |
  
tests:
  -
    name: Plain
    code: |
      function NewObject(prefix)
      {
          var count=0;
          this.SayHello=function(msg)
          {
                count++;
                console.log(prefix+msg);
          }
          this.GetCount=function()
          {
                return count;
          }
      }
      var obj=new NewObject("Message : ");
      obj.SayHello("You are welcome.");
      console.log(obj.GetCount());
  -
    name: http://packer.50x.eu/
    code: |
      (function(p, a, c, k, e, d) {
          e = function(c) {
              return c
          };
          if (!''.replace(/^/, String)) {
              while (c--) {
                  d[c] = k[c] || c
              }
              k = [function(e) {
                  return d[e]
              }];
              e = function() {
                  return '\\w+'
              };
              c = 1
          };
          while (c--) {
              if (k[c]) {
                  p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
              }
          }
          return p
      }('3 9(6){4 1=0;8.11=3(5){1++;10.12(6+5)}8.7=3(){15 1}}4 2=16 9("18 : ");2.11("17 14 13.");10.12(2.7());', 10, 19, 
      '|count|obj|function|var|msg|prefix|GetCount|this|NewObject|console|SayHello|log|welcome|are|return|new|You|Message'.split('|'), 0, {}));
  -
    name: https://javascriptobfuscator.com/
    code: |
      var _0xc656=["\x53\x61\x79\x48\x65\x6C\x6C\x6F","\x6C\x6F\x67","\x47\x65\x74\x43\x6F\x75\x6E\x74","\x4D\x65\x73\x73\x61\x67\x65\x20\x3A\x20","\x59\x6F\x75\x20\x61\x72\x65\x20\x77\x65\x6C\x63\x6F\x6D\x65\x2E"];function NewObject(_0x9346x2){var _0x9346x3=0;this[_0xc656[0]]= function(_0x9346x4){_0x9346x3++;console[_0xc656[1]](_0x9346x2+ _0x9346x4)};this[_0xc656[2]]= function(){return _0x9346x3}}var obj= new NewObject(_0xc656[3]);obj.SayHello(_0xc656[4]);console[_0xc656[1]](obj.GetCount())
---
Obfuscation Benchmark
