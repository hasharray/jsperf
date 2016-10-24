---
title: find vs context 1 vs context 2
setup: |
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  
  <article id="article">
  <p>A test</p>
  <p class="iframe"><iframe></iframe></p>
  <p>This is text</p>
  </article>
  
        
  
        <script>
  
          Benchmark.prototype.setup = function() {
  
            
    
    
  
          
    };
  
  
        
  </script>
tests:
  -
    name: find
    code: |
      var hasFrame = $('#article').find('.iframe').length > 0 ? true : false;
  -
    name: context 1
    code: |
      var hasFrame = $('.iframe', '#article').length > 0 ? true : false;
  -
    name: context 2
    code: |
      var hasFrame = $('#article .iframe').length > 0 ? true : false;
---

