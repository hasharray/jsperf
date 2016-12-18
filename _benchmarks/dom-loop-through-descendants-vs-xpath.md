---
title: dom: loop through descendants vs xpath
setup: |
  var elementNode = document.ELEMENT_NODE;
  var textNode = document.TEXT_NODE;
  
  var textNodes = {
      loopDescendants: [],
      xpath: []
  };
  
  var ignoredTags = ['IFRAME', 'SCRIPT', 'NOSCRIPT', 'STYLE', 'CANVAS', 'SVG', 'A', 'AUDIO', 'IMG', 'MAP', 'VIDEO', 'EMBED', 'OBJECT', 'BUTTON', 'SELECT', 'INPUT', 'TEXTAREA', 'PROGRESS', 'TEMPLATE'];
  
  var xpathExpression = './/text()[not(ancestor::' + ignoredTags.join(' | ancestor::') + ')]';
  
  function allowedTag(tagName) {
      for (var i = ignoredTags.length; i--; ) {
          if (ignoredTags[i] === tagName) {
              return false;
          }
      }
      return true;
  }
  
  var testDiv = document.createElement('div');
  testDiv.id = 'testDiv';
  
  testDiv.innerHTML = '<div> <div> <div></div> </div> <a>Link</a> <header> <div> <a> <svg> <path></path> </svg> </a> <button> <svg> <path></path> </svg> </button> <div> <nav> <a>Personal</a> <a>Open source</a> <a>Business</a> <a>Explore</a> </nav> <div> <a>Sign up</a> <a>Log in</a> </div> <nav> <a>Pricing</a> <a>Blog</a> <a>Support</a> <a>Search</a> <div> <form> <div> <input></div> <label> <div></div> <input></label> </form> </div> </nav> </div> </div> </header> <div></div> <div></div> <div> <div> <div> <div> <div> <h1>Title</h1> <p> Subtitle </p> </div> <div> <div> <form> <div> <input> <input></div> <dl> <dd> <label>Pick a username</label> <input></dd> </dl> <dl> <dd> <label>Enter your email address</label> <input></dd> </dl> <dl> <dd> <label>Create a password</label> <input></dd> <p>Use at least one letter, one numeral, and seven characters.</p> </dl> <input> <button>Sign up</button> <p> By clicking "Sign up", you agree to our <a>terms of service</a> and <a>privacy policy</a> . <span>We'll occasionally send you account related emails.</span> </p> </form> </div> <div> <a>Sign up</a> </div> </div> </div> </div> </div> <div> <div> <h2>Title</h2> <p> Subtitle. </p> </div> <div> <div> <div> <img> <h4>Title</h4> <p> Subtitle. </p> </div> <div> <img> <h4>Title</h4> <p> Subtitle. </p> </div> <div> <img> <h4>Title</h4> <p> Subtitle </p> </div> <div> <img> <h4>Title</h4> <p> Subtitle </p> </div> </div> </div> </div> <div> <div> <h2>Title</h2> <hr> <div> <div> <h3> <a> Individuals <svg> <path></path> </svg> </a> </h3> <p> Subtitle. </p> </div> <div> <h3> <a> Communities <svg> <path></path> </svg> </a> </h3> <p> Subtitle. </p> </div> <div> <h3> <a> Businesses <svg> <path></path> </svg> </a> </h3> <p> Subtitle. </p> </div> </div> <hr> <div> <div> <p> Subtitle. <a>link</a> . </p> </div> <div> <img></div> </div> </div> </div> <div> <div> <div> <div> <a>Sign up</a> </div> <div> Subtitle. </div> </div> </div> </div> <div></div> </div> <div> <div> <ul> <li> <a>Contact</a> </li> <li> <a>Training</a> </li> <li> <a>Shop</a> </li> <li> <a>Blog</a> </li> <li> <a>About</a> </li> </ul> <a> <svg> <path></path> </svg> </a> <ul> <li> <a>Terms</a> </li> <li> <a>Privacy</a> </li> <li> <a>Security</a> </li> <li> <a>Status</a> </li> <li> <a>Help</a> </li> </ul> </div> </div> <div> <svg> <path></path> </svg> <button> <svg> <path></path> </svg> </button> You can't perform that action at this time. </div> <script>2 + 2</script> <script>//nothing is here</script> <div> <svg> <path></path> </svg> </div> <div> <div> <div></div> <button> <svg> <path></path> </svg> </button> </div> </div> </div>';
  
  document.body.appendChild(testDiv);
tests:
  -
    name: dom: loop through descendants
    code: |
      var children = [testDiv];
      
      
      var i = 0;
      
      while (i < children.length) {
          if (children[i].nodeType === textNode) {
              textNodes.loopDescendants.push(children[i]);
          } else if (children[i].nodeType === elementNode && children[i].hasChildNodes() && allowedTag(children[i].tagName)) {
              children.push.apply(children, children[i].childNodes);
          }
          i++;
      }
  -
    name: xpath
    code: |
      var textNodesIterator = document.evaluate(xpathExpression, root, null, XPathResult.ANY_TYPE, null);
      var node = textNodesIterator.iterateNext();
      
      while (node) {
          textNodes.xpath.push(node);
          node = textNodesIterator.iterateNext();
      }
---
Task: find all textNodes, that are not descendants of specified elements (array ignoredTags).

(those textNodes could be linkified afterwards)
