---
title: Populate Select with For loop vs Populate Select with Map
setup: |
  
tests:
  -
    name: Populate Select with For loop
    code: |
      function populateExpiryMonths() {
          var $expiryMonth, sDisplayMonth;
          $expiryMonth = $('#expiry-month');
          $expiryMonth.empty().append('<option value="">MM</option>');
          Array.apply(null, {length: 12}).map(function(value, i){
      		sDisplayMonth = ("0" + i).slice(-2);
           	$expiryMonth.append('<option value="' + sDisplayMonth + '">'+ sDisplayMonth + '</option>'); 
          });
      }
  -
    name: Populate Select with Map
    code: |
      function populateExpiryMonths() {
          var $expiryMonth, sDisplayMonth;
          $expiryMonth = $('#expiry-month');
          $expiryMonth.empty().append('<option value="">MM</option>');
          Array.apply(null, {length: 12}).map(function(value, i){
      		sDisplayMonth = ("0" + i).slice(-2);
           	$expiryMonth.append('<option value="' + sDisplayMonth + '">'+ sDisplayMonth + '</option>'); 
          });
      }
---

