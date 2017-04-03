---
title: while vs do while
setup: |
  <script>
      var criteria = 'THIS "IS MY" TEST "STRING"';
  </script>
tests:
  -
    name: while
    code: |
      var quotArr = [],
              quotIdx = -1;
          while( ( quotIdx = criteria.indexOf( '"', quotIdx+1 ) ) > -1 )
          {
              quotArr.push( quotIdx );
          }
  -
    name: do while
    code: |
      var quotIdx = criteria.indexOf( '"' );
          if( quotIdx > -1 )
          {
              var quotArr = [];
              do
              {
                  quotArr.push( quotIdx );
                  quotIdx = criteria.indexOf( '"', quotIdx+1 );
              }
              while( quotIdx > -1 );
          }
---

