---
title: new vs obj literal
setup: |
  function thing(value, metadata) {
     this.value = value;
     this.metadata = metadata;
  }
  
  real_value = 123456;
  real_metadata = [];
tests:
  -
    name: new
    code: |
      var x = new thing(real_value, real_metadata);
  -
    name: obj literal
    code: |
      var x = {
          value: real_value;
          metadata: real_metadata;
      };
---
new vs. object literal
