---
title: children('div') vs find('div') vs children('.outer') vs find('.outer') vs find('> .outer')
setup: |
  <div id="test">
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  <div class="outer"><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div class="inner">Test</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
tests:
  -
    name: children('div')
    code: |
      $('#test').children('div');
  -
    name: find('div')
    code: |
      $('#test').find('div');
  -
    name: children('.outer')
    code: |
      $('#test').children('.outer');
  -
    name: find('.outer')
    code: |
      $('#test').find('.outer');
  -
    name: find('> .outer')
    code: |
      $('#test').find('> .outer');
---

