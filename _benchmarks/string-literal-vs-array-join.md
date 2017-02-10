---
title: string literal vs array.join
setup: |
  
tests:
  -
    name: string literal
    code: |
      var test = `<body>
        <article>
          <time datetime='1'>1</time>
        </article>
      </body>`;
  -
    name: array.join
    code: |
      var test = [
      '<body>',
      '  <article>',
      '    <time datetime="1">1</time>',
      '  </article>',
      '</body>;'
      ].join('\n');
---

