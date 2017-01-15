---
title: testing vs name1
setup: |
  function tester() {
  
              var count = 0;
              var n = 1;
              var prime = 0;
              var wantedPrime = 10001;
  
              var isItPrime = function(n) {
                  for (var divider = 2; divider < n; divider++) {
                      if (n % divider === 0) {
                          return false;
                      }
                  }
                  return true;
              };
  
              for (n; count < wantedPrime; n++) {
                  if (n % 2 !== 0) { // immediately filter out even numbers as they are obviously not prime
                      if (isItPrime(n)) {
                          prime = n;
                          count++;
                      }
                  }
              }
              return prime;
          }
  
  
  var nthPrime = function(n) {
  
              // modified Sieve of Eratosthenes algorithm to return nth prime quicker
              // works to get nth primes as high as ~5,000,000 (~6300ms). Going higher crashes my browser
              // can execute the 10001th prime in 13ms whereas my initial was about 1530ms
              // complete overkill but was still a fun little problem to do!
  
              var arr = [];
              // multiplying n to "educated guess" the area that our nth prime will be
              // n * 20 seems to be the sweet spot, can't go much higher without crashing browser and can still
              // calculate nth primes up to 5 million.
              var upperLimit = n * 20;
              var primes = [];
  
              // generate array with an estimated guess of indexes needed to be able to find nth prime
              // note: indexes are the numbers being evaluated and true/false is how to check prime / not prime 
              for (var i = 0; i < upperLimit; i++) {
                  arr.push(true);
              }
  
              // pseudocode from https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Pseudocode which
              // sorts out non prime numbers by finding the true(prime) numbers and squaring them then setting
              // the squared values to false 
              for (var i = 2; i <= upperLimit; i++) {
                  if (arr[i]) {
                      for (var j = i * i; j < upperLimit; j += i) {
                          arr[j] = false;
                      }
                  }
              }
  
              // just pushes anything left over thats true to an array of prime numbers
              // can then return the nth number which will be the index we are looking for
              for (var i = 2; i < upperLimit; i++) {
                  if (arr[i]) {
                      primes.push(i);
                  }
              }
  
              return primes[n - 1];
          };
tests:
  -
    name: testing
    code: |
      tester()
  -
    name: name1
    code: |
      nthPrime(10001)
---

