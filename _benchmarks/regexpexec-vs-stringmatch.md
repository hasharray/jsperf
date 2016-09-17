---
setup: |
  var data = 0;ss
tests:
  -
    name: String#match
    code: |
      for (var obj of data) {
        obj == obj;
      }
  -
    name: String#match
    code: |
      for (var obj of data) {
        obj == obj;
      }
---

