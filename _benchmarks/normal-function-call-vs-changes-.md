---
title: Normal Function Call vs changes 
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
    name: changes 
    code: |
      var convertor = function(value) {
          var len = (value).toString().length;
          var _baseK = 1000;
          var _baseL = 100000;
          var text = '';
          switch (len) {
              case 4:
              case 5:
                  text = (value / _baseK).toFixed(0) + ' k';
                  break;
              case 6:
                  var _value = value / _baseL;
                  text += parseInt(_value) + " Lacs "
                  if (_value % 2 != 0) {
                      text += convertor(value - _baseL)
                  }
                  break;
              default:
                  text = ''
          }
      
          return 
      };
      var test = convertor(100000);
---
anoother test
