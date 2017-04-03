---
title: Template method vs contextualFragment method
setup: |
  var tpl = "<div class="category category-588c7ca64be48e60698b4572" data-id="588c7ca64be48e60698b4572" style="position: absolute; left: 0px; top: 0px;">
      <div class="category-header">
          <div data-id="588c7ca64be48e60698b4572">
              <h2 class="no-selection"> Intérêts</h2>
              <a class="bookmark-add mbri-bookmark" title="Add a bookmark"></a>
              <a class="category-edit mbri-edit2" title="Edit category Intérêts"></a>
              <div class="clr"></div>
          </div>
      </div>
      <ul class="bookmarks " data-id="588c7ca64be48e60698b4572">
          
          
  
              
  
                  <li class="bookmark bookmark-link sort" data-id="588c7ca64be48e60698b4574">
                      <div class="action edit mbri-edit2"></div>
                      <a target="_blank" rel="noopener" title="denofgeek.com" href="http://www.denofgeek.com/">
                          <img src="https://www.google.com/s2/favicons?domain=http://www.denofgeek.com" width="16" height="16" alt="denofgeek.com"> denofgeek.com
                      </a>
                  </li>
              
  
              
  
              
          
  
              
  
                  <li class="bookmark bookmark-link sort" data-id="588c7ca64be48e60698b4573">
                      <div class="action edit mbri-edit2"></div>
                      <a target="_blank" rel="noopener" title="The Dailymars" href="http://www.dailymars.net/">
                          <img src="https://www.google.com/s2/favicons?domain=http://www.dailymars.net" width="16" height="16" alt="The Dailymars"> The Dailymars
                      </a>
                  </li>
              
  
              
  
              
          
  
              
  
                  <li class="bookmark bookmark-link sort" data-id="588c7ca64be48e60698b4575">
                      <div class="action edit mbri-edit2"></div>
                      <a target="_blank" rel="noopener" title="SpaceHack" href="http://spacehack.org/">
                          <img src="https://www.google.com/s2/favicons?domain=http://spacehack.org" width="16" height="16" alt="SpaceHack"> SpaceHack
                      </a>
                  </li>
              
  
              
  
              
          
  
              
  
                  <li class="bookmark bookmark-link sort" data-id="588c7ca64be48e60698b4576">
                      <div class="action edit mbri-edit2"></div>
                      <a target="_blank" rel="noopener" title="Splitscreen" href="http://www.splitscreenpodcast.com/">
                          <img src="https://www.google.com/s2/favicons?domain=http://www.splitscreenpodcast.com" width="16" height="16" alt="Splitscreen"> Splitscreen
                      </a>
                  </li>
              
  
              
  
              
          
  
              
  
              
  
              
  
                  <li class="bookmark bookmark-note sort" data-id="58b935884be48e885a8b4567">
                  <div class="action edit mbri-edit2"></div>
                  <a title="Films">
                      <div class="icon icon-note"></div> Films
                  </a>
              </li>
              
          
      </ul>
  </div>";
tests:
  -
    name: Template method
    code: |
      var elem = document.createElement('template');
      elem.innerHTML = tpl;
      return elem.content;
  -
    name: contextualFragment method
    code: |
      document.createRange().createContextualFragment(tpl);
---
Test method to parse strong as DOM node
