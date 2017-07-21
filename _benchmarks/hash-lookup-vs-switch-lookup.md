---
title: Hash lookup vs Switch lookup
setup: |
  let md5= '22222222222222222222222222222222';
  let sha1 = '4444444444444444444444444444444444444444';
  let sha256 = '8888888888888888888888888888888888888888888888888888888888888888';
  let invalid = '34rsd934'
  
  const hashLookup = ( () => {
       const hashes = {
           32: 'emailLowercasedToMD5',
           64: 'emailLowercasedToSHA256',
           40: 'emailLowercasedToSHA1'
       };
       return function( hash ) { return hashes[ hash.length ]; };
   } )();
  
  hashSwitch = function hashSwitch( hash ) {
      switch( hash.length ) {
          case 32: {
              return 'md5';
          }
          case 40: {
              return 'sha1';
          }
          case 64: {
              return 'sha256';
          }
  }
tests:
  -
    name: Hash lookup
    code: |
      hashLookup(md5);
      hashLookup(sha1);
      hashLookup(sha256);
      hashLookup(invalid);
  -
    name: Switch lookup
    code: |
      hashSwitch(md5);
      hashSwitch(sha1);
      hashSwitch(sha256);
      hashSwitch(invalid);
---
Test performance of different methods of checking hash type
