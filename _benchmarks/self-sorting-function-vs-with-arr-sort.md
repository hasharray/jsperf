---
title: Self sorting function vs With arr.sort
setup: |
  
tests:
  -
    name: Self sorting function
    code: |
      function dblLinear(n) {
          let u = [1];
          let i = 0;
          while (i <= n) {
              let y = 2* u[i] +1;
              let z = 3* u[i] +1;
              for (let ix = i; ix <= u.length; ix++) {
                  if(u[ix] < y) {
                      continue;
                  }
                  else if(u[ix] === y) {
                      break;
                  }
                  else if(u[ix] > y) {
                      u.splice(ix,0,y);
                      break;
                  }
                  else {
                    u.push(y);
                    break;
                  }
              }
              u.push(z);
              i++;
          }
          return u[n];
      }
      
      dblLinear(100);
  -
    name: With arr.sort
    code: |
      function dblLinear(n) {
          let u = [1];
          let i = 0;
          while (i <= n) {
              let y = 2* u[i] +1;
              let z = 3* u[i] +1;
              if (u.indexOf(y) < 0) {
                  u.push(y)
                  u.sort((a,b) => a-b);
              }
              u.push(z);
              i++;
          }
          return u[n];
      }
      dblLinear(100);
---
Test
