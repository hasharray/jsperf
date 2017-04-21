---
title: first try vs second vs third vs fourth vs fifth vs sixth vs seventh vs eigth
setup: |
  s = "+/test/test2+test3/+a/+="
tests:
  -
    name: first try
    code: |
      s.replace(/(\+)|(\/)|=/g, (c,m1,m2)=>m1?'-':m2?'_':'');
  -
    name: second
    code: |
      s.replace(/(\+)|(\/)|=/g, (c,m1,m2)=>m1?'-':m2?'_':'');
  -
    name: third
    code: |
      s.replace(/[+/=]/g, c=>({'+':'-','/':'_'})[c]||'');
  -
    name: fourth
    code: |
      s.replace(/(\+)|(\/)|=/g, (a,b,c)=>b?'-':c?'_':'');
  -
    name: fifth
    code: |
      s.replace(/[+/=]/g, c=>({'+':'-','/':'_'}[c]||''));
  -
    name: sixth
    code: |
      s.replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'');
  -
    name: seventh
    code: |
      s.replace(/[+/=]/g, c=>'-_'.charAt('+/='.indexOf(c)));
  -
    name: eigth
    code: |
      s.replace(/[+/=]/g, c=>['-','_','']['+/='.indexOf(c)]);
---
Testing various ways to implement the replacement of '+/=' used in url safe base64 used by JWK thumbprint.
