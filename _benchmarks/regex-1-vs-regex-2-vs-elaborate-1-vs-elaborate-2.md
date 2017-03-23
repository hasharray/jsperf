---
title: Regex 1 vs Regex 2 vs Elaborate 1 vs Elaborate 2
setup: |
  var str1 = 'Noel sees Leon',
      str2 = 'Degas, are we not drawn onward, we freer few, drawn onward to new eras aged?';
tests:
  -
    name: Regex 1
    code: |
      function isPalindrome (str) {
              'use strict';
      
              str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
              return str.split('').reverse().join('') === str;
          }
      
      isPalindrome( str1 );
  -
    name: Regex 2
    code: |
      function isPalindrome (str) {
              'use strict';
      
              str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
              return str.split('').reverse().join('') === str;
          }
      
      isPalindrome( str2 );
  -
    name: Elaborate 1
    code: |
      function isValidPalindromeCharacter( char ){
        return ( 'A' <= char && char <= 'Z' )
            || ( 'a' <= char && char <= 'z' )
            || ( '0' <= char && char <= '9' );
      }
      
      function isCharactersEqual( a, b ){
        return a.toLowerCase() == b.toLowerCase();
        // return (a.charCodeAt(0)|32) == (b.charCodeAt(0)|32);
      }
      
      function isPalindrome(str){
        var lower = 0,
            upper = str.length - 1;
        while ( true )
        {
          while ( lower < upper && !isValidPalindromeCharacter( str[lower] ) )
          {
            lower++;
          }
          while ( lower < upper && !isValidPalindromeCharacter( str[upper] ) )
          {
            upper--;
          }
          if ( lower >= upper )
          {
            return true;
          }
          if ( !isCharactersEqual( str[lower], str[upper] ) )
          {
            return false;
          }
          lower++;
          upper--;
        }
      }
      
      isPalindrome( str1 );
  -
    name: Elaborate 2
    code: |
      function isValidPalindromeCharacter( char ){
        return ( 'A' <= char && char <= 'Z' )
            || ( 'a' <= char && char <= 'z' )
            || ( '0' <= char && char <= '9' );
      }
      
      function isCharactersEqual( a, b ){
        return a.toLowerCase() == b.toLowerCase();
        // return (a.charCodeAt(0)|32) == (b.charCodeAt(0)|32);
      }
      
      function isPalindrome(str){
        var lower = 0,
            upper = str.length - 1;
        while ( true )
        {
          while ( lower < upper && !isValidPalindromeCharacter( str[lower] ) )
          {
            lower++;
          }
          while ( lower < upper && !isValidPalindromeCharacter( str[upper] ) )
          {
            upper--;
          }
          if ( lower >= upper )
          {
            return true;
          }
          if ( !isCharactersEqual( str[lower], str[upper] ) )
          {
            return false;
          }
          lower++;
          upper--;
        }
      }
      
      isPalindrome( str2 );
---
Comparing regex to an elaborate alternative
