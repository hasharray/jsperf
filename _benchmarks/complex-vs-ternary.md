---
title: complex  vs ternary
setup: |
  var email = 'x';
  var users = ['x', 'y'];
tests:
  -
    name: complex 
    code: |
      var valid_user = -1;
      if (users.indexOf(email) > -1)
          valid_user = 1;
      else valid_user = 0;
      var resp = {
          status: valid_user
      };
  -
    name: ternary
    code: |
      var resp = {status: users.indexOf(email) > -1 ? 1 : 0};
---

