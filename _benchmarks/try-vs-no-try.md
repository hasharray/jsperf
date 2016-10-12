---
title: Try vs No try
setup: |
  
tests:
  -
    name: Try
    code: |
      try {
        for ( let i = 0; i < 10000; ++i ) {
          console.log(i);
        }
      } catch() {
      }
  -
    name: No try
    code: |
      for ( let i = 0; i < 10000; ++i ) {
          console.log(i);
        }
---

