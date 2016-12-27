---
title: CustomError Inherit with Object.setPrototypeOf() vs CustomError Inherit with Object.create()
setup: |
  function CustomError(message) {
      Object.defineProperty(this, 'name', {
          enumerable: false,
          writable: false,
          value: 'CustomError'
      });
  
      Object.defineProperty(this, 'message', {
          enumerable: false,
          writable: true,
          value: message
      });
  
      if (Error.hasOwnProperty('captureStackTrace')) { // V8
          Error.captureStackTrace(this, this.constructor);
      } else {
          Object.defineProperty(this, 'stack', {
              enumerable: false,
              writable: false,
              value: (new Error(message)).stack
          });
      }
  }
tests:
  -
    name: CustomError Inherit with Object.setPrototypeOf()
    code: |
      Object.setPrototypeOf(CustomError, Error.prototype);
      
      var e = new CustomError('test error');
      console.log(e.message, e instanceof Error, e instanceof CustomError);
  -
    name: CustomError Inherit with Object.create()
    code: |
      CustomError.prototype = Object.create(Error.prototype);
      
      var e = new CustomError('test error');
      console.log(e.message, e instanceof Error, e instanceof CustomError);
---
Performance test for CustomError that inherits Error via Object.setPrototypeOf() vs Object.create()
