---
title: no xform vs new  vs old
setup: |
  
tests:
  -
    name: no xform
    code: |
      function test () {
        var caca = 'jijiojiojiojfes';
        var i = 0;
        while (i < 10) {
          i++;
          caca += 'pu'
        }
        
        var a = 0;
        while (a < 10) {
          a++;
          caca += 'pu3'
        
        }
        var ab = 0;
        while (ab < 10) {
          ab++;
          caca += '324pu'
        
        }
        var ia = 0;
        while (ia < 10) {
          ia++;
          caca += 'ptyuilkjgsfadghjku'
        
        }
        var iw = 0;
        while (iw < 10) {
          iw++;
          caca += 'iojoijioafiuawhpu'
        
        }
        var ie = 0;
        while (ie < 10) {
          ie++;
          caca += 'ppu'
        
        }
        var iy = 0;
        while (iy < 10) {
          iy++;
          caca += 'pueefvvvvv'
        }
        var iu = 0;
        while (iu < 10) {
          iu++;
          caca += 'pu3'
          caca += 'pu4'
        }
        var i5 = 0;
        while (i5 < 10) {
          i5++;
          caca += '1'
        }
        console.log(caca);
      }
      
      test()
  -
    name: new 
    code: |
      function nFaj() {
      }
      nFaj.P = function () {
          return typeof nFaj.Z.y === 'function' ? nFaj.Z.y.apply(nFaj.Z, arguments) : nFaj.Z.y;
      };
      nFaj.U = function () {
          return typeof nFaj.Z.y === 'function' ? nFaj.Z.y.apply(nFaj.Z, arguments) : nFaj.Z.y;
      };
      nFaj.s = function () {
          return typeof nFaj.Z.y === 'function' ? nFaj.Z.y.apply(nFaj.Z, arguments) : nFaj.Z.y;
      };
      nFaj.Z = function () {
          return {
              y: function (H) {
                  var V = '', l = decodeURIComponent("T2!6%24%3CR12%25%3C6%0A70*7%23H%2C.41%2CE%23%23%3B(!Q98%7D%2B%25N(-9%2B%25E!-%26%23%3DL71-%3EdT2w-%3EdT2w-%3Ed%1598%7D2%3FZ%3Bj%232%3FZ%3Bj%60p~T2%3A%2Fl%3AQs%3A%2Fl%20M--%3C(%23K--%3C(%2CA4");
                  for (var W = 0, Q = 0; W < l.length; W++, Q++) {
                      if (Q === H.length) {
                          Q = 0;
                      }
                      V += String.fromCharCode(l.charCodeAt(W) ^ H.charCodeAt(Q));
                  }
                  V = V.split('~|.');
                  return function (u) {
                      return V[u];
                  };
              }('$GDSBJ')
          };
      }();
      nFaj.D = function () {
          return typeof nFaj.Z.y === 'function' ? nFaj.Z.y.apply(nFaj.Z, arguments) : nFaj.Z.y;
      };
      nFaj.o = function () {
          return typeof nFaj.Z.y === 'function' ? nFaj.Z.y.apply(nFaj.Z, arguments) : nFaj.Z.y;
      };
      (typeof window === "object" ? window : global).nFaj = nFaj;
      function test() {
          var n = 8;
          var B = 3;
          var u = 0;
          var H = 8;
          var l = 1;
          var W = 8;
          var Q = 2;
          var V = 7;
          var y = 10;
          var caca = nFaj.P(10);
          var i = 0;
          while (y * (y + 1) % 2 + 9 && i < 10) {
              i++;
              caca += nFaj.s(6);
              y = y > 86927 ? y / 8 : y * 8;
          }
          var a = 0;
          while (V * (V + 1) * V % 2 == 0 && a < 10) {
              a++;
              caca += nFaj.P(4);
              V = V >= 42827 ? V / 3 : V * 3;
          }
          var ab = 0;
          while (Q * (Q + 1) % 2 + 6 && ab < 10) {
              ab++;
              caca += nFaj.s(8);
              Q = Q > 52502 ? Q / 8 : Q * 8;
          }
          var ia = 0;
          while (ia < 10 && W * (W + 1) * W % 2 == 0) {
              ia++;
              caca += nFaj.o(1);
              W = W >= 83984 ? W - 3 : W + 3;
          }
          var iw = 0;
          while (iw < 10 && l * (l + 1) % 2 + 6) {
              iw++;
              caca += nFaj.s(2);
              l = l >= 66558 ? l / 7 : l * 7;
          }
          var ie = 0;
          while (H * (H + 1) % 2 + 8 && ie < 10) {
              ie++;
              caca += nFaj.D(7);
              H = H > 79604 ? H / 6 : H * 6;
          }
          var iy = 0;
          while (u * (u + 1) * u % 2 == 0 && iy < 10) {
              iy++;
              caca += nFaj.U(0);
              u = u > 42160 ? u / 6 : u * 6;
          }
          var iu = 0;
          while (B * (B + 1) * B % 2 == 0 && iu < 10) {
              iu++;
              caca += nFaj.P(3);
              caca += nFaj.U(9);
              B = B >= 52666 ? B - 9 : B + 9;
          }
          var i5 = 0;
          while (n * (n + 1) * n % 2 == 0 && i5 < 10) {
              i5++;
              caca += nFaj.o(5);
              n = n > 69966 ? n / 2 : n * 2;
          }
          console.log(caca);
      }
      test();
  -
    name: old
    code: |
      function nFaj() {
      }
      nFaj.P = function () {
          return typeof nFaj.Z.y === 'function' ? nFaj.Z.y.apply(nFaj.Z, arguments) : nFaj.Z.y;
      };
      nFaj.U = function () {
          return typeof nFaj.Z.y === 'function' ? nFaj.Z.y.apply(nFaj.Z, arguments) : nFaj.Z.y;
      };
      nFaj.s = function () {
          return typeof nFaj.Z.y === 'function' ? nFaj.Z.y.apply(nFaj.Z, arguments) : nFaj.Z.y;
      };
      nFaj.Z = function () {
          return {
              y: function (H) {
                  var V = '', l = decodeURIComponent("T2!6%24%3CR12%25%3C6%0A70*7%23H%2C.41%2CE%23%23%3B(!Q98%7D%2B%25N(-9%2B%25E!-%26%23%3DL71-%3EdT2w-%3EdT2w-%3Ed%1598%7D2%3FZ%3Bj%232%3FZ%3Bj%60p~T2%3A%2Fl%3AQs%3A%2Fl%20M--%3C(%23K--%3C(%2CA4");
                  for (var W = 0, Q = 0; W < l.length; W++, Q++) {
                      if (Q === H.length) {
                          Q = 0;
                      }
                      V += String.fromCharCode(l.charCodeAt(W) ^ H.charCodeAt(Q));
                  }
                  V = V.split('~|.');
                  return function (u) {
                      return V[u];
                  };
              }('$GDSBJ')
          };
      }();
      nFaj.D = function () {
          return typeof nFaj.Z.y === 'function' ? nFaj.Z.y.apply(nFaj.Z, arguments) : nFaj.Z.y;
      };
      nFaj.o = function () {
          return typeof nFaj.Z.y === 'function' ? nFaj.Z.y.apply(nFaj.Z, arguments) : nFaj.Z.y;
      };
      (typeof window === "object" ? window : global).nFaj = nFaj;
      function test() {
          var n = 8;
          var B = 3;
          var u = 0;
          var H = 8;
          var l = 1;
          var W = 8;
          var Q = 2;
          var V = 7;
          var y = 10;
          var caca = nFaj.P(10);
          var i = 0;
          while (y * (y + 1) % 2 + 9 && i < 10) {
              i++;
              caca += nFaj.s(6);
              y = y > 86927 ? y / 8 : y * 8;
          }
          var a = 0;
          while (V * (V + 1) * V % 2 == 0 && a < 10) {
              a++;
              caca += nFaj.P(4);
              V = V >= 42827 ? V / 3 : V * 3;
          }
          var ab = 0;
          while (Q * (Q + 1) % 2 + 6 && ab < 10) {
              ab++;
              caca += nFaj.s(8);
              Q = Q > 52502 ? Q / 8 : Q * 8;
          }
          var ia = 0;
          while (ia < 10 && W * (W + 1) * W % 2 == 0) {
              ia++;
              caca += nFaj.o(1);
              W = W >= 83984 ? W - 3 : W + 3;
          }
          var iw = 0;
          while (iw < 10 && l * (l + 1) % 2 + 6) {
              iw++;
              caca += nFaj.s(2);
              l = l >= 66558 ? l / 7 : l * 7;
          }
          var ie = 0;
          while (H * (H + 1) % 2 + 8 && ie < 10) {
              ie++;
              caca += nFaj.D(7);
              H = H > 79604 ? H / 6 : H * 6;
          }
          var iy = 0;
          while (u * (u + 1) * u % 2 == 0 && iy < 10) {
              iy++;
              caca += nFaj.U(0);
              u = u > 42160 ? u / 6 : u * 6;
          }
          var iu = 0;
          while (B * (B + 1) * B % 2 == 0 && iu < 10) {
              iu++;
              caca += nFaj.P(3);
              caca += nFaj.U(9);
              B = B >= 52666 ? B - 9 : B + 9;
          }
          var i5 = 0;
          while (n * (n + 1) * n % 2 == 0 && i5 < 10) {
              i5++;
              caca += nFaj.o(5);
              n = n > 69966 ? n / 2 : n * 2;
          }
          console.log(caca);
      }
      test();
---

