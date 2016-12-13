---
title: Normal Function Call vs this function
setup: |
  
tests:
  -
    name: Normal Function Call
    code: |
      var convertor = function(value){
                      var len = (value).toString().length;
                      var _baseK = 1000;
                      var _baseL = 100000;
                      switch (len) {
                          case 4:
                          case 5:
                              var textK = (value/_baseK).toFixed(0) + ' k';
                              return textK;
                              break;
                          case 6:
                              var _value = value/_baseL;
                              var textL = '';
                              if (_value % 2 == 0) {
                                  textL += parseInt(_value) + " Lacs ";
                              } else {
                                  textL = parseInt(_value) + " Lacs " + convertor(value - _baseL)
                              }
                              return textL;
                              break;
                          default:
                              return '';
                      }
                  };
      var test = convertor(100000);
  -
    name: this function
    code: |
      var convertor = function(value) {
          this.len = (value).toString().length;
          this._baseK = 1000;
          this._baseL = 100000;
          switch (len) {
              case 4:
              case 5:
                  this.textK = (value / this._baseK).toFixed(0) + ' k';
                  return this.textK;
                  break;
              case 6:
                  this._value = value / this._baseL;
                  this.textL = parseInt(this._value) + " Lacs ";
                  if (this._value % 2 != 0) {
                      this.textL += convertor(value - _baseL);
                  }
                  return this.textL;
                  break;
              default:
                  return '';
          }
      };
      var test = convertor(100000);
---
switch test
