---
title: .toLowerCase().indexOf(x) vs .search(/x/i) vs .search(/x/i) (precompiled)
setup: |
  var precompiled = /@someuser/i;
  var longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac cursus nulla. Quisque urna tellus, suscipit vitae nibh id, pretium faucibus dolor. Sed ac orci luctus, vehicula diam in, ultrices elit. Sed tempus risus condimentum dolor ullamcorper aliquet vel nec mi. Integer condimentum augue quis metus rutrum, in bibendum magna pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non rutrum nisi. Proin lectus ante, sagittis sit amet est sit amet, hendrerit posuere sapien. Vestibulum cursus gravida ultricies. Ut fringilla fermentum facilisis. Curabitur vitae finibus libero. Fusce feugiat orci non lorem varius, @SomeUser pellentesque ornare neque ultricies.";
tests:
  -
    name: .toLowerCase().indexOf(x)
    code: |
      var contains = longString.toLowerCase().indexOf('@someuser') !== -1;
  -
    name: .search(/x/i)
    code: |
      var contains = longString.search(/@someuser/i) !== -1;
  -
    name: .search(/x/i) (precompiled)
    code: |
      var contains = longString.search(precompiled) !== -1;
---
Tests .toLowerCase().indexOf(x) !== -1 vs .search(/x/i)
